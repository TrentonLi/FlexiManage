<script setup lang="ts">
</script>

<template>
    <n-layout>
      <n-layout-header>我是Header</n-layout-header>
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
