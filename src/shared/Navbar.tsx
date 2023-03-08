import { defineComponent, PropType } from 'vue';
import styles from './Navbar.module.scss'

export const Navbar = defineComponent({
  setup: (props, context) => {
    const { slots } = context
    return () => (
      <div class={ styles.navbar }>
        <span class={ styles.icon_wrapper }>
          { slots.icon?.() }
        </span>
        <span class={ styles.title_wrapper }>
          { slots.default?.() }
        </span>
      </div>
    )
  }
})