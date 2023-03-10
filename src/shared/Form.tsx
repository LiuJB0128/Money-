import { Button, DatetimePicker, Popup } from 'vant';
import 'vant/es/datetime-picker/style';
import 'vant/es/popup/style';
import { computed, defineComponent, PropType, ref } from 'vue';
import { EmojiSelect } from './EmojiSelect';
import styles from './Form.module.scss';
import { Time } from './time';
export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    }
  },
  setup: (props, context) => {
    return () => (
      <form class={styles.form} onSubmit={props.onSubmit}>
        {context.slots.default?.()}
      </form>
    )
  }
})

export const FormItem = defineComponent({
  props: {
    label: {
      type: String
    },
    modelValue: {
      type: [String, Number]
    },
    type: {
      type: String as PropType<'text' | 'emojiSelect' | 'date' | 'validationCode'>,
    },
    error: {
      type: String
    },
    placeholder: String,
  },
  emits: ['update:modelValue'],
  setup: (props, context) => {
    const refDateVisible = ref(false)
    const content = computed(() => {
      switch (props.type) {
        case 'text':
          return <input
            value={props.modelValue}
            placeholder={props.placeholder}
            onInput={(e: any) => context.emit('update:modelValue', e.target.value)}
            class={[styles.formItem, styles.input]} />
        case 'emojiSelect':
          return <EmojiSelect
            modelValue={props.modelValue?.toString()}
            onUpdateModelValue={value => context.emit('update:modelValue', value)}
            class={[styles.formItem, styles.emojiList, styles.error]} />
        case 'validationCode':
          return <>
            <input class={[styles.formItem, styles.input, styles.validationCodeInput]}
              placeholder={props.placeholder} />
            <Button class={[styles.formItem, styles.button, styles.validationCodeButton]}>
              发送验证码
            </Button>
          </>
        case 'date':
          return <>
            <input readonly={true} value={props.modelValue}
              placeholder={props.placeholder}
              onClick={() => { refDateVisible.value = true }}
              class={[styles.formItem, styles.input]} />
            <Popup position='bottom' v-model:show={refDateVisible.value} teleport="body">
              <DatetimePicker value={props.modelValue} type="date" title="选择日期"
                onConfirm={(date: Date) => {
                context.emit('update:modelValue', new Time(date).format())
                refDateVisible.value = false
                }}
                onCancel={() => refDateVisible.value = false} />
            </Popup>
          </>
        case undefined:
          return context.slots.default?.()
      }
    })
    return () => {
      return <div class={styles.formRow}>
        <label class={styles.formLabel}>
          {props.label &&
            <span class={styles.formItem_name}>{props.label}</span>
          }
          <div class={styles.formItem_value}>
            {content.value}
          </div>
          <div class={styles.formItem_errorHint}>
            <span>{props.error ?? '　'}</span>
          </div>
        </label>
      </div>
    }
  }
})