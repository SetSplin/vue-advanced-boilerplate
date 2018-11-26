import Vue from 'vue'
import VueRouter from 'vue-router'
import VuexRouterSync from 'vuex-router-sync';
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "catalog" */ "@/pages/catalog"),
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

VuexRouterSync.sync(store, router);

export default router
