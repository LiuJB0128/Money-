import { defineComponent, onMounted, PropType, ref } from 'vue';
import { Tabs, Tab } from '../../shared/Tabs';
import styles from './ItemCreate.module.scss';
import SvgIcon from '../svgIcon/index.vue'
import { MainLayout } from '../../layouts/MainLayout';
import { InputPad } from './InputPad';
import { http } from '../../shared/Http';

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refKind = ref('支出')
    onMounted(async () => {
      const response = await http.get<{ resources: Tag[] }>('/tags', {
        kind: 'expenses',
        _mock: 'tagIndex'
      })
      refExpensesTags.value = response.data.resources
    })
    const refExpensesTags = ref<Tag[]>([])
    onMounted(async () => {
      const response = await http.get<{ resources: Tag[] }>('/tags', {
        kind: 'income',
        _mock: 'tagIndex'
      })
      refIncomeTags.value = response.data.resources
    })
    const refIncomeTags = ref<Tag[]>([])
    return () => (
      <div>
        <MainLayout>
          {{
            icon: () => <SvgIcon name="left"></SvgIcon>,
            title: () => '记一笔',
            default: () => <>
              <div class={styles.wrapper}>
                <Tabs v-model:selected={refKind.value} class={styles.tabs}>
                  <Tab name="支出" class={styles.tags_wrapper}>
                    <div class={styles.tag}>
                      <div class={[styles.sign, styles.sign_add]}>
                        <SvgIcon name="add" class={styles.createTag} />
                      </div>
                      <div class={styles.name}>
                        添加
                      </div>
                    </div>
                    {refExpensesTags.value.map(tag =>
                      <div class={[styles.tag, styles.selected]}>
                        <div class={styles.sign}>
                          {tag.sign}
                        </div>
                        <div class={styles.name}>
                          {tag.name}
                        </div>
                      </div>
                    )}
                  </Tab>
                  <Tab name="收入" class={styles.tags_wrapper}>
                    <div class={styles.tag}>
                      <div class={[styles.sign, styles.sign_add]}>
                        <SvgIcon name="add" class={styles.createTag} />
                      </div>
                      <div class={styles.name}>
                        添加
                      </div>
                    </div>
                    {refIncomeTags.value.map(tag =>
                      <div class={[styles.tag, styles.selected]}>
                        <div class={styles.sign}>
                          {tag.sign}
                        </div>
                        <div class={styles.name}>
                          {tag.name}
                        </div>
                      </div>
                    )}
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