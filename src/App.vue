<template>
  <div id="app">
    <Vheader></Vheader>
    <router-view/>
  </div>
</template>

<script>

  import $ from 'jquery'
  import Vheader from '@/components/Vheader'

export default {
  name: 'App',
  data:function(){
    return {}
  },
  components:{
    Vheader,
  },
  create(){
  },

  //mounted方法页面加载完成后触发该方法
  mounted(){

    //在这个地方触发对应mutation方法，也就是getAllUser，通过ajax获取所有的数据
    // this.$store.commit('getAllUser');

    this.$store.dispatch('getAllUser')


  }

}
</script>

<style scoped>


</style>
