import { defineComponent, PropType } from 'vue';
export const MainLayout = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>MainLayout</div>
    )
  }
})