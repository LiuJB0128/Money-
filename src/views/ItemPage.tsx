import { defineComponent, PropType } from 'vue';
import styles from './ItemPage.module.scss';
export const ItemPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={styles.wrapper}>ItemPage</div>
    )
  }
})