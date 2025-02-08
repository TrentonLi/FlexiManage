<script setup lang="ts">
import {useUserStore} from "../stores/userStore";
import {onMounted} from "vue";
import Back from "./Back.vue";

const getStore = useUserStore()
const title = getStore.name
onMounted(() => {
  console.log(getStore.count)
})
const btnFun = () => {
  getStore.setCount(100)
  console.log(getStore.count)
}
</script>

<template>
  <div>
    <Back/>
    <h1>{{ title }}</h1>
    <NButton type="primary" @click="btnFun">测试测试</NButton>
  </div>
</template>

<style scoped>

</style>