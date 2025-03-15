<!--
 * @Author: TrentonLi
 * @Date: 2025/2/7
 * @LastEditors: 赵恩来
 * @Description: 登录或注册Layout
 -->
<script setup lang="ts">

	const { title, desc, btnText } = defineProps<{
		title: String;
		desc: String;
		btnText: String;
	}>();
	const emits = defineEmits<{
		(e: btnHandle): void;
		(e: descClick, v: Event): void;
	}>();
	const handle = () => emits("btnHandle");
	const descClick = (e: Event) => emits("descClick", e);
</script>

<template>
	<div class="layout_card">
		<!--  标题-->
		<div class="layout_tit">{{ title }}</div>
		<!--  简介-->
		<p v-html="desc" @click="descClick($event)" class="layout_des pointer"></p>
		<!--  插槽-->
		<slot></slot>
		<!--  确认按钮-->
		<NButton style="width: 80%" color="#000" size="large" type="info" @click="handle">
			{{ btnText }}
		</NButton>
		<!--返回按钮-->
		<!-- <div v-if="route.path === '/signUp'" class="backBox">
      <Back :btnText="'< Back to login'"/>
    </div> -->
	</div>
</template>

<style scoped>
	@import "index.css";
</style>
