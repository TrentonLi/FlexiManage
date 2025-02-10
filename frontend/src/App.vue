<script setup lang="ts">
import {Header} from "./components/Header";
import {useRoute} from "vue-router";
//import {computed} from "vue";
const route = useRoute()
//const isLoginOrSignUp = computed(() => route.path === '/login' || route.path === 'signUp')
</script>

<template>
  <NMessageProvider>
    <template v-if="route.path == '/login' || route.path == '/signUp'">
      <RouterView />
    </template>
    <template v-else>
      <n-layout>
        <n-layout-header>
          <Header :title="'导航栏'" />
        </n-layout-header>
        <n-layout has-sider>
          <n-layout-sider content-style="padding: 24px;">
            我是菜单
          </n-layout-sider>
          <n-layout-content content-style="padding: 24px;">
            视图窗口
            <RouterView />
          </n-layout-content>
        </n-layout>
        <n-layout-footer>底部</n-layout-footer>
      </n-layout>
    </template>
  </NMessageProvider>
</template>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
