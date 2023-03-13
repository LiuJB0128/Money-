import { defineComponent, Transition, VNode } from 'vue';
import { RouterView } from 'vue-router';
import styles from './Welcome.module.scss'
import SvgIcon from '../components/svgIcon/index.vue'

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={styles.wrapper}>
        <header>
          <SvgIcon name="money"></SvgIcon>
          <h1>Money+ 记账</h1>
        </header>
        <main>
          <RouterView/>
        </main>
      </div>
    )
  }
})