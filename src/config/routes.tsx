import { RouteRecordRaw } from "vue-router";
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemList } from "../components/item/ItemList";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { WelcomeMain } from "../components/welcome/WelcomeMain";
import { http } from "../shared/Http";
import { ItemPage } from "../views/ItemPage";
import { SignInPage } from "../views/SignInPage";
import { StatisticsPage } from "../views/StatisticsPage";
import { TagPage } from "../views/TagPage";
import { UserPage } from "../views/UserPage";
import { Welcome } from "../views/Welcome";

export const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', component: Welcome, 
    beforeEnter: (to, from, next) => {
      localStorage.getItem('skipWelcomePage') === 'yes' ? next('/items') : next()
    },
    children: [
      { path: '', component: WelcomeMain }
    ]
  },
  { path: '/items',
    component: ItemPage,
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
  { path: '/tags', component: TagPage,
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
  { path: '/sign_in', component: SignInPage },
  { path: '/statistics', component: StatisticsPage,
    beforeEnter: async (to, from, next) => {
      await http.get('/me').catch(() => {
        next('/sign_in?return_to=' + to.path)
      })
      next()
    },
  },
  { path: '/user', component: UserPage,
    beforeEnter: async (to, from, next) => {
      await http.get('/me').catch(() => {
        next('/sign_in?return_to=' + to.path)
      })
      next()
    },
  }
]