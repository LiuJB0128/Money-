import { defineComponent, reactive, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Time } from '../../shared/time';
import styles from './ItemList.module.scss';
import SvgIcon from '../svgIcon/index.vue'
import { Tab, Tabs } from '../../shared/Tabs';
import { ItemSummary } from './ItemSummary';

export const ItemList = defineComponent({
  setup: (props, context) => {
    const refSelected = ref('本月')
    const time = new Time()
    const customTime = reactive({
      start: new Time(),
      end: new Time()
    })
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth()
      },
      {
        start: time.reduce(1, 'month').firstDayOfMonth(),
        end: time.reduce(1, 'month').lastDayOfMonth()
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear()
      }
    ]
    return () => (
      <MainLayout>{
        {
          title: () => '首页',
          icon: () => <SvgIcon name="left" />,
          default: () => (
            <Tabs v-model:selected={refSelected.value}>
              <Tab name="本月">
                <ItemSummary
                  startDate={timeList[0].start.format()}
                  endDate={timeList[0].end.format()} />
              </Tab>
              <Tab name="上月">
                <ItemSummary
                  startDate={timeList[1].start.format()}
                  endDate={timeList[1].end.format()} />
              </Tab>
              <Tab name="今年">
                <ItemSummary
                  startDate={timeList[2].start.format()}
                  endDate={timeList[2].end.format()} />
              </Tab>
              <Tab name="自订">
                <ItemSummary
                  startDate={customTime.start.format()}
                  endDate={customTime.end.format()} />
              </Tab>
            </Tabs>
          )
        }
      }</MainLayout>
    )
  }
})