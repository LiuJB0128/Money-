import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import SvgIcon from '../svgIcon/index.vue';

export const First = () => (
  <WelcomeLayout>
    {{
      iconFirst: () => <SvgIcon name="phone"></SvgIcon>,
      titleFirst: () => <h2>快速记账，3秒搞定</h2>,
      iconSecond: () => <SvgIcon name="data"></SvgIcon>,
      titleSecond: () => <h2>记录收支<br/>随时掌握消费情况</h2>,
      iconThird: () => <SvgIcon name="email"></SvgIcon>,
      titleThird: () => <h2>记账提醒<br/>让记账成为习惯</h2>,
      iconForth: () => <SvgIcon name="storage"></SvgIcon>,
      titleForth: () => <h2>云备份<br/>再也不怕数据丢失</h2>,
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