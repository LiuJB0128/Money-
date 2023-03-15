import { defineComponent, ref } from 'vue';
import { ItemSummary } from './ItemSummary';
import 'vant/es/button/style';
import 'vant/es/popup/style';
import { TimeTabsLayout } from '../../layouts/TimeTabsLayout';
import SvgIcon from '../svgIcon/index.vue';
import { Tabbar, TabbarItem } from 'vant';
import 'vant/es/tabbar/style';
import 'vant/es/tabbar-item/style';
import { RouterLink } from 'vue-router';
import styles from './ItemList.module.scss'

export const ItemList = defineComponent({
  setup: (props, context) => {
    return () => <>
      <TimeTabsLayout component={ItemSummary}>
        {{
          title: () => '首页',
          icon: () => <SvgIcon name='home'></SvgIcon>
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