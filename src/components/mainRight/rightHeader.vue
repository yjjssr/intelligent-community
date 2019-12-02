<template>
  <div class="right-header">
    <div class="header-top">
      <span>平广大楼智慧社区平台</span>
      <!-- <div class="top-bg"></div> -->
      <!-- <span>精细化展示</span> -->
      <!-- <img src="../../assets/main_right_header.png"> -->
    </div>
    <!-- <div class="header-bottom"> -->
      <!-- <div class="exchange">
        <v-icon name="exchange-alt" size="6" style="color:#fff;"></v-icon>
        <span>切换至精细化展示</span>
      </div>
      <div><ali-icon name="icon-xizao"></ali-icon></div> -->
      <!-- <div class="header-display">图标</div> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.right-header img {
  height: 12px;
}
.header-top {
  background-image: url("../../assets/main_right_header.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 40%;
  margin-top: 2%;
  padding-bottom: 2.6%;
}
/* .top-bg{
  background-image: url("../../assets/main_right_header.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 40%; 
} */
.header-top span {
  font-family: MicrosoftYaHei-Bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 1px;
  line-height: 24px;
}
.exchange {
  color: #fff;
  font-family: MicrosoftYaHei;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 1px;
  line-height: 27px;
  float: right;
}
.exchange span {
  margin-left: 5px;
}
.header-bottom {
  margin-left: 20px;
  margin-right: 20px;
}
.header-display {
  width: 324px;
  height: 81.8px;
}
</style>