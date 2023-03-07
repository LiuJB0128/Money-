import { FunctionalComponent } from 'vue';
import styles from './WelcomeLayout.module.scss'

export const WelcomeLayout: FunctionalComponent = (props, context) => {
  const { slots: { icon, title, buttons } } = context  
  return (
     <div class={ styles.wrapper }>
      <div class={ styles.card }>
        {icon?.()}
        {title?.()}
      </div>
      <div class={ styles.actions }>
        {buttons?.()}
      </div>
    </div>
  )
}

WelcomeLayout.displayName = 'WelcomeLayout'