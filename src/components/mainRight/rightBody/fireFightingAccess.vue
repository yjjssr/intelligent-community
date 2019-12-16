<template>
  <div class="main-wrap">
    <div class="flex-item">
      <div class="flex-bg">{{num}}</div>
      <div class="flex-bottom">{{des}}</div>
    </div>
    <div class="flex-item">
      <div class="flex-bg">{{num}}</div>
      <div class="flex-bottom">{{des}}</div>
    </div>
    <div class="flex-item">
      <div class="flex-bg">{{num}}</div>
      <div class="flex-bottom">{{des}}</div>
    </div>
    <div class="flex-item">
      <div class="flex-bg">{{num}}</div>
      <div class="flex-bottom">{{des}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      num:1,
      des:1
    }
  }
  
}
</script>
<style lang="scss" scoped>
.main-wrap{
  display:flex;
  justify-content: space-between;
  padding: 20px 10px;
  .flex-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .flex-bg{
      background-image: url("../../../assets/icon_xiaoquBG.png");
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
       height: 72px;
       width: 72px;
       margin-bottom: 20px;
    }

  }
}

</style>