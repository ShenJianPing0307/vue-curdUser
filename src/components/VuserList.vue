<template>

  <div class="panel panel-default">
    <div class="panel-body">

        <!--<button type="button" class="btn btn-info" @click="addOneUser">添加</button>-->
        <Vbutton typeBtn="success" :btnUserMethod="addOneUser" >添加用户</Vbutton>

        <table class="table table-hover">
          <thead>
          <tr class="info">
            <td>用户名</td>
            <td>密码</td>
            <td>操作</td>
          </tr>
          </thead>
          <tbody>
          <VuserItem v-for="(item,index) in getAllUserList" v-bind:userinfo="item" v-bind:userid="item.id"></VuserItem>
          </tbody>
        </table>

      <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">创建用户</h4>
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
              <button type="button" class="btn btn-primary" @click="isSave">保存</button>
              <div class="hidden">
              <el-button :plain="true" @click="open2"></el-button>  <!--保存成功提示-->
              <el-button :plain="true" @click="open4"></el-button> <!--保存失败提示-->
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
  import VuserItem from '@/components/VuserItem'
  import Vbutton from '@/components/Vbutton'


  export default {
    name: "VuserList",
    data: function () {
      return {

      }
    },
    components: {
      Vbutton,
      VuserItem,
    },
    methods: {
      addOneUser() {
        //修复修改数据后input有默认值的bug
        this.$store.state.UserObject.username="";
        this.$store.state.UserObject.password="";

        $('#addModal').modal('show')
      },

      //保存成功提示函数
      open2(){
        this.$message({
          message: '恭喜你，创建用户成功！',
          type: 'success'
        });
      },

      //保存失败提示函数
      open4() {
        this.$message.error('对不起，创建用户失败！');
      },


      //发送数据
      isSave(){

        var data={
          //通过计算属性获取数据，实际也是从store实例的状态中拿到数据
          username:this.getUsername,
          password:this.getPassword,
          // csrfmiddlewaretoken: '{{ csrf_token }}'
        };

        //在这个地方触发对应mutation方法，也就是gaddUser，通过ajax提交所有的数据
        // this.$store.commit(
        //   {
        //     type: 'addUser',
        //     data:data,
        //     getUsername:this.getUsername,
        //     getPassword:this.getPassword,
        //     successfunc: this.open2,
        //     failturefunc:this.open4,
        //   }
        // );

        this.$store.dispatch(
          {
            type: 'addUser',
            data:data,
            getUsername:this.getUsername,
            getPassword:this.getPassword,
            successfunc: this.open2,
            failturefunc:this.open4,
          }
        );

        $('#addModal').modal('hide');//发送成功后模态对话框消失
        this.getUsername=''; //添加成功后将input框置空
        this.getPassword=''
      }


    },
    computed: {

      getAllUserList() {
        return this.$store.state.UserList
      },

      getUsername: {
        set(newValue) {
          this.$store.state.UserObject.username = newValue
        },
        get() {
          return this.$store.state.UserObject.username
        }
      },

      getPassword:{
        set(newValue) {
          this.$store.state.UserObject.password = newValue
        },
        get() {
          return this.$store.state.UserObject.password
        }
      }


    }
  }
</script>

<style scoped>
  table tr td{
    text-align:center;//水平居中
  line-height: 25px;//行高
  vertical-align:middle；//垂直居中
  }
</style>
