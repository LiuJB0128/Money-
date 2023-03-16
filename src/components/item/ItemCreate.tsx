import { defineComponent, PropType, reactive } from 'vue';
import { Tabs, Tab } from '../../shared/Tabs';
import styles from './ItemCreate.module.scss';
import { MainLayout } from '../../layouts/MainLayout';
import { InputPad } from './InputPad';
import { Tags } from './Tags';
import { Dialog } from 'vant';
import { http } from '../../shared/Http';
import { useRouter } from 'vue-router';
import { AxiosError } from 'axios';
import 'vant/es/dialog/style';
import SvgIcon from '../svgIcon/index.vue';
import { hasError, validate } from '../../shared/validate';

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive<Partial<Item>>({
      kind: 'expenses',
      tag_ids: [],
      amount: 0,
      happen_at: new Date().toISOString(),
    })
    const errors = reactive<FormErrors<typeof formData>>({ kind: [], tag_ids: [], amount: [], happen_at: [] })
    const router = useRouter()
    const onError = (error: AxiosError<ResourceError>) => {
      if (error.response?.status === 422) {
        Dialog.alert({
          title: '出错',
          message: '请选择标签'
        })
      }
      throw error
    }
    const onSubmit = async () => {
      Object.assign(errors, { kind: [], tag_ids: [], amount: [], happen_at: [] })
      Object.assign(errors, validate(formData, [
        { key: 'kind', type: 'required', message: '请选择类型' },
        { key: 'tag_ids', type: 'required', message: '请选择标签' },
        { key: 'amount', type: 'required', message: '请输入金额' },
        { key: 'amount', type: 'notEqual', value: 0, message: '金额必须大于零' },
        { key: 'happen_at', type: 'required', message: '请选择时间' },
      ]))
      if(hasError(errors)){
        Dialog.alert({
          title: '出错',
          message: Object.values(errors).filter(i=>i.length>0).join('\n')
        })
        return
      }
      await http.post<Resource<Item>>('/items', formData,
        { _mock: 'itemCreate', _autoLoading: true }
      ).catch(onError)
      router.push("/items")
    }
    const onClick = () => {
      router.push("/items")
    }
    return () => (
      <div>
        <MainLayout>
          {{
            icon: () => <SvgIcon name='left' onClick={onClick}/>,
            title: () => '记一笔',
            default: () => <>
              <div class={styles.wrapper}>
                <Tabs v-model:selected={formData.kind} class={styles.tabs}>
                  <Tab value="expenses" name="支出">
                    <Tags kind="expenses" v-model:selected={formData.tag_ids![0]}/>
                  </Tab>
                  <Tab value="income" name="收入">
                    <Tags kind="income" v-model:selected={formData.tag_ids![0]}/>
                  </Tab>
                </Tabs>
                <div class={styles.inputPad_wrapper}>
                  <InputPad v-model:happenAt={formData.happen_at}
                  v-model:amount={formData.amount}
                  onSubmit={onSubmit} />
                </div>
              </div>
            </>
          }}
        </MainLayout>
      </div>
    )
  }
})