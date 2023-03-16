import { defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';
import { Datetime } from '../../shared/DateTime';
import { http } from '../../shared/Http';
import { Money } from '../../shared/Money';
import styles from './ItemSummary.module.scss';
import SvgIcon from '../svgIcon/index.vue';
import { useItemStore } from '../../stores/useItemStore';
export const ItemSummary = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true
    },
    endDate: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup: (props, context) => {
    const itemStore = useItemStore(['items', props.startDate, props.endDate])
    onMounted(() => itemStore.fetchItems(props.startDate, props.endDate))
    watch(
      () => [props.startDate, props.endDate],
      () => {
        itemStore.$reset()
        itemStore.fetchItems(props.startDate, props.endDate)
      }
    )
    const itemsBalance = reactive({
      expenses: 0, income: 0, balance: 0
    })
    const fetchItemsBalance = async ()=>{
      if(!props.startDate || !props.endDate){ return }
      const response = await http.get('/items/balance', {
        happen_after: props.startDate,
        happen_before: props.endDate,
        _mock: 'itemIndexBalance',
      })
      Object.assign(itemsBalance, response.data)
    }
    onMounted(fetchItemsBalance)
    watch(
      () => [props.startDate, props.endDate],
      () => {
        Object.assign(itemsBalance, {
          expenses: 0,
          income: 0,
          balance: 0
        })
        fetchItemsBalance()
      }
    )
    return () => (
      <div class={styles.wrapper}>
        {itemStore.items && itemStore.items.length ? (
          <>
            <ul class={styles.total}>
              <li>
                <span>收入</span>
                <Money value={itemsBalance.income} />
              </li>
              <li>
                <span>支出</span>
                <Money value={itemsBalance.expenses} />
              </li>
              <li>
                <span>净收入</span>
                <Money value={itemsBalance.balance} />
              </li>
            </ul>
            <ol class={styles.list}>
              {itemStore.items.map((item) => (
                <li>
                  <div class={styles.sign}>
                    <span>{item.tags![0].sign}</span>
                  </div>
                  <div class={styles.text}>
                    <div class={styles.tagAndAmount}>
                      <span class={styles.tag}>{item.tags![0].name}</span>
                      <span class={[item.kind === 'expenses' ? [styles.amount, styles.expenses] : [styles.amount, styles.income]]}>{item.kind === 'expenses' ? '-' : '+'}<Money value={item.amount}/></span>
                    </div>
                    <div class={styles.time}><Datetime value={item.happen_at}/></div>
                  </div>
                </li>
              ))}
            </ol>
            <div class={styles.more}>
              {itemStore.hasMore ?
                <span onClick={() => itemStore.fetchNextPage(props.startDate, props.endDate)}>点击加载更多</span> :
                <span>没有更多</span>
              }
            </div>
          </>
        ) : ( 
          <div class={styles.error}>
            <SvgIcon name="no" class={styles.errorIcon}/>
            <p class={styles.errorTitle}>没有内容</p>
          </div> 
        )}
      </div>
    )
  }
})