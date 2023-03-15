import { defineComponent } from 'vue';
import { Charts } from '../components/statistics/Charts';
import { TimeTabsLayout } from '../layouts/TimeTabsLayout';
import SvgIcon from '../components/svgIcon/index.vue';
import { BackIcon } from '../shared/BackIcon';
import { RouterLink } from 'vue-router';
import styles from './StatisticsPage.module.scss'
export const StatisticsPage = defineComponent({
  setup: (props, context) => {
    return () => <>
      <TimeTabsLayout component={Charts}>
        {{
          title: () => '统计页面',
          icon: () => <BackIcon/>
        }}
      </TimeTabsLayout>
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
    </>
  }
})