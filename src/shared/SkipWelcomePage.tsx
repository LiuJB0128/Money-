import { defineComponent, PropType } from 'vue';
import { RouteLocationRaw, RouterLink } from 'vue-router';
export const SkipWelcomePage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      localStorage.setItem('skipWelcomePage', 'yes')
    }
    return () => (
      <span onClick={onClick}>
        <RouterLink to="/items">开始记账</RouterLink>
      </span>
    )
  }
})