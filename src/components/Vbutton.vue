<template>

  <button class="btn" :class="currentBtn" @click="handleClickParent">

    <slot>按钮</slot>

  </button>

</template>

<script>
    export default {
        name: "Vbutton",
      data:function () {
        return {}
      },
      props:{
        typeBtn:String,
        btnUserMethod:Function
      },
      computed:{
        currentBtn(){
          return {

            'btn-success':this.typeBtn === 'success',
            'btn-warning':this.typeBtn === 'warning',
            'btn-danger':this.typeBtn === 'danger',

          }
        },
        currentMethod(){
          return this.btnUserMethod
        }
      },
      methods:{
        handleClickParent(){
          this.currentMethod();
        }
      },
    }
</script>

<style scoped>

</style>
