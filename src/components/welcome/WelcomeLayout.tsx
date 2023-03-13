import { FunctionalComponent } from 'vue';
import styles from './WelcomeLayout.module.scss'
import { Swipe, SwipeItem } from 'vant';
import 'vant/es/swipe/style';
import 'vant/es/swipe-item/style';

export const WelcomeLayout: FunctionalComponent = (props, context) => {
  const { slots: { iconFirst, titleFirst, iconSecond, titleSecond, iconThird, titleThird, iconForth, titleForth,buttons } } = context  
  return (
     <div class={ styles.wrapper }>
      <Swipe autoplay="3000" class={styles.my_swipt}>
        <SwipeItem class={ styles.card }>
          {iconFirst?.()}
          {titleFirst?.()}
        </SwipeItem>
        <SwipeItem class={ styles.card }>
          {iconSecond?.()}
          {titleSecond?.()}
        </SwipeItem>
        <SwipeItem class={ styles.card }>
          {iconThird?.()}
          {titleThird?.()}
        </SwipeItem>
        <SwipeItem class={ styles.card }>
          {iconForth?.()}
          {titleForth?.()}
        </SwipeItem>
      </Swipe>
      
      <div class={ styles.actions }>
        {buttons?.()}
      </div>
    </div>
  )
}

WelcomeLayout.displayName = 'WelcomeLayout'

//<div class={ styles.card }>
//  {icon?.()}
//  {title?.()}
// </div>