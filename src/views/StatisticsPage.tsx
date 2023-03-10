import { defineComponent } from 'vue';
import { Charts } from '../components/statistics/Charts';
import { TimeTabsLayout } from '../layouts/TimeTabsLayout';
import SvgIcon from '../components/svgIcon/index.vue';
export const StatisticsPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <TimeTabsLayout component={Charts}>
        {{
          title: () => '统计页面',
          icon: () => <SvgIcon name='left'></SvgIcon>
        }}
      </TimeTabsLayout>
    )
  }
})