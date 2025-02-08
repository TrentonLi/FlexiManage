<!--
 * @Author: TrentonLi
 * @Date: 2025/2/7
 * @LastEditors: TrentonLi
 * @Description: 登录页面
 -->
<script setup lang="ts">
import {useRouter} from "vue-router";
import Layout from "./Layout.vue";

const router = useRouter()
const login = () =>{
  console.log('登录')
  router.push('/home')
}
</script>

<template>
  <Layout @btnHandle="login" :title="'标题'" :desc="'我是登录'" :btnText="'登录'">
    <div>
      登录/注册表单
    </div>
  </Layout>
</template>

<style scoped>

</style>