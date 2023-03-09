import { defineComponent, PropType, ref } from 'vue';
import { Tabs, Tab } from '../../shared/Tabs';
import styles from './ItemCreate.module.scss';
import SvgIcon from '../svgIcon/index.vue'
import { MainLayout } from '../../layouts/MainLayout';
import { InputPad } from './InputPad';

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refKind = ref('支出')
    const refExpensesTags = ref([
      { id: 1, name: '餐费', sign: '￥', category: 'expenses' },
      { id: 2, name: '打车', sign: '￥', category: 'expenses' },
      { id: 3, name: '聚餐', sign: '￥', category: 'expenses' },
      { id: 4, name: '打车', sign: '￥', category: 'expenses' },
      { id: 5, name: '聚餐', sign: '￥', category: 'expenses' },
      { id: 6, name: '打车', sign: '￥', category: 'expenses' },
      { id: 7, name: '聚餐', sign: '￥', category: 'expenses' },
    ])
    const refIncomeTags = ref([
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 19, name: '滴滴', sign: '￥', category: 'income' },
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 19, name: '滴滴', sign: '￥', category: 'income' },
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 19, name: '滴滴', sign: '￥', category: 'income' },
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 19, name: '滴滴', sign: '￥', category: 'income' },
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 19, name: '滴滴', sign: '￥', category: 'income' },
    ])
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
                      <div class={styles.sign}>
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
                      <div class={styles.sign}>
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