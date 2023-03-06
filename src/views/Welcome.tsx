import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import styles from './Welcome.module.scss'
import logo from '../assets/icons/money.svg'

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={styles.wrapper}>
        <header>
          <img src={ logo }/>
          <h1>Money+ 记账</h1>
        </header>
        <main><RouterView/></main>
      </div>
    )
  }
})