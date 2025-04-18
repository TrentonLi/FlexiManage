<script setup lang="ts">
import {useAuthStore} from "../stores/userStore";
import {onMounted} from "vue";
import Back from "./Back.tsx";

const store = useAuthStore()
const auth = store.getUserInfo
const title = auth.username

onMounted(() => {
})
const btnFun = () => {
  console.log(auth)
}
</script>

<template>
  <div>
    <Back />
    <h1>{{ title }}</h1>
    <NButton type="primary" @click="btnFun">测试测试</NButton>
  </div>
</template>

<style scoped>

</style>