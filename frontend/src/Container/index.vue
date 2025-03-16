<script setup lang="ts">
import {Header} from "../components/Header.tsx";
import Menu from "./menu.vue"
import {menuList} from "./menuList.ts";


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
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
@import "index.scss";
</style>