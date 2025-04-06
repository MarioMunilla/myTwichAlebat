<script setup lang="ts">
import TwitchStreamGrid from '~/components/TwitchStreamGrid.vue'
import MainContainer from '~/components/MainContainer/MainContainer.vue'
import RecommendedChannels from '~/components/MainContainer/RecomendedChannels.vue'
import { useTwitchStreams } from '~/composables/useTwitchStreams'

const { streams } = useTwitchStreams()
</script>

<template>
  <MainContainer>
    <div class="content-layout">
      <div class="content-layout__sidebar">
        <RecommendedChannels />
      </div>
      <div class="content-layout__main">
        <TwitchStreamGrid :streams="streams" />
      </div>
    </div>
  </MainContainer>
</template>

<style lang="scss" scoped>
.content-layout {
  display: flex;
  width: 100%;
  padding: 20px;
  gap: 20px;

  &__sidebar {
    width: 300px;
    flex-shrink: 0;
  }

  &__main {
    flex: 1;
    min-width: 0; // Evita que el contenido se desborde
  }

  @media (max-width: 992px) {
    flex-direction: column;

    &__sidebar {
      width: 100%;
    }
  }
}
</style>
