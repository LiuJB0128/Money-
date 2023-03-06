import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import phone from '../../assets/icons/phone.svg'
import styles from './First.module.scss'

export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={ styles.wrapper }>
        <div class={ styles.card }>
          <img src={ phone }/>
          <h2>快速记账，3秒搞定</h2>
        </div>
        <div class={ styles.actions }>
          <div/>
          <RouterLink to={'/welcome/2'}>下一页</RouterLink>
          <RouterLink to={'/'}>跳过</RouterLink>
        </div>
      </div>
    )
  }
})