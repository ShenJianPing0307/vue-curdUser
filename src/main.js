// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //样式文件单独引入

Vue.use(ElementUI); //全局注册

import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //这里面的状态跟每一个数据属性有关
    UserList: [],

    UserObject: {
      username: '',
      password: ''
    },
    UserId:""

  },
  mutations: {

    //action中提交该mutation
    GETALLUSER(state,data){
      //当页面DOM元素即页面结构加载完成后执行此方法
      state.UserList=data;
    },

    ////action中提交该mutation
    ADDUSER(state,data){
      state.UserList.push(data.user); //将添加成功的数据添加到状态，用于页面更新

    },

    DELUSER(state,data){
      state.UserList=data.userlist;
    },

    EDITUSER(state,data){
      state.UserList=data.userlist;
    }
  },

  //用于执行异步函数操作，并且提交的是mutation
  actions:{

    //context与 store 实例具有相同方法和属性
    getAllUser(context){
      $.ajax({
        url:'http://127.0.0.1:8000/api/userdata/',
        dataType:'JSON',
        methods:'GET',
        success:function (data) {

          //保存返回的数据状态，mutation修改state状态，所以传给mutation处理
          context.commit('GETALLUSER',data)
        }
      })
    },

    addUser(context,payload){
      $.ajax({
        url:'http://127.0.0.1:8000/api/addUser/',
        method:'post',
        dataType:'JSON',
        contentType: 'application/json', //发送的数据类型为json，所以自己发送的数据必须保证为json
        data:JSON.stringify(payload.data), //发送json数据
        success:function (data) {
          if(data.state){
            payload.successfunc();   //执行保存成功提示函数
          }else {
            payload.failturefunc(); //执行保存失败提示函数
          }
          //保存返回的数据状态，mutation修改state状态，所以传给mutation处理
          context.commit('ADDUSER',data);
        }

      });
    },

    delUser(context,payload){
      $.ajax({
        url:'http://127.0.0.1:8000/api/delOneuser/',
        method:'POST',
        dataType:'JSON',
        contentType: 'application/json',
        data:JSON.stringify(payload.data), //发送json数据
        success:function (data) {
          if(data.state){
            payload.successfunc();   //执行删除成功提示函数
            //保存返回的数据状态，mutation修改state状态，所以传给mutation处理
            context.commit('DELUSER',data);
          }else {
            payload.failturefunc(); //执行删除失败提示函数
          }
        }


      })
    },

    editUser(context,payload){
      $.ajax({
        url:'http://127.0.0.1:8000/api/editOneuser/',
        method:'post',
        dataType:'JSON',
        contentType: 'application/json', //发送的数据类型为json，所以自己发送的数据必须保证为json
        data:JSON.stringify(payload.data), //发送json数据
        success:function (data) {
          if(data.state){
            payload.successfunc();   //执行保存成功提示函数
          }else {
            payload.failturefunc(); //执行保存失败提示函数
          }
          //保存返回的数据状态，mutation修改state状态，所以传给mutation处理
          context.commit('EDITUSER',data);
        }

      });
    },

  }


});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //挂载到根实例中
  components: {App},
  template: '<App/>'
});
