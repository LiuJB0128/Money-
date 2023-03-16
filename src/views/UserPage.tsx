import { defineComponent, onMounted, PropType, ref } from 'vue';
import { MainLayout } from '../layouts/MainLayout';
import styles from './UserPage.module.scss';
import SvgIcon from '../components/svgIcon/index.vue';
import { Tabbar } from '../shared/Tabbar';
import { Button, Dialog } from 'vant';
import 'vant/es/dialog/style';
import 'vant/es/button/style';
import { http } from '../shared/Http';
import { useRouter } from 'vue-router';
export const UserPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const router = useRouter()
    const me = ref<User>({id: 1, email: '...'})
    onMounted(async () => {
      const response = http.get<Resource<User>>('/me', {}, {
        _autoLoading: true
      })
      me.value =  (await response).data.resource
    })
    const onSignOut = async () => {
      await Dialog.confirm({
        title: '确认',
        message: '你真的要退出登录吗？',
      })
      localStorage.removeItem('jwt')
      router.push('/sign_in')
    }
    return () => <>
      <MainLayout>
        {{
          icon: () => <SvgIcon name='user1'/>,
          title: () => '个人中心',
          default: () => (
            <div class={styles.userWrapper}>
              <div class={styles.userInfo}>
                <div class={styles.userSign}>
                  <SvgIcon name='user' class={styles.icon}/>
                </div>
                <h2 class={styles.userEmail}>{me.value.email}</h2>
              </div>
              <Button onClick={onSignOut} class={styles.logout}>退出登录</Button>
            </div>
          )
        }}
      </MainLayout>
      <Tabbar/>
    </>
  }
})