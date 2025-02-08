<!--
 * @Author: TrentonLi
 * @Date: 2025/2/7
 * @LastEditors: TrentonLi
 * @Description: 回退按钮
 -->
<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const back = () =>router.back()
</script>

<template>
  <div>
    <NButton strong secondary @click="back">Back</NButton>
  </div>
</template>

<style scoped>

</style>