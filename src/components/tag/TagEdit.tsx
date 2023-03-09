import { Button } from 'vant';
import { defineComponent, reactive } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import SvgIcon from '../svgIcon/index.vue';
import styles from './Tag.module.scss'
import 'vant/es/button/style'
import { EmojiSelect } from '../../shared/EmojiSelect';
import { Rules, validate } from '../../shared/validate';

export const TagEdit = defineComponent({
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
      <MainLayout>{{
        title: () => '编辑标签',
        icon: () => <SvgIcon name="left"></SvgIcon>,
        default: () => (
          <form class={ styles.form }>
            <div class={ styles.formRow }>
              <label class={ styles.formLabel }>
                <span class={ styles.formItem_name }>标签名</span>
                <div class={ styles.formItem_value }>
                <input v-model={ formData.name } class={ [styles.formItem, styles.input, styles.error] }></input>
                </div>
                <div class={ styles.formItem_errorHint }>
                  <span>{errors['name'] ? errors['name'][0] : '　'}</span>
                </div>
              </label>
            </div>
            <div class={ styles.formRow }>
              <label class={ styles.formLabel }>
                <span class={ styles.formItem_name }>符号  { formData.sign }</span>
                <div class={ styles.formItem_value }>
                  <EmojiSelect  v-model={ formData.sign } class={ [styles.formItem, styles.emojiList, styles.error] } />
                </div>
                <div class={ styles.formItem_errorHint }>
                  <span>{ errors['sign'] ? errors['sign'][0] : '　' }</span>
                </div>
              </label>
            </div>
            <p class={ styles.tips }>记账时长按标签即可进行编辑</p>
            <div class={ styles.formRow }>
              <div class={ styles.formItem_value }>
                <Button class={ [styles.formItem, styles.button] } onClick={onSubmit}>保存</Button>
              </div>
            </div>
          </form>
        )
      }}</MainLayout>
    )
  }
})