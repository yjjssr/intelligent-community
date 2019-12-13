<template>
  <el-container>
    <el-main>
      <el-form ref="loginForm" :model="form" :rules="loginRules">
        <div class="form-header">
          <svg-icon icon-class="logo"></svg-icon>
          <span>智能社区</span>
        </div>
        <el-form-item>
          <svg-icon icon-class="user"></svg-icon>
          <el-input placeholder="请输入账号" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item>
          <svg-icon icon-class="password"></svg-icon>
          <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-button class="my-button" type="primary" @click="onSubmit" :loading="loading">登录</el-button>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    const validateUsername=(rule,value,callback)=>{
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword=(rule,value,callback)=>{
      if (!value) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loading:false,
      form: {
        username: "",
        password: ""
      },
      loginRules:{
        username:[{required: true, trigger: 'blur', validator: validateUsername}],
        password:[{required: true, trigger: 'blur', validator: validatePassword}]
      }
    };
  },
  methods: {
    onSubmit() {
      this.form.dataTime=new Date().getTime()
      this.$refs.loginForm.validate(valid=>{
        if(valid){
          this.$store.dispatch('user/LoginByUsername', this.form)
          .then(()=>{
              this.loading = false
              this.$message('登录成功', 'success')
              this.loading = false
              this.$router.push({
                path: '/dashboard'
              })
          })
          .catch(()=>{
             this.loading = false
          })
        }
      })
      console.log("111");
    }
  }
};
</script>
<style  lang="scss" scoped>
.el-container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: url("../assets/login_bg.png");
  background-size: cover;
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
.el-form-item {
  display: flex;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  svg {
    color: #fafafa;
    padding: 0 5px;
  }
}
.el-form-item /deep/ .el-form-item__content {
  display: flex !important;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  padding-right: 10px;
  padding-left: 15px;
  /deep/ .el-input__inner {
    background-color: transparent;
    border: none;
    color: #fff;
  }
}
.my-button {
  width: 100%;
}
</style>

