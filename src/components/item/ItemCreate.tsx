import { defineComponent, PropType, ref } from 'vue';
import { Navbar } from '../../shared/Navbar';
import { Tabs, Tab } from '../../shared/Tabs';
import styles from './ItemCreate.module.scss';
import SvgIcon from '../SvgIcon/index.vue'

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refKind = ref('支出')
    return () => (
      <div>
        <Navbar>
          {{
            icon: () => <SvgIcon name="left"></SvgIcon>,
            default: () => '记一笔'
          }}
        </Navbar>
        <Tabs v-model:selected={ refKind.value } class={styles.wrapper}>
          <Tab name="支出">
            icon 列表
          </Tab>
          <Tab name="收入">
            icon 列表 2
          </Tab>
        </Tabs>
      </div>
    )
  }
})