<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const authStore = useAuthStore()
const username = ref('')
const password = ref('')
const errorMessage = ref('')

const login = () => {
  if (!username.value || !password.value) {
    errorMessage.value = 'Todos los campos son obligatorios'
    return
  }

  try {
    authStore.login(username.value, password.value)

    router.push('/')
  } catch (error) {
    errorMessage.value = error.message
  }
}
</script>

<template>
  <div class="auth-form">
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.auth-form {
  max-width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
}
button {
  padding: 10px;
  background-color: #9147ff;
  color: white;
  border: none;
  cursor: pointer;
}
.error {
  color: red;
  font-size: 0.9rem;
}
</style>
