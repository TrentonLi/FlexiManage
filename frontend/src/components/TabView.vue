<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps<{
  tabs: Array<{ id: string; title: string }>;
}>();

const emit = defineEmits<{
  (e: 'close-tab', tabId: string): void;
}>();

const route = useRoute();
const router = useRouter();
const activeTab = ref(route.path);

// 监听路由变化，更新活动标签
watch(() => route.path, (newPath) => {
  activeTab.value = newPath;
});

// 标签页切换处理
const handleTabClick = (tabId: string) => {
  router.push(tabId);
};

// 关闭标签页处理
const handleCloseTab = (tabId: string, event: Event) => {
  event.stopPropagation(); // 阻止事件冒泡，避免触发标签页点击事件
  
  // 如果关闭的是当前活动标签页，需要切换到其他标签页
  if (activeTab.value === tabId) {
    // 找到下一个可用的标签页
    const currentIndex = props.tabs.findIndex(tab => tab.id === tabId);
    const nextTab = props.tabs[currentIndex + 1] || props.tabs[currentIndex - 1];
    
    if (nextTab) {
      router.push(nextTab.id);
    }
  }
  
  // 触发关闭标签页事件
  emit('close-tab', tabId);
};
</script>

<template>
  <div class="tab-view">
    <div class="tab-header">
      <div class="tab-scroll-container">
        <div
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-item"
          :class="{ active: activeTab === tab.id }"
          @click="handleTabClick(tab.id)"
        >
          <span class="tab-title">{{ tab.title }}</span>
          <span class="tab-close" @click="handleCloseTab(tab.id, $event)">×</span>
        </div>
      </div>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.tab-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.tab-header {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
  overflow: hidden;
}

.tab-scroll-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #d0d0d0 #f5f5f5;
}

/* 自定义滚动条样式 - Webkit 浏览器 */
.tab-scroll-container::-webkit-scrollbar {
  height: 6px;
}

.tab-scroll-container::-webkit-scrollbar-track {
  background: #f5f5f5;
}

.tab-scroll-container::-webkit-scrollbar-thumb {
  background-color: #d0d0d0;
  border-radius: 6px;
}

.tab-item {
  display: flex;
  align-items: center;
  padding: 8px 15px;
  cursor: pointer;
  transition: all 0.3s;
  color: #999;
  font-size: 14px;
  position: relative;
  margin-right: 2px;
  white-space: nowrap;
  min-width: 80px;
  max-width: 150px;
}

.tab-item:hover {
  background-color: #f9f9f9;
  color: #666;
}

.tab-item.active {
  background-color: #fff;
  border-bottom: 2px solid #1890ff;
  color: #000;
  font-weight: 500;
}

.tab-title {
  margin-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tab-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 16px;
  line-height: 1;
  color: #999;
  transition: all 0.3s;
  flex-shrink: 0;
}

.tab-close:hover {
  background-color: #e0e0e0;
  color: #333;
}

.tab-content {
  flex: 1;
  padding: 15px;
  overflow: auto;
  background-color: #fff;
}
</style> 