/**
 * @Author: TrentonLi
 * @Date: 2025/2/07
 * @LastEditors: TrentonLi
 * @Description: 路由配置
 */
import { defineStore } from 'pinia'

interface AuthState {
    token: string
    username: string
    userId: string
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        token: '',
        username: '',
        userId: ''
    }),

    getters: {
        isLoggedIn: (state) => !!state.token,
        getToken: (state) => state.token,
        getUserInfo: (state) => ({
            username: state.username,
            userId: state.userId
        })
    },

    actions: {
        login(payload: { token: string; username: string; userId: string }) {
            this.token = payload.token
            this.username = payload.username
            this.userId = payload.userId
        },

        logout() {
            this.token = ''
            this.username = ''
            this.userId = ''
        },

        updateUserInfo(payload: Partial<Omit<AuthState, 'token'>>) {
            if (payload.username) this.username = payload.username
            if (payload.userId) this.userId = payload.userId
        }
    },

    persist: {
        key: 'auth-store',
        storage: localStorage
    }
})