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
  <!--导航栏-->
  <Header class="header" :title="'导航栏'"/>
  <!--视图窗-->
  <div class="Viewport">
    <div class="leftMenu">
      <Menu :menu-options="menuOptions"/>
    </div>
    <div class="rightContent">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
@import "index.scss";
</style>