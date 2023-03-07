import { RouterLink } from 'vue-router';
import email from '../../assets/icons/email.svg'
import { WelcomeLayout } from './WelcomeLayout';

export const Third = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={ email }/>,
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