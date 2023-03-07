import { defineComponent, PropType, ref } from 'vue';
import styles from './ItemList.module.scss';
export const ItemList = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    
  }
})