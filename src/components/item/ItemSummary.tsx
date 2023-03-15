import { defineComponent, onMounted, PropType, ref } from 'vue';
import { http } from '../../shared/Http';
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
    return () => (
      <div class={styles.wrapper}>
        {items.value ? (
          <>
            <ul class={styles.total}>
              <li>
                <span>收入</span>
                <span>128</span>
              </li>
              <li>
                <span>支出</span>
                <span>99</span>
              </li>
              <li>
                <span>净收入</span>
                <span>39</span>
              </li>
            </ul>
            <ol class={styles.list}>
              {items.value.map((item) => (
                <li>
                  <div class={styles.sign}>
                    <span>{item.tags_id[0]}</span>
                  </div>
                  <div class={styles.text}>
                    <div class={styles.tagAndAmount}>
                      <span class={styles.tag}>{item.tags_id[0]}</span>
                      <span class={styles.amount}>￥<>{item.amount}</></span>
                    </div>
                    <div class={styles.time}>{item.happen_at}</div>
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