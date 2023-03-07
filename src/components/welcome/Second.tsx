import { RouterLink } from 'vue-router';
import data from '../../assets/icons/data.svg'
import { WelcomeLayout } from './WelcomeLayout';

export const Second = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={ data }/>,
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