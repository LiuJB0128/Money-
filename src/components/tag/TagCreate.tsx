import { Button } from 'vant';
import { defineComponent, PropType } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import SvgIcon from '../svgIcon/index.vue';
import styles from './TagCreate.module.scss'
import 'vant/es/button/style'

export const TagCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <SvgIcon name="left"></SvgIcon>,
        default: () => (
          <form class={styles.form}>
            <div class={styles.formRow}>
              <label class={styles.formLabel}>
                <span class={styles.formItem_name}>标签名</span>
                <div class={styles.formItem_value}>
                  <input class={[styles.formItem, styles.input, styles.error]}></input>
                </div>
                <div class={styles.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>
            <div class={styles.formRow}>
              <label class={styles.formLabel}>
                <span class={styles.formItem_name}>符号</span>
                <div class={styles.formItem_value}>
                  <div class={[styles.formItem, styles.emojiList, styles.error]}>
                    <nav>
                      <span class={styles.selected}>表情</span>
                      <span>手势</span>
                      <span>职业</span>
                      <span>衣服</span>
                      <span>动物</span>
                      <span>自然</span>
                      <span>食物</span>
                      <span>运动</span>
                      <span>表情</span>
                      <span>手势</span>
                      <span>职业</span>
                      <span>衣服</span>
                      <span>动物</span>
                      <span>自然</span>
                      <span>食物</span>
                      <span>运动</span>
                    </nav>
                    <ol>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                    </ol>
                  </div>
                </div>
                <div class={styles.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>
            <p class={styles.tips}>记账时长按标签即可进行编辑</p>
            <div class={styles.formRow}>
              <div class={styles.formItem_value}>
                <Button class={[styles.formItem, styles.button]}>确定</Button>
              </div>
            </div>
          </form>
        )
      }}</MainLayout>
    )
  }
})