import { defineComponent, reactive, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Time } from '../../shared/time';
import styles from './ItemList.module.scss';
import SvgIcon from '../svgIcon/index.vue'
import { Tab, Tabs } from '../../shared/Tabs';
import { ItemSummary } from './ItemSummary';
import { Button, Popup } from 'vant';
import { Form, FormItem } from '../../shared/Form';
import 'vant/es/button/style';
import 'vant/es/popup/style';

export const ItemList = defineComponent({
  setup: (props, context) => {
    const refPopupVisible = ref(false)
    const onSubmitCustomTime = () => {
      refPopupVisible.value = false
    }
    const refSelected = ref('本月')
    const time = new Time()
    const customTime = reactive({
      start: new Time().format(),
      end: new Time().format()
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
    const onSelect = (value: string) => {
      if (value === '自订') {
        refPopupVisible.value = true
      }
    }
    return () => (
      <MainLayout>{
        {
          title: () => '首页',
          icon: () => <SvgIcon name="home" />,
          default: () => <>
            <Tabs v-model:selected={refSelected.value} onUpdate:selected={onSelect}>
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
                  startDate={customTime.start}
                  endDate={customTime.end} />
              </Tab>
            </Tabs>
            <Popup round show={refPopupVisible.value}>
              <div class={styles.customTime}>
                <header>
                  请选择时间                  
                </header>
                <main>
                  <Form onSubmit={onSubmitCustomTime}>
                    <FormItem label='开始时间' v-model={customTime.start} type='date' />
                    <FormItem label='结束时间' v-model={customTime.end} type='date' />
                    <FormItem>
                      <div class={styles.actions}>
                        <Button class={styles.default} type="warning" onClick={() => refPopupVisible.value = false}>取消</Button>
                        <Button class={styles.submit} type="primary" onClick={onSubmitCustomTime}>确定</Button>
                      </div>
                    </FormItem>
                  </Form>
                </main>
              </div>
            </Popup>
          </>
        }
      }</MainLayout>
    )
  }
})