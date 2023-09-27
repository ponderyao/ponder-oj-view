<template>
  <div id="user-login-view" class="center">
    <div id="login-box" class="center">
      <div class="login-title center">
        <img class="logo" src="../../assets/logo.png" alt="" />
        <div class="title">Ponder OJ</div>
      </div>
      <a-form
        :model="form"
        :style="{ width: '320px', margin: 'auto' }"
        @submit="handleSubmit"
      >
        <a-form-item class="form-title" hide-label> 账号密码登录</a-form-item>
        <a-form-item field="username" hide-label>
          <a-input
            class="login-input"
            v-model="form.username"
            placeholder="账号"
          />
        </a-form-item>
        <a-form-item field="password" hide-label>
          <a-input
            class="login-input"
            v-model="form.password"
            placeholder="密码"
          />
        </a-form-item>
        <a-form-item hide-label :style="{ marginBottom: '0px' }">
          <a-button class="login-btn" type="primary" html-type="submit">
            登录
          </a-button>
        </a-form-item>
        <a-row class="login-about-link">
          <a-link class="login-read">忘记密码</a-link>
          <a-link class="login-read">未注册? 前往注册</a-link>
        </a-row>
        <a-form-item field="isRead" class="login-read" hide-label>
          <a-checkbox v-model="form.isRead" style="margin-right: 5px" />
          登录即代表您同意
          <a href="https://www.baidu.com" class="protocol">《用户协议》</a>
          和
          <a href="https://www.baidu.com" class="protocol">《隐私协议》</a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface LoginForm {
  username: string;
  password: string;
  isRead: boolean;
}

const form = reactive<LoginForm>({
  username: "",
  password: "",
  isRead: false,
});

const handleSubmit = () => {
  console.log(form);
};
</script>

<style scoped>
#user-login-view {
  min-height: 90vh;
  min-width: 100vw;
  margin: auto;
}

#login-box {
  width: 400px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #ffffff;
  border-radius: 20px;
  border: rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.12);
  flex-direction: column;
}

.login-title {
  height: 60px;
  margin-bottom: 20px;
}

.logo {
  height: 26px;
}

.title {
  color: #444;
  margin-left: 6px;
  font-size: 23px;
  font-weight: 500;
  font-family: "Times New Roman", serif;
}

.form-title {
  font-size: 20px;
}

.login-input {
  width: 100%;
  height: 42px;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.login-btn {
  width: 100%;
  height: 42px;
  border-radius: 6px;
}

.login-about-link {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.login-read {
  font-size: 12px;
}

.protocol {
  text-decoration: none;
  color: #444444;
}
</style>
