import { defineComponent, PropType, ref } from 'vue';
import { Navbar } from '../../shared/Navbar';
import { Tabs, Tab } from '../../shared/Tabs';
import styles from './ItemCreate.module.scss';
import SvgIcon from '../SvgIcon/index.vue'
import { MainLayout } from '../../layouts/MainLayout';

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
        <MainLayout>
          {{
            icon: () => <SvgIcon name="left"></SvgIcon>,
            title: () => '记一笔',
            default: () => <>
              <Tabs v-model:selected={ refKind.value } class={styles.wrapper}>
                <Tab name="支出">
                  icon 列表
                </Tab>
                <Tab name="收入">
                  icon 列表 2
                </Tab>
              </Tabs>
            </>
          }}
        </MainLayout>
      </div>
    )
  }
})