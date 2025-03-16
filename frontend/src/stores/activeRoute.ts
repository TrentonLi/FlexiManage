// stores/activeRoute.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useActiveRouteStore = defineStore('activeRoute', () => {
    const activeRoute = ref<string>('');

    // 设置 activeRoute
    const setActiveRoute = (route: string) => {
        activeRoute.value = route;
    };

    return { activeRoute, setActiveRoute };
});