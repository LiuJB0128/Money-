import { defineComponent, PropType, ref } from 'vue';
import { Tabs, Tab } from '../../shared/Tabs';
import styles from './ItemCreate.module.scss';
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
        <Tabs v-model:selected={ refKind.value }>
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