import { defineComponent, onMounted, PropType, reactive, ref } from 'vue';
import { Datetime } from '../../shared/DateTime';
import { http } from '../../shared/Http';
import { Money } from '../../shared/Money';
import styles from './ItemSummary.module.scss';
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
    const items = ref<Item[]>([])
    const hasMore = ref(false)
    const page = ref(0)
    const fetchItems = async () => {
      const response = await http.get<Resources<Item>>('/items', {
        happen_after: props.startDate,
        happen_before: props.endDate,
        page: page.value + 1,
        _mock: 'itemIndex',
      })
      const { resources, pager } = response.data
      items.value?.push(...resources)
      hasMore.value = (pager.page - 1) * pager.per_page + resources.length < pager.count
      page.value += 1
    }
    onMounted(fetchItems)
    const itemsBalance = reactive({
      expenses: 0, income: 0, balance: 0
    })
    onMounted(async ()=>{
      if(!props.startDate || !props.endDate){ return }
      const response = await http.get('/items/balance', {
        happen_after: props.startDate,
        happen_before: props.endDate,
        page: page.value + 1,
        _mock: 'itemIndexBalance',
      })
      Object.assign(itemsBalance, response.data)
    })
    return () => (
      <div class={styles.wrapper}>
        {items.value ? (
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
              {items.value.map((item) => (
                <li>
                  <div class={styles.sign}>
                    <span>{item.tags![0].sign}</span>
                  </div>
                  <div class={styles.text}>
                    <div class={styles.tagAndAmount}>
                      <span class={styles.tag}>{item.tags![0].name}</span>
                      <span class={styles.amount}>￥<Money value={item.amount}/></span>
                    </div>
                    <div class={styles.time}><Datetime value={item.happen_at}/></div>
                  </div>
                </li>
              ))}
            </ol>
            <div class={styles.more}>
              {hasMore.value ?
                <span onClick={fetchItems}>点击加载更多</span> :
                <span>没有更多</span>
              }
            </div>
          </>
        ) : ( <div>记录为空</div> )}
      </div>
    )
  }
})