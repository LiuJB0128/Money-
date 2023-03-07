import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import SvgIcon from '../SvgIcon/index.vue'

export const Forth = () => (
  <WelcomeLayout>
    {{
      icon: () => <SvgIcon name="storage"></SvgIcon>,
      title: () => <h2>云备份<br/>再也不怕数据丢失</h2>,
      buttons: () => <>
        <div/>
        <RouterLink to={'/items'}>开始记账</RouterLink>
        <div/>
      </>
    }}
  </WelcomeLayout>
)

Forth.displayName = 'Forth'