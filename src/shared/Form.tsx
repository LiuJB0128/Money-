import { Button } from 'vant';
import 'vant/es/button/style';
import { computed, defineComponent, PropType, ref } from 'vue';
import { EmojiSelect } from './EmojiSelect';
import styles from './Form.module.scss';
import { getFriendlyError } from './getFriendlyError';
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
      type: String as PropType<'text' | 'emojiSelect' | 'date' | 'validationCode' | 'select'>,
    },
    error: {
      type: String
    },
    placeholder: String,
    options: Array as PropType<Array<{ value: string, text: string }>>,
    onClick: Function as PropType<() => void>,
    countFrom: {
      type: Number,
      default: 60
    },
    disabled: Boolean,
  },
  emits: ['update:modelValue'],
  setup: (props, context) => {
    const refDateVisible = ref(false)
    const timer = ref<number>()
    const count = ref<number>(props.countFrom)
    const isCounting = computed(() => !!timer.value)
    const startCount = () =>
      timer.value = setInterval(() => {
        count.value--
        if(count.value === 0){
          clearInterval(timer.value)
          timer.value = undefined
          count.value = props.countFrom
        }
      },1000)
    context.expose({ startCount })
    
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
            value={props.modelValue}
            onInput={(e: any) => context.emit('update:modelValue', e.target.value)}
              placeholder={props.placeholder} />
            <Button disabled={isCounting.value || props.disabled} onClick={props.onClick} class={[styles.formItem, styles.button, styles.validationCodeButton]}>
              {isCounting.value ? `${count.value}s` : '发送验证码'}
            </Button>
          </>
        case 'select':
          return <select class={[styles.formItem, styles.select]} value={props.modelValue}
            onChange={(e: any) => { context.emit('update:modelValue', e.target.value) }}>
            {props.options?.map(option =>
              <option value={option.value}>{option.text}</option>
            )}
          </select>
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
            <span>{props.error ? getFriendlyError(props.error) : '　'}</span>
          </div>
        </label>
      </div>
    }
  }
})