import { defineComponent, PropType, ref } from 'vue';
import styles from './InputPad.module.scss';
import SvgIcon from '../svgIcon/index.vue';
import { DatetimePicker, Popup } from 'vant';
import 'vant/es/datetime-picker/style';
import 'vant/es/popup/style';
import { Time } from '../../shared/time';
export const InputPad = defineComponent({
  props: {
    happenAt: String,
    amount: Number,
    onSubmit: {
      type: Function as PropType<() => void>
    }
  },
  setup: (props, context) => {
    const buttons = [
      { text: '1', onClick: () => { appendText(1) }},
      { text: '2', onClick: () => { appendText(2) }},
      { text: '3', onClick: () => { appendText(3) }},
      { text: '4', onClick: () => { appendText(4) }},
      { text: '5', onClick: () => { appendText(5) }},
      { text: '6', onClick: () => { appendText(6) }},
      { text: '7', onClick: () => { appendText(7) }},
      { text: '8', onClick: () => { appendText(8) }},
      { text: '9', onClick: () => { appendText(9) }},
      { text: '0', onClick: () => { appendText(0) }},
      { text: '.', onClick: () => { appendText('.') }},
      { text: '清空', onClick: () => { refNumber.value = '0'}},
      { text: '提交', onClick: () => {
        context.emit('update:amount', parseFloat(refNumber.value) * 100)
        props.onSubmit?.()
      }}
    ]
    const refDatePickerVisible = ref(false)
    
    const appendText = (n: number | string) => {
      const nString = n.toString()
      const dotIndex = refNumber.value.indexOf('.')
      if (refNumber.value.length >= 13) {
        return
      }
      if (dotIndex >= 0 && refNumber.value.length - dotIndex > 2) {
        return
      }
      if (nString === '.') {
        if (dotIndex >= 0) { // 已经有小数点了
          return
        }
      } else if (nString === '0') {
        if (dotIndex === -1) { // 没有小数点
          if (refNumber.value === '0') { // 没小数点，但是有0
            return
          }
        }
      } else {
        if (refNumber.value === '0') {
          refNumber.value = ''
        }
      }
      refNumber.value += n.toString()
    }
    const setDate = (date: Date) => {
      context.emit('update:happenAt', date.toISOString());
      hideDatePicker()
    }
    const refNumber = ref(props.amount ? (props.amount / 100).toString() : '0')
    const hideDatePicker = () => refDatePickerVisible.value = false
    const showDatePicker = () => refDatePickerVisible.value = true
    return () => <> <div class={ styles.dateAndNumber }>
        <span class={ styles.date }>
          <SvgIcon name="date"></SvgIcon>
          <span>
             <span onClick={showDatePicker}>{new Time(props.happenAt).format()}</span>
            <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
            <DatetimePicker modelValue={props.happenAt ? new Date(props.happenAt) : new Date()} type="date" title="选择日期"
                onConfirm={setDate} onCancel={hideDatePicker}
              />
            </Popup>
          </span>
        </span>
        <span class={ styles.number }>{ refNumber.value }</span>
      </div>
      <div class={styles.buttons}>
        { buttons.map(button => <button onClick={ button.onClick }>
          { button.text }
        </button>) }
      </div>
    </>
  }
})