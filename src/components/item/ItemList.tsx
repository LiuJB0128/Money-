import { defineComponent } from 'vue';
import { ItemSummary } from './ItemSummary';
import 'vant/es/button/style';
import 'vant/es/popup/style';
import { TimeTabsLayout } from '../../layouts/TimeTabsLayout';
import SvgIcon from '../svgIcon/index.vue';

export const ItemList = defineComponent({
  setup: (props, context) => {
    return () => (
      <TimeTabsLayout component={ItemSummary}>
        {{
          title: () => '首页',
          icon: () => <SvgIcon name='home'></SvgIcon>
        }}
      </TimeTabsLayout>
    )
  }
})