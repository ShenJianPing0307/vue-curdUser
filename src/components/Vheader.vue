<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="0"> <router-link to="/user">用户管理</router-link></el-menu-item>
    <el-menu-item index="1" ><router-link to="/depart">部门管理</router-link></el-menu-item>
  </el-menu>

</template>

<script>
    export default {
        name: "Vheader",
      data:function () {
        return {
          activeIndex2: '0',
        }
      },
      methods:{
          //在当前组件内调用
      },
      computed:{
        //在在当前组件内调用
      }
    }
</script>

<style scoped>
  /*设置scoped，只对当前组件样式起作用*/

</style>
