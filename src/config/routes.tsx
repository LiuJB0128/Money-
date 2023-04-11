import { RouteRecordRaw } from "vue-router";
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemList } from "../components/item/ItemList";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { WelcomeMain } from "../components/welcome/WelcomeMain";
import { http } from "../shared/Http";

export const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', component: ()=> import('../views/Welcome'), 
    beforeEnter: (to, from, next) => {
      localStorage.getItem('skipWelcomePage') === 'yes' ? next('/items') : next()
    },
    children: [
      { path: '', component: WelcomeMain }
    ]
  },
  { path: '/items',
    component: ()=> import('../views/ItemPage'),
    beforeEnter: async (to, from, next) => {
      await http.get('/me').catch(() => {
        next('/sign_in?return_to=' + to.path)
      })
      next()
    },
    children: [
      { path: '', component: ItemList },
      { path: 'create', component: ItemCreate }
    ]
  },
  { path: '/tags', component: ()=> import('../views/TagPage'),
    beforeEnter: async (to, from, next) => {
      await http.get('/me').catch(() => {
        next('/sign_in?return_to=' + to.path)
      })
      next()
    },
    children: [
      { path: 'create', component: TagCreate },
      { path: ':id/edit', component: TagEdit }
    ]
  },
  { path: '/sign_in', component: ()=> import('../views/SignInPage') },
  { path: '/statistics', component: ()=> import('../views/StatisticsPage'),
    beforeEnter: async (to, from, next) => {
      await http.get('/me').catch(() => {
        next('/sign_in?return_to=' + to.path)
      })
      next()
    },
  },
  { path: '/user', component: ()=> import('../views/UserPage'),
    beforeEnter: async (to, from, next) => {
      await http.get('/me').catch(() => {
        next('/sign_in?return_to=' + to.path)
      })
      next()
    },
  }
]