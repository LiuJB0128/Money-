import { defineComponent, Transition, VNode } from 'vue';
import { RouterView } from 'vue-router';
import styles from './Welcome.module.scss'
import SvgIcon from '../components/SvgIcon/index.vue'

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={styles.wrapper}>
        <header>
          <SvgIcon name="money"></SvgIcon>
          <h1>Money+ 记账</h1>
        </header>
        <main>
          <RouterView>
            {({ Component: Content }: { Component: VNode }) =>
              <Transition
                enterActiveClass={styles.slide_enter_active}
                enterFromClass={styles.slide_enter_from}
                enterToClass={styles.slide_enter_to}
                leaveActiveClass={styles.slide_leave_active}
                leaveToClass={styles.slide_leave_to}
                leaveFromClass={styles.slide_leave_from}
              >{ Content }</Transition>}
          </RouterView>
        </main>
      </div>
    )
  }
})