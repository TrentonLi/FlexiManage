<!--
 * @Author: TrentonLi
 * @Date: 2025/2/7
 * @LastEditors: TrentonLi
 * @Description: 登录页面
 -->
<script setup lang="ts">
import {useRouter} from "vue-router";
import Layout from "./Layout.vue";
import {ref} from "vue";
import {type FormInst, useMessage} from "naive-ui";
import {useUserStore} from "../stores/userStore";

const router = useRouter()
const useStore = useUserStore()
const message = useMessage()

const desText = `没有账户吗? <span style="font-weight: bold;color: #1a1a1a">注册</span>`

const formRef = ref<FormInst | null>(null)

interface loginVal {
  userName: String
  passWord: String
}

const formValue = ref<loginVal>({
  userName: '',
  passWord: ''
})
const rules = {
  userName: {required: true, message: '请输入用户名', trigger: 'blur'},
  passWord: {required: true, message: '请输入用户名', trigger: 'blur'}
}
const Login = () => {
  formRef.value?.validate((error) => {
    if (!error) {
      if (formValue.value.userName === 'admin' && formValue.value.passWord === '123456') {
        message.success('登录成功')
        useStore.setInfo({
          name: formValue.value.userName,
          token: 'adminToken'
        })
        router.push('/home')
      } else {
        message.error('账号密码错误')
      }
    } else {
      console.log('error')
    }
  })
}
const toSignUp = (e: Event) => {
  if ((e.target as HTMLElement)?.tagName === 'SPAN') {
    router.push('/signUp');
  }
}
const ForgetPass = () =>{
  router.push('/forgotPass')
}
</script>

<template>
  <Layout @btnHandle="Login" :title="'注册'" :desc="desText" :btnText="'注册'" @descClick="toSignUp">
    <div class="slot_form">
      <NForm
          ref="formRef"
          :label-width="80"
          :model="formValue"
          :rules="rules"
          :size="'large'">
        <h1>联系管理员</h1>
        <!--<NFormItem label="账号" path="userName">-->
        <!--  <NInput placeholder="请输入用户名(admin)" v-model:value="formValue.userName"/>-->
        <!--</NFormItem>-->
        <!--<NFormItem label="密码" path="passWord">-->
        <!--  <NInput-->
        <!--      type="password"-->
        <!--      show-password-on="mousedown"-->
        <!--      placeholder="请输入密码(123456)" v-model:value="formValue.passWord"/>-->
        <!--</NFormItem>-->
      </NForm>
      <!--<div class="forgetPass pointer" @click="ForgetPass">忘记密码?</div>-->
    </div>
  </Layout>
</template>

<style scoped>
@import "index.css";
</style>