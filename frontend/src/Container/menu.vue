<script setup lang="ts">
import {type MenuOption, useMessage} from "naive-ui";

const props = defineProps<{ menuOptions : MenuOption[] }>()
const message = useMessage()
const handleUpdateValue = (key: string, item: MenuOption) => {
  message.info(`[onUpdate:value]: ${JSON.stringify(key)}`)
  message.info(`[onUpdate:value]: ${JSON.stringify(item)}`)
}
</script>

<template>
  <div>
    <NMenu  :options="props.menuOptions" @update:value="handleUpdateValue"/>
  </div>
</template>

<style scoped>

</style>