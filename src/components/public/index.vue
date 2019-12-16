<template>
  <el-container>
    <el-header><slot name="header"></slot></el-header>
     <el-main>
       <div class="main-border border-1"></div>
      <div class="main-border border-2"></div>
      <div class="main-border border-3"></div>
      <div class="main-border border-4"></div>
      <slot name="body"></slot>
     </el-main>
  </el-container>

</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
$basic-border: 1px solid #fff;
.el-header {
  background-image: url("../../assets/specific_header_bg.png");
  background-size: cover;
  line-height: 30px;
  color: #39f;
  height: auto !important;
  margin-top: 20px;
  text-align: left;
}
.el-main {
  background-color: #0d2445;
  margin-top: 20px;
  position: relative;
  padding: 0;
  color: #9ea5b2;
  .main-border {
    position: absolute;
    width: 10px;
    height: 10px;
  }
  .border-1 {
    top: 0;
    left: 0;
    border-top: $basic-border;
    border-left: $basic-border;
  }
  .border-2 {
    top: 0;
    right: 0;
    border-top: $basic-border;
    border-right: $basic-border;
  }
  .border-3 {
    bottom: 0;
    left: 0;
    border-bottom: $basic-border;
    border-left: $basic-border;
  }
  .border-4 {
    bottom: 0;
    right: 0;
    border-bottom: $basic-border;
    border-right: $basic-border;
  }
}
</style>