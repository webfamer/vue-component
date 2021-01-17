<template>
  <div>
    <KForm :model="userInfo" :rules="rules" ref="loginForm">
      <!-- 登录名 -->
      <KFormItem label="登录" prop="username">
        <KInput type="text" v-model="userInfo.username" placeholder="请输入账号"></KInput>
      </KFormItem>
        <!-- 密码 -->
      <KFormItem label="密码" prop="password">
        <KInput type="password" v-model="userInfo.password" placeholder="请输入密码"></KInput>
      </KFormItem>
        <KFormItem>
        <button @click="login">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from "./KInput";
import KFormItem from "./KFormItem";
import KForm from "./KForm";
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    getValue() {
      console.log(this.userInfo.username);
    },
    login(){
      this.$refs['loginForm'].validate(valid=>{
        if(valid){
          alert('submit');
        }else{
          console.log('error submit!');
          return false;
        }
      })
    }
  },
  components: { KInput, KFormItem, KForm },
};
</script>

<style lang="scss" scoped></style>
