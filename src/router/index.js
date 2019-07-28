import Vue from 'vue'
import Router from 'vue-router'

//导入路由组件
import VuserManagement from '@/components/VuserManagement'
import VdepartManagement from '@/components/VdepartManagement'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/user',
      name: 'VuserManagement',
      component: VuserManagement
    },    {
      path: '/depart',
      name: 'VdepartManagement',
      component: VdepartManagement
    },
  ]
})
