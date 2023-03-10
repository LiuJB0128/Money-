import { defineComponent, PropType, reactive } from 'vue';
import { MainLayout } from '../layouts/MainLayout';
import { Form, FormItem } from '../shared/Form';
import SvgIcon from '../components/svgIcon/index.vue';
import { validate } from '../shared/validate';
import styles from './SignInPage.module.scss';
import { Button } from 'vant';
export const SignInPage = defineComponent({
  setup: (props, context) => {
    const formData = reactive({
      email: '',
      code: ''
    })
    const errors = reactive({
      email: [],
      code: []
    })
    const onSubmit = (e: Event) => {
      e.preventDefault()
      Object.assign(errors, {
        email: [], code: []
      })
      Object.assign(errors, validate(formData, [
        { key: 'email', type: 'required', message: '必填' },
        { key: 'email', type: 'pattern', regex: /.+@.+/, message: '请输入正确的邮箱地址' },
        { key: 'code', type: 'required', message: '必填' },
      ]))
    }
    return () => (
      <MainLayout>{
        {
          title: () => '登录',
          icon: () => <SvgIcon name="logo_in" />,
          default: () => (
            <div class={styles.wrapper}>
              <div class={styles.logo}>
                <SvgIcon class={styles.icon} name="money" />
                <h1 class={styles.appName}>Money+ 记账</h1>
              </div>
              <Form>
                <FormItem label="邮箱地址" type="text"
                  placeholder='请输入邮箱，然后点击发送验证码'
                  v-model={formData.email} error={errors.email?.[0]} />
                <FormItem label="验证码" type="validationCode"
                  placeholder='请输入验证码'
                  v-model={formData.code} error={errors.code?.[0]} />
                <FormItem style={{ paddingTop: '24px' }}>
                  <Button style={{ fontSize: '18px', width: '100%', borderRadius: 'var(--button-radius)', background: 'var(--buttonPro-bg)', color: 'var(--buttonPro-color)', lineHigh: '23px' }} onClick={onSubmit}>登录</Button>
                </FormItem>
              </Form>
            </div>
          )
        }
      }</MainLayout>
    )
  }
})