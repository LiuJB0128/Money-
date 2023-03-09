import { defineComponent, PropType } from 'vue';
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
    return () => (
      <div class={styles.wrapper}>
        <ul class={styles.total}>
          <li><span>收入</span><span>128</span></li>
          <li><span>支出</span><span>99</span></li>
          <li><span>净收入</span><span>39</span></li>
        </ul>
        <ol class={styles.list}>
          <li>
            <div class={styles.sign}>
              <span>X</span>
            </div>
            <div class={styles.text}>
              <div class={styles.tagAndAmount}>
                <span class={styles.tag}>旅行</span>
                <span class={styles.amount}>￥1234</span>
              </div>
              <div class={styles.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
          <li>
            <div class={styles.sign}>
              <span>X</span>
            </div>
            <div class={styles.text}>
              <div class={styles.tagAndAmount}>
                <span class={styles.tag}>旅行</span>
                <span class={styles.amount}>￥1234</span>
              </div>
              <div class={styles.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
        </ol>
        <div class={styles.more}>向下滑动加载更多</div>
        <button />
      </div>
    )
  }
})