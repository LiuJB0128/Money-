import { Button, Dialog } from 'vant';
import { defineComponent } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import styles from './Tag.module.scss'
import 'vant/es/button/style'
import { TagForm } from './TagForm';
import { BackIcon } from '../../shared/BackIcon';
import { useRoute, useRouter } from 'vue-router';
import { http } from '../../shared/Http';
import 'vant/es/dialog/style';

export const TagEdit = defineComponent({
  setup: (props, context) => {
    const route = useRoute()
    const numberId = parseInt(route.params.id!.toString())
    if(Number.isNaN(numberId)){
      return ()=> <div>id 不存在</div>
    }
    const router = useRouter()
    const onError = ()=>{
      Dialog.alert({ title:'提示',message:'删除失败' })
    }
    const onDelete = async (options?: {withItems?: boolean})=>{
      await Dialog.confirm({
        title:'确认',
        message:'删除标签对应的账单记录也会删除，确认删除吗？'
      })
      await http.delete(`/tags/${numberId}`).catch(onError)
      router.back()
    }
    return () => (
      <MainLayout>{{
        title: () => '编辑标签',
        icon: () => <BackIcon/>,
        default: () => <>
          <TagForm id={numberId}/>
          <div class={styles.actions}>
            <Button type="danger" class={styles.removeTags} onClick={()=>onDelete()}>删除标签</Button>
          </div>
        </> 
      }}</MainLayout>
    )
  }
})