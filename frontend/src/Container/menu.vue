<script setup lang="ts">
import {type MenuOption} from "naive-ui";
import {onMounted, watch, ref} from "vue";
import {useRoute} from "vue-router";
import {useActiveRouteStore} from "../stores/activeRoute.ts";
import router from "../router";

const route = useRoute();
const activeRouteStore = useActiveRouteStore();
const activePath = ref(route.path);

onMounted(() => {
  activePath.value = route.path;
  activeRouteStore.setActiveRoute(route.path);
});

const props = defineProps<{ menuOptions : MenuOption[] }>();

const handleUpdateValue = (key: string) => {
  console.log('key', key);
  router.push(key);
};

// 监听路由变化，确保 activePath 始终与当前路由同步
watch(
  () => route.path,
  (newPath) => {
    activePath.value = newPath;
    activeRouteStore.setActiveRoute(newPath);
  }
);
</script>

<template>
  <div>
    <NMenu
      v-model:value="activePath"
      :options="props.menuOptions"
      @update:value="handleUpdateValue"
    />
  </div>
</template>

<style scoped>

</style>