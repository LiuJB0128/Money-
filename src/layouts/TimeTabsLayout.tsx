import { defineComponent, PropType, ref } from 'vue';
import styles from './TimeTabsLayout.module.scss';
import 'vant/es/button/style';
import 'vant/es/popup/style';
import { Time } from '../shared/time';
import { MainLayout } from './MainLayout';
import { Tab, Tabs } from '../shared/Tabs';

const demo = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true
    },
    endDate: {
      type: String as PropType<string>,
      required: true
    }
  },
})

export const TimeTabsLayout = defineComponent({
  props: {
    component: {
      type: Object as PropType<typeof demo>,
      required: true
    },
    rerenderOnSwitchTab: {
      type: Boolean,
      default: false
    },
    hideThisYear: {
      type: Boolean,
      default: false
    }
  },
  setup: (props, context) => {
    const { slots } = context
    const refSelected = ref('本月')
    const time = new Time()
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth()
      },
      {
        start: time.reduce(1, 'month').firstDayOfMonth().reduce(1, 'day'),
        end: time.reduce(1, 'month').lastDayOfMonth().add(1, 'day')
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear()
      }
    ]
    return () => (
      <MainLayout>
        {{
          title: () => slots.title?.(),
          icon: () => slots.icon?.(),
          default: () => <>
          {props.hideThisYear ? (
            <div class={styles.wrapper}>
              <Tabs v-model:selected={refSelected.value}
                class={styles.tabs}
                rerenderOnSelect={props.rerenderOnSwitchTab}>
                <Tab value="本月" name="本月">
                  <props.component
                    startDate={timeList[0].start.format()}
                    endDate={timeList[0].end.format()} />
                </Tab>
                <Tab value="上月" name="上月">
                  <props.component
                    startDate={timeList[1].start.format()}
                    endDate={timeList[1].end.format()} />
                </Tab>
              </Tabs>
            </div>
          ) : (
            <div class={styles.wrapper}>
              <Tabs v-model:selected={refSelected.value}
                class={styles.tabs}
                rerenderOnSelect={props.rerenderOnSwitchTab}>
                <Tab value="本月" name="本月">
                  <props.component
                    startDate={timeList[0].start.format()}
                    endDate={timeList[0].end.format()} />
                </Tab>
                <Tab value="上月" name="上月">
                  <props.component
                    startDate={timeList[1].start.format()}
                    endDate={timeList[1].end.format()} />
                </Tab>
                <Tab value="今年" name="今年">
                  <props.component
                    startDate={timeList[2].start.format()}
                    endDate={timeList[2].end.format()} />
                </Tab>
              </Tabs>
            </div>
          )}
          </>
        }}
      </MainLayout>
    )
  }
})