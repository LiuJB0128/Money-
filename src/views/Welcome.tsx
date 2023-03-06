import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import styles from './Welcome.module.scss'
import logo from '../assets/icons/jizhang.svg'

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={styles.wrapper}>
        <header>
          <img src={ logo }/>
          <h1>钱迹</h1>
        </header>
        <main><RouterView/></main>
        <footer></footer>
      </div>
    )
  }
})