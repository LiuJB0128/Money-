import { RouterLink } from 'vue-router';
import phone from '../../assets/icons/phone.svg'
import { WelcomeLayout } from './WelcomeLayout';

export const First = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={ phone }/>,
      title: () => <h2>快速记账，3秒搞定</h2>,
      buttons: () => <>
        <div/>
        <RouterLink to={'/welcome/2'}>下一页</RouterLink>
        <RouterLink to={'/'}>跳过</RouterLink>
      </>
    }}
  </WelcomeLayout>
)

First.displayName = 'First'

//export const First = () => {
//  const slots = {
//    icon: () => <img src={ phone }/>,
//    title: () => <h2>快速记账，3秒搞定</h2>,
//    buttons: () => <>
//      <div/>
//      <RouterLink to={'/welcome/2'}>下一页</RouterLink>
//      <RouterLink to={'/'}>跳过</RouterLink>
//    </>
//  }
//  return <WelcomeLayout v-slots={slots}></WelcomeLayout>
//}