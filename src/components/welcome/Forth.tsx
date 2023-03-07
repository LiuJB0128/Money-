import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import storage from '../../assets/icons/storage.svg'
import styles from './First.module.scss'

export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={ styles.wrapper }>
        <div class={ styles.card }>
          <img src={ storage }/>
          <h2>云备份<br/>再也不怕数据丢失</h2>
        </div>
        <div class={ styles.actions }>
          <div/>
          <RouterLink to={'/'}>开始记账</RouterLink>
          <div/>
        </div>
      </div>
    )
  }
})