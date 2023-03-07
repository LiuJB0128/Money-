import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import data from '../../assets/icons/data.svg'
import styles from './First.module.scss'

export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={ styles.wrapper }>
        <div class={ styles.card }>
          <img src={ data }/>
          <h2>记录收支<br/>随时掌握消费情况</h2>
        </div>
        <div class={ styles.actions }>
          <div/>
          <RouterLink to={'/welcome/3'}>下一页</RouterLink>
          <RouterLink to={'/'}>跳过</RouterLink>
        </div>
      </div>
    )
  }
})