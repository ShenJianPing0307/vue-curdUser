<template>

  <div class="row">
    <div class="col-md-8"><VuserList></VuserList></div>
    <div class="col-md-4"> <el-calendar v-model="value">
    </el-calendar></div>
  </div>

  <!--<el-row :gutter="20">-->
    <!--<el-col :span="15"><div class="grid-content bg-purple">-->

      <!--<VuserList></VuserList>-->

    <!--</div></el-col>-->

    <!--<el-col :span="9"><div class="grid-content bg-purple">-->
      <!--<el-calendar v-model="value">-->
      <!--</el-calendar>-->
    <!--</div></el-col>-->

  <!--</el-row>-->
</template>

<script>
  import VuserList from '@/components/VuserList'

    export default {
        name: "VuserManagement",
      data:function () {
        return {
          value: new Date(),



        }
      },
      components:{
        VuserList,
      }
    }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
