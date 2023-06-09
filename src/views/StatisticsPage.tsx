import { defineComponent } from 'vue';
import { Charts } from '../components/statistics/Charts';
import { TimeTabsLayout } from '../layouts/TimeTabsLayout';
import { BackIcon } from '../shared/BackIcon';
import { Tabbar } from '../shared/Tabbar';
export const StatisticsPage = defineComponent({
  setup: (props, context) => {
    return () => <>
      <TimeTabsLayout rerenderOnSwitchTab={true} component={Charts} hideThisYear={true}>
        {{
          title: () => '统计页面',
          icon: () => <BackIcon/>
        }}
      </TimeTabsLayout>
      <Tabbar/>
    </>
  }
})

export default StatisticsPage