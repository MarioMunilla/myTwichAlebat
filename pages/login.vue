<script setup lang="ts"></script>

<template>
  <section>
    <header>
      <h1>Página de login</h1>
    </header>
    <main>
      <AuthLoginForm></AuthLoginForm>
    </main>
    <footer>
      <p>&copy; 2023 Your Company Name. Todos los derechos reservados.</p>
    </footer>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f9f9f9;
}
header,
main,
footer {
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
}
h1 {
  font-size: 2rem;
  margin-bottom: 1.25rem;
  text-align: center;
}
footer {
  margin-top: 2.5rem;
  font-size: 0.875rem;
  color: #666;
}
</style>
