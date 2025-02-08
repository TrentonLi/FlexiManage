<!--
 * @Author: TrentonLi
 * @Date: 2025/2/7
 * @LastEditors: TrentonLi
 * @Description: 登录或注册Layout
 -->
<script setup lang="ts">
const {title, desc, btnText} = defineProps<{
  title: String,
  desc: String,
  btnText: String,
}>()
const emits = defineEmits<{
  btnHandle: void
}>()
const handle = () => emits('btnHandle')
</script>

<template>
  <div class="layout_card">
    <!--  标题-->
    <div class="layout_tit">{{ title }}</div>
    <!--  简介-->
    <p class="layout_des">{{ desc }}</p>
    <!--  插槽-->
    <slot></slot>
    <!--  确认按钮-->
    <NButton
        style="width: 80%"
        color="#000"
        size="large"
        type="info"
        @click="handle"
    >
      {{ btnText }}
    </NButton>
  </div>
</template>

<style scoped>
@import "index.css";
</style>