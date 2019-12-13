<template>
  <el-container>
    <el-header>维修基金使用情况及公益性收入</el-header>
    <el-main>
      <div class="main-border border-1"></div>
      <div class="main-border border-2"></div>
      <div class="main-border border-3"></div>
      <div class="main-border border-4"></div>
      <div class="fund-receipt-wrap">
        <div class="fund-wrap">
          <p>
            <span class="fund-number">90</span>
            <span>万元</span>
          </p>
          <span>当前基金</span>
          <span>维修额度</span>
          <span></span>
        </div>
        <div class="receipt-wrap">
          <p>
            <span>45</span>
            <span>万元</span>
          </p>
          <span>物业公益性收入</span>
          <span>收入总额</span>
          <span></span>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$basic-border:1px solid #fff;
.el-header {
  background-image: url("../../../assets/specific_header_bg.png");
  background-size: cover;
  line-height: 30px;
  color: #39f;
  height: auto !important;
}
.el-main {
  background-color: #0d2445;
  margin-top: 20px;
  position: relative;
  padding: 0;
  .main-border {
    position: absolute;
    width: 10px;
    height: 10px;
  }
  .border-1{
    top: 0;
    left: 0;
    border-top: $basic-border;
    border-left: $basic-border;

  }
  .border-2{
    top: 0;
    right: 0;
    border-top: $basic-border;
    border-right: $basic-border;

  }
  .border-3{
    bottom: 0;
    left: 0;
    border-bottom: $basic-border;
    border-left: $basic-border;
  }
  .border-4{
    bottom: 0;
    right: 0;
    border-bottom: $basic-border;
    border-right: $basic-border;
  }
  .fund-receipt-wrap {
    display: flex;
    padding: 30px 20px 50px;
    color: #9ea5b2;
    .fund-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        span:first-child {
          color: #3573f1;
        }
      }
      > span:last-child {
        background-color: #9ea5b2;
        height: 6px;
        width: 40%;
        border-radius: 10px;
        margin-top: 15px;
      }
    }
    .receipt-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        span:first-child {
          color: #00b9a5;
        }
      }
      > span:last-child {
        background-color: #9ea5b2;
        height: 6px;
        width: 40%;
        border-radius: 10px;
        margin-top: 15px;
      }
    }
  }
}
</style>