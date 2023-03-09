import { computed, defineComponent, PropType, VNode } from 'vue';
import { EmojiSelect } from './EmojiSelect';
import styles from './Form.module.scss';
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
      type: String as PropType<'text' | 'emojiSelect' | 'date'>,
    },
    error: {
      type: String
    }
  },
  setup: (props, context) => {
    const content = computed(() => {
      switch (props.type) {
        case 'text':
          return <input
            value={props.modelValue}
            onInput={(e: any) => context.emit('update:modelValue', e.target.value)}
            class={[styles.formItem, styles.input, styles.error]} />
        case 'emojiSelect':
          return <EmojiSelect
            modelValue={props.modelValue?.toString()}
            onUpdateModelValue={value => context.emit('update:modelValue', value)}
            class={[styles.formItem, styles.emojiList, styles.error]} />
        case 'date':
          return <input />
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
          {props.error &&
            <div class={styles.formItem_errorHint}>
              <span>{props.error}</span>
            </div>
          }
        </label>
      </div>
    }
  }
})