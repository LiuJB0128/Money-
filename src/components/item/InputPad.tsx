import { defineComponent, PropType, ref } from 'vue';
import styles from './InputPad.module.scss';
import SvgIcon from '../SvgIcon/index.vue';
import { DatetimePicker, Popup } from 'vant';
import 'vant/es/datetime-picker/style';
import 'vant/es/popup/style';
import { time } from '../../shared/time';
export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const buttons = [
      { text: '1', onClick: () => {}},
      { text: '2', onClick: () => {}},
      { text: '3', onClick: () => {}},
      { text: '4', onClick: () => {}},
      { text: '5', onClick: () => {}},
      { text: '6', onClick: () => {}},
      { text: '7', onClick: () => {}},
      { text: '8', onClick: () => {}},
      { text: '9', onClick: () => {}},
      { text: '0', onClick: () => {}},
      { text: '.', onClick: () => {}},
      { text: '清空', onClick: () => {}},
      { text: '提交', onClick: () => {}}
    ]
    const refDatePickerVisible = ref(false)
    const now = new Date()
    const refDate = ref(now)
    const setDate = (date: Date) => { refDate.value = date; hideDatePicker() }
    const hideDatePicker = () => refDatePickerVisible.value = false
    const showDatePicker = () => refDatePickerVisible.value = true
    return () => <> <div class={ styles.dateAndNumber }>
        <span class={ styles.date }>
          <SvgIcon name="date"></SvgIcon>
          <span>
             <span onClick={showDatePicker}>{time(refDate.value).format()}</span>
            <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
            <DatetimePicker value={refDate.value} type="date" title="选择日期"
                onConfirm={setDate} onCancel={hideDatePicker}
              />
            </Popup>
          </span>
        </span>
        <span class={ styles.number }>200</span>
      </div>
      <div>
        { buttons.map(button => <button onClick={ button.onClick }>
          { button.text }
        </button>) }
      </div>
    </>
  }
})