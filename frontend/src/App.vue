<script setup lang="ts">
import Container from "./Container/index.vue"
import {useRoute} from "vue-router";
import {computed} from "vue";
const route = useRoute()
const BlackList =
    new Set(
        ['/login', '/signUp', '/forgotPass']
    ); // 用 Set 提高查找效率
const ifShow = computed(() =>
    BlackList.has(route.path)
)//has查找路由是否是黑名单
</script>
<template>
  <NMessageProvider>
    <template v-if="ifShow">
      <RouterView />
    </template>
    <template v-else>
      <Container />
    </template>
  </NMessageProvider>
</template>

<style scoped>

</style>
