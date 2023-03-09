import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import SvgIcon from '../svgIcon/index.vue'

export const Second = () => (
  <WelcomeLayout>
    {{
      icon: () => <SvgIcon name="data"></SvgIcon>,
      title: () => <h2>记录收支<br/>随时掌握消费情况</h2>,
      buttons: () => <>
        <div/>
        <RouterLink to={'/welcome/3'}>下一页</RouterLink>
        <RouterLink to={'/'}>跳过</RouterLink>
      </>
    }}
  </WelcomeLayout>
)

Second.displayName = 'Second'