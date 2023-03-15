import { defineComponent, PropType } from 'vue';
import { RouterLink } from 'vue-router';
import styles from './Tabbar.module.scss';
import SvgIcon from '../components/svgIcon/index.vue';
export const Tabbar = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={styles.tabbar}>
        <RouterLink to='/items' class={styles.tabbarItem}>
          <SvgIcon name='home1' class={styles.tabbarItem_sign}/>
          <span class={styles.tabbarItem_title}>首页</span>
        </RouterLink>
        <RouterLink to='/items/create' class={styles.tabbarItem}>
          <SvgIcon name='jilu' class={styles.tabbarItem_sign}/>
          <span class={styles.tabbarItem_title}>记账</span>
        </RouterLink>
        <RouterLink to='/statistics' class={styles.tabbarItem}>
          <SvgIcon name='statistics' class={styles.tabbarItem_sign}/>
          <span class={styles.tabbarItem_title}>统计</span>
        </RouterLink>
      </div>
    )
  }
})