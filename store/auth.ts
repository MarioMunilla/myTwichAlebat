import { defineStore } from 'pinia'
import mockUsers from '@/mocks/users.json'

interface User {
  username: string
  email: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
  }),
  actions: {
    login(username: string, password: string) {
      const foundUser = mockUsers.find(
        (user) => user.username === username && user.password === password,
      )

      if (foundUser) {
        this.user = { username: foundUser.username, email: foundUser.email }
        this.isAuthenticated = true
      } else {
        throw new Error('Usuario o contraseña incorrectos')
      }
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    },
  },
})
