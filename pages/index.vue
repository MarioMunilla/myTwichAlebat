<script setup lang="ts">
import TwitchStreamGrid from '~/components/TwitchStreamGrid.vue'
import { useTwitchStreams } from '~/composables/useTwitchStreams'
import RecommendedChannels from '~/components/MainContainer/RecomendedChannels.vue'
import { useTwitchGames } from '~/composables/useTwitchGames'

const { streams } = useTwitchStreams()
const { games } = useTwitchGames()
</script>

<template>
  <MainContainer>
    <div class="content-layout">
      <div class="content-layout__sidebar">
        <RecommendedChannels />
      </div>
      <div class="content-layout__main">
        <TwitchStreamGrid :streams="streams" />
        <TwitchTopGames :games="games" />
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

    // Añade espacio entre los componentes
    & > * {
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;

    &__sidebar {
      width: 100%;
    }
  }
}
</style>
