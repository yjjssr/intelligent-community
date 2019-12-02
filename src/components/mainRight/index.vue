<template>
<div class="main-right">
<right-header></right-header>
<right-body></right-body>
</div>
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

<style>
.main-right{
  float: right;
  width: 40.4%;
  background-image: url('../../assets/main_right_bg.png');
  background-size:100% 100%;
  height: 600px;
}
</style>