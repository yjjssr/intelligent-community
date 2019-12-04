<template>
  <el-container>
    <el-main>
      <el-form ref="form" :model="form">
        <div class="form-header">
          <svg-icon icon-class="logo"></svg-icon>
          <span>智能社区</span>
        </div>
        <el-form-item class="my-form-item">
          <svg-icon icon-class="user"></svg-icon>
          <el-input placeholder="请输入账号" v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item class="my-form-item">
          <svg-icon icon-class="password"></svg-icon>
          <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("111");
    }
  }
};
</script>
<style scoped lang="scss">
.el-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("../assets/login_bg.png");
  background-size: contain;
  background-position: center;
}
.el-main {
  text-align: center;
  position: relative;
}
.el-main:before {
  content: ".";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.form-header {
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: normal;
  font-family: "Roboto", sans-serif;
  color: #fff;
}
.form-header svg {
  margin-right: 10px;
}
.form-header svg:before {
  content: "";
}
.el-form {
  max-width: 640px;
  background-image: url("../assets/login_bg2.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 20px;
}
.my-form-item {
  display: flex;
  background: rgba(0, 0, 0, 0.1);
  .el-form-item__content {
    display: flex !important;
    align-items: center;
  }
  svg {
    color: #fafafa;
    padding: 0 5px;
  }
  .el-input__inner {
    background-color: yellow;
  }
}
</style>

