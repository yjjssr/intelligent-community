<template>
  <div class="rightBody">
    <div class="display-left">
      <fund-receipt></fund-receipt>
    </div>
    <div class="display-right"></div>
  </div>
</template>
<script>
import FundReceipt from "./fundAndReceipt";
export default {
  components: {
    FundReceipt
  }
};
</script>
<style scoped>
.rightBody {
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
}
.display-left {
  float: left;
  width: 45%;
}
.display-right {
  overflow: hidden;

  margin-left: 15px;
}
</style>


