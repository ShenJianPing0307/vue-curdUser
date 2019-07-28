<template>
  <div id="delModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>


        </div>
        <div class="modal-body">
          <h4 class="modal-title">是否确认删除该条用户信息？</h4>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-danger" @click="handleClickParent">删除</button>
          <div class="hidden">
          <el-button :plain="true" @click="open2"></el-button>  <!--删除成功提示-->
          <el-button :plain="true" @click="open4"></el-button> <!--删除失败提示-->
          </div>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</template>

<script>
    export default {
        name: "Vmodal",
      data:function () {
        return {}
      },
      props:{
        VmodalUserMethod:Function
      },
      methods:{

        //删除成功提示函数
        open2(){
          this.$message({
            message: '恭喜你，删除用户成功！',
            type: 'success'
          });
        },

        //删除失败提示函数
        open4() {
          this.$message.error('对不起，删除用户失败！');
        },

        handleClickParent(){
          this.getVmodalUserMethod(this.open2,this.open4)
        }

      },

      computed:{
          getVmodalUserMethod(){
            return this.VmodalUserMethod
          }
      }

    }

</script>

<style scoped>

</style>
