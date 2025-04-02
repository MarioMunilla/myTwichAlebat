<template>
  <div class="main-container">
    <MainContainerHeader />
    <slot>
      <MainContainerContent />
    </slot>
  </div>
</template>

<script setup lang="ts">
import MainContainerHeader from './MainContainerHeader.vue'
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}

.main-footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>
