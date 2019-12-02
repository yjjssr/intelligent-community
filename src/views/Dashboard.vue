<template>
  <div id="app">
    <el-container>
      <el-header height="90.2px">
        <div class="hader-left">
          <span>2019年10月15日</span>
          <span>周五</span>
          <span>10:00</span>
          <span>农历九月十五</span>
        </div>
        <div class="header-right">
          <span>登录</span>
          <img src="./assets/quit.png">
        </div>
        <div class="header-center">智慧诚信社区</div>
      </el-header>
      <el-main>
        <main-left></main-left>
        <main-right></main-right>
        <main-center></main-center>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import MainLeft from "@/components/mainLeft";
import MainCenter from "@/components/mainCenter";
import MainRight from "@/components/mainRight";
export default {
  components: {
    // HelloWorld
    MainLeft,
    MainCenter,
    MainRight
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-container {
  background-color: #000;
}
.el-header {
  background: url("./assets/header_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #fff;
}
.hader-left {
  font-size: 12px;
  float: left;
  position: relative;
  top: 13%;
}
.hader-left > span {
  margin-right: 10px;
}
.header-center {
  overflow: auto;
  font-size: 28px;
  position: relative;
  top: 18%;
  margin-left: 20%;
  margin-right: 20%;
}
.header-right {
  font-size: 14px;
  float: right;
  position: relative;
  top: 13%;
}
.header-right > span {
  margin-right: 30px;
  line-height: 24px;
}
.header-right > img {
  display: block;
  height: 24px;
  float: right;
  /* vertical-align: middle; */
}
</style>

