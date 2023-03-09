import { Button } from 'vant';
import { defineComponent, reactive } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import SvgIcon from '../svgIcon/index.vue';
import styles from './Tag.module.scss'
import 'vant/es/button/style'
import { Rules, validate } from '../../shared/validate';
import { TagForm } from './TagForm';

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
        default: () => <>
          <TagForm />
          <div class={styles.actions}>
            <Button type="danger" class={styles.removeTags}>删除标签</Button>
          </div>
        </> 
      }}</MainLayout>
    )
  }
})