<script setup lang="ts">
import {type MenuOption} from "naive-ui";
import {onMounted, watch} from "vue";
import {useRoute} from "vue-router";
import {useActiveRouteStore} from "../stores/activeRoute.ts";
import router from "../router";
const route = useRoute()
const activeRouteStore = useActiveRouteStore();

onMounted(() =>{
  //activeRoute.value = route.name as string
})
const props = defineProps<{ menuOptions : MenuOption[] }>()
//const message = useMessage()
const handleUpdateValue = (key: string) => {
  console.log('key',key)
  router.push(key)
}

// 监听路由变化，确保 activeRoute 始终与当前路由同步
watch(
    () => route.name,
    (newName) => {
      activeRouteStore.setActiveRoute(newName as string)
    }
);
</script>

<template>
  <div>
    <NMenu
        v-model:value="activeRouteStore.activeRoute"
        :options="props.menuOptions"
        @update:value="handleUpdateValue"
    />
  </div>
</template>

<style scoped>

</style>