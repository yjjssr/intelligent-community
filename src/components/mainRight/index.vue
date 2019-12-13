<template>
<el-main>
  <right-header></right-header>
  <right-body></right-body>

</el-main>

</template>

<script>
import RightHeader from "./rightHeader"
import RightBody from './rightBody'
export default {
components:{
  RightHeader,
  RightBody
}
}
</script>

<style scoped>
.el-main{
  float: right;
  width: 40.4%;
  background-image: url('../../assets/main_right_bg.png');
  /* background-size:100% 100%; */
  background-size: cover;
  height: 100%;
  padding-top: 0;
}
</style>

