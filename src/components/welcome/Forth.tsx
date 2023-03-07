import { RouterLink } from 'vue-router';
import storage from '../../assets/icons/storage.svg'
import { WelcomeLayout } from './WelcomeLayout';

export const Forth = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={ storage }/>,
      title: () => <h2>云备份<br/>再也不怕数据丢失</h2>,
      buttons: () => <>
        <div/>
        <RouterLink to={'/'}>开始记账</RouterLink>
        <div/>
      </>
    }}
  </WelcomeLayout>
)

Forth.displayName = 'Forth'