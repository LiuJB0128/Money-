import { RouteRecordRaw } from "vue-router";
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemList } from "../components/item/ItemList";
import { First } from "../components/welcome/First";
import { Forth } from "../components/welcome/Forth";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { ItemPage } from "../views/ItemPage";
import { Welcome } from "../views/Welcome";

export const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', redirect: '/welcome'},
  { path: '/welcome',
    component: Welcome, 
    children: [
      { path: '', redirect: '/welcome/1'},
      { path: '1', component: First },
      { path: '2', component: Second },
      { path: '3', component: Third },
      { path: '4', component: Forth }
  ]
  },
  { path: '/items',
    component: ItemPage,
    children: [
      { path: '', component: ItemCreate },
      { path: 'create', component: ItemCreate}
    ]
  }
]