import { Button } from 'vant';
import { defineComponent, PropType, reactive } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import SvgIcon from '../svgIcon/index.vue';
import styles from './TagCreate.module.scss'
import 'vant/es/button/style'
import { EmojiSelect } from '../../shared/EmojiSelect';

export const TagCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    })
    const onSubmit = () => {
      console.log(formData)
    }
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <SvgIcon name="left"></SvgIcon>,
        default: () => (
          <form class={ styles.form } onSubmit={ onSubmit }>
            <div class={ styles.formRow }>
              <label class={ styles.formLabel }>
                <span class={ styles.formItem_name }>标签名</span>
                <div class={ styles.formItem_value }>
                <input v-model={ formData.name } class={ [styles.formItem, styles.input, styles.error] }></input>
                </div>
                <div class={ styles.formItem_errorHint }>
                  <span>必填</span>
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
                  <span>必填</span>
                </div>
              </label>
            </div>
            <p class={ styles.tips }>记账时长按标签即可进行编辑</p>
            <div class={ styles.formRow }>
              <div class={ styles.formItem_value }>
                <Button class={ [styles.formItem, styles.button] } onClick={onSubmit}>确定</Button>
              </div>
            </div>
          </form>
        )
      }}</MainLayout>
    )
  }
})