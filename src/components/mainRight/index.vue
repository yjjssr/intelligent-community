<template>
<div class="main-right">
<right-header></right-header>
</div>
</template>

<script>
import RightHeader from "./rightHeader"
export default {
components:{
  RightHeader
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