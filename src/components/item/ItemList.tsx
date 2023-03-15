import { defineComponent } from 'vue';
import { ItemSummary } from './ItemSummary';
import { TimeTabsLayout } from '../../layouts/TimeTabsLayout';
import SvgIcon from '../svgIcon/index.vue';
import { Tabbar } from '../../shared/Tabbar';

export const ItemList = defineComponent({
  setup: (props, context) => {
    return () => <>
      <TimeTabsLayout component={ItemSummary}>
        {{
          title: () => '首页',
          icon: () => <SvgIcon name='home'></SvgIcon>
        }}
      </TimeTabsLayout>
      <Tabbar/>
    </>
  }
})