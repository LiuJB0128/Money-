import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import email from '../../assets/icons/email.svg'
import styles from './First.module.scss'

export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={ styles.wrapper }>
        <div class={ styles.card }>
          <img src={ email }/>
          <h2>记账提醒<br/>让记账成为习惯</h2>
        </div>
        <div class={ styles.actions }>
          <div/>
          <RouterLink to={'/welcome/4'}>下一页</RouterLink>
          <RouterLink to={'/'}>跳过</RouterLink>
        </div>
      </div>
    )
  }
})