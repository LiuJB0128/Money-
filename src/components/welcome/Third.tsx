import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import SvgIcon from '../SvgIcon/index.vue'

export const Third = () => (
  <WelcomeLayout>
    {{
      icon: () => <SvgIcon name="email"></SvgIcon>,
      title: () => <h2>记账提醒<br/>让记账成为习惯</h2>,
      buttons: () => <>
        <div/>
        <RouterLink to={'/welcome/4'}>下一页</RouterLink>
        <RouterLink to={'/'}>跳过</RouterLink>
      </>
    }}
  </WelcomeLayout>
)

Third.displayName = 'Third'