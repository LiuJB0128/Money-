import { Button } from 'vant';
import { defineComponent, reactive } from 'vue';
import styles from './Tag.module.scss'
import 'vant/es/button/style'
import { Rules, validate } from '../../shared/validate';
import { Form, FormItem } from '../../shared/Form';

export const TagForm = defineComponent({
   setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    })
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
    const onSubmit = (e: Event) => {
      const rules: Rules<typeof formData> = [
        { key: 'name', type: 'required', message: '必填' },
        { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
        { key: 'sign', type: 'required', message: '必填' },
      ]
      Object.assign(errors, {
        name: undefined,
        sign: undefined
      })
      Object.assign(errors, validate(formData, rules))
    }
    return () => (
      <Form>
        <FormItem label='标签名'
          type="text"
          v-model={formData.name}
          error={errors['name']?.[0]} />
        <FormItem label={'符号 ' + formData.sign}
          type="emojiSelect" v-model={formData.sign}
          error={errors['sign']?.[0]} />
        <FormItem>
          <p class={styles.tips}>记账时长按标签即可进行编辑</p>
        </FormItem>
        <FormItem>
          <div class={styles.button_wrapper}>
            <Button class={[styles.button]} onClick={onSubmit}>确定</Button>
          </div>
        </FormItem>
      </Form>
    )
  }
})