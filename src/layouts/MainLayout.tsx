import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { Navbar } from '../shared/Navbar';
import styles from './MainLayout.module.scss'
import SvgIcon from '../components/svgIcon/index.vue';
export const MainLayout = defineComponent({
  setup: (props, context) => {
    const { slots } = context
    return () => (
      <div class={ styles.wrapper }>
        <Navbar class={ styles.navbar }>
          {{
            default: () => slots.title?.(),
            icon: () => slots.icon?.() 
          }}
        </Navbar>
        { slots.default?.() }
        
      </div>
    )
  }
})