<script setup lang="ts">
import {Header} from "../components/Header.tsx";
import Menu from "./menu.vue"
import type {MenuOption} from "naive-ui";

const menuOptions: MenuOption[] = [
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    //icon: renderIcon(BookIcon),
    children: [
      {
        label: '饮品',
        key: 'beverage',
        //icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
</script>

<template>
  <n-layout>
    <n-layout-header>
      <Header :title="'导航栏'" />
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        <Menu :menuOptions="menuOptions" />
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