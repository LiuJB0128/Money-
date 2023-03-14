import { defineComponent, onMounted, PropType, ref } from 'vue';
import { Tabs, Tab } from '../../shared/Tabs';
import styles from './ItemCreate.module.scss';
import SvgIcon from '../svgIcon/index.vue'
import { MainLayout } from '../../layouts/MainLayout';
import { InputPad } from './InputPad';
import { http } from '../../shared/Http';
import { Tags } from './Tags';

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
              <div class={styles.wrapper}>
                <Tabs v-model:selected={refKind.value} class={styles.tabs}>
                  <Tab name="支出">
                    <Tags kind="expenses"/>
                  </Tab>
                  <Tab name="收入">
                    <Tags kind="income"/>
                  </Tab>
                </Tabs>
                <div class={styles.inputPad_wrapper}>
                  <InputPad />
                </div>
              </div>
            </>
          }}
        </MainLayout>
      </div>
    )
  }
})