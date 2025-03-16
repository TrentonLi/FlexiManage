/*
 * @Author: 赵恩来
 * @Date: 2025-02-07 16:51:57
 * @LastEditors: 赵恩来
 * @LastEditTime: 2025-02-19 09:58:59
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vite.dev/config/
export default defineConfig({
	server: {
		port:0, // 端口随机,
		proxy: {
			"/api": {
				target: "http://localhost:8080", // 后端服务地址及端口
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			"@": "./src",
		},
	},
});
