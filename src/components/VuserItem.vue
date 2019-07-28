<template>

  <tr>
    <td>{{userinfo.username}}</td>
    <td>{{userinfo.password}}</td>
    <td>
      <Vbutton typeBtn="danger" @click="delUse" :btnUserMethod="delUse">删除</Vbutton>
      |
      <Vbutton typeBtn="warning" @click="editUser" :btnUserMethod="editUser">修改</Vbutton>

      <Vmodal :VmodalUserMethod="isdelUser"></Vmodal>


      <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">修改用户</h4>
            </div>
            <div class="modal-body">
              <form id="fm" class="form-horizontal">
                <div class="form-group">
                  <label for="username" class="col-sm-2 control-label">姓名</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="username" placeholder="姓名" v-model="getUsername">
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="col-sm-2 control-label">密码</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="password" placeholder="密码" v-model="getPassword">
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <span id="errorMsg" style="color: red;"></span>
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" @click="isEditSave">保存</button>
              <div class="hidden">
                <el-button :plain="true" @click="open2"></el-button>  <!--保存成功提示-->
                <el-button :plain="true" @click="open4"></el-button> <!--保存失败提示-->
              </div>
            </div>
          </div>
        </div>
      </div>

    </td>
  </tr>

</template>

<script>
  import Vbutton from '@/components/Vbutton'
  import Vmodal from '@/components/Vmodal'



  export default {
    name: "VuserItem",
    components: {
      Vmodal,
      Vbutton
    },
    data: function () {
      return {

      }
    },

    props: {
      userinfo: {
        type: Object,
        require: true
      },
      userid: {
        type: Number,
        require: true
      },
    },

    computed: {

      getUserId(){

        return this.$store.state.UserId
      },
      getUsername: {
        set(newValue) {
          this.$store.state.UserObject.username = newValue
        },
        get() {
          return this.$store.state.UserObject.username
        }
      },

      getPassword: {
        set(newValue) {
          this.$store.state.UserObject.password = newValue
        },
        get() {
          return this.$store.state.UserObject.password
        }
      }

    },
    methods: {
      delUse() {
        $('#delModal').modal('show');
      },

      editUser() {
        this.$store.state.UserId = this.userinfo.id;
        this.$store.state.UserObject.username = this.userinfo.username;
        this.$store.state.UserObject.password = this.userinfo.password;
        //模态对话框隐藏
        $('#editModal').modal('show');
      },


      isdelUser(open2, open4) {
        console.log(this.userid);

        this.$store.dispatch({
          type: 'delUser',
          data: {id: this.userid},
          successfunc: open2,
          failturefunc: open4,

        });

        $('#delModal').modal('hide');

      },

      //修改成功提示函数
      open2(){
        this.$message({
          message: '恭喜你，修改用户成功！',
          type: 'success'
        });
      },

      //修改失败提示函数
      open4() {
        this.$message.error('对不起，修改用户失败！');
      },


      isEditSave() {
        console.log(this.getUserId);
        this.$store.dispatch(
          {
            type: 'editUser',
            data: {
              id: this.getUserId,
              username: this.getUsername,
              password: this.getPassword
            },
            successfunc: this.open2,
            failturefunc: this.open4,
          }
        );

        $('#editModal').modal('hide');//发送成功后模态对话框消失

      }

    }

  }
</script>

<style scoped>
  tr td {
    text-align: center;
  / / 水平居中 line-height: 25 px;
  / / 行高 vertical-align: middle； / / 垂直居中
  }
</style>
