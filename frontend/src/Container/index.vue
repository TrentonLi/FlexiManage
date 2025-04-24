<script setup lang="ts">
import {Header} from "../components/Header.tsx";
import Menu from "./menu.vue"
import {menuList} from "./menuList.ts";
import TabView from "../components/TabView.vue";
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// 标签页配置
const tabConfigs = [
  { id: '/home', title: '首页' },
  { id: '/menuOne', title: '菜单一' },
  // 可以根据需要添加更多标签页配置
];

// 当前显示的标签页
const visibleTabs = ref([
  { id: '/home', title: '首页' }
]);

// 监听路由变化，动态添加标签页
watch(() => route.path, (newPath) => {
  // 如果路由不在当前显示的标签页中，则添加新标签页
  if (!visibleTabs.value.some(tab => tab.id === newPath)) {
    // 查找对应的标签页配置
    const tabConfig = tabConfigs.find(config => config.id === newPath);
    if (tabConfig) {
      visibleTabs.value.push({ ...tabConfig });
    }
  }
}, { immediate: true });

// 关闭标签页
const handleCloseTab = (tabId: string) => {
  // 不允许关闭首页标签
  if (tabId === '/home') return;
  
  // 从可见标签页中移除
  const index = visibleTabs.value.findIndex(tab => tab.id === tabId);
  if (index !== -1) {
    visibleTabs.value.splice(index, 1);
  }
};
</script>

<template>
  <!--导航栏-->
  <Header class="header" :title="'导航栏'"/>
  <!--视图窗-->
  <div class="Viewport">
    <div class="leftMenu">
      <Menu :menu-options="menuList"/>
    </div>
    <div class="rightContent">
      <!-- 使用自定义的 TabView 组件 -->
      <TabView :tabs="visibleTabs" @close-tab="handleCloseTab">
        <RouterView />
      </TabView>
    </div>
  </div>
</template>

<style scoped>
@import "index.scss";
</style>