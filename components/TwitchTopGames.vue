<script setup lang="ts">
import type { PropType } from 'vue'
import '~/assets/styles/TwitchTopGames.scss'
import type { Game } from '~/types/top-games'

defineProps({
  games: {
    type: Array as PropType<Game[]>,
    required: true,
  },
})
</script>

<template>
  <div class="categories-message">
    <span class="categories-title">Categories</span> we think you'll like
  </div>

  <div class="game-grid">
    <div class="game-grid__container">
      <div v-for="game in games" :key="game.id" class="game-card">
        <button class="game-card__button">
          <div class="game-card__thumbnail-container">
            <img
              :src="game.box_art_url.replace('{width}', '500').replace('{height}', '500')"
              :alt="game.name"
              class="game-card__thumbnail"
            />
          </div>
          <div class="game-card__info">
            <div class="game-card__details">
              <h3 class="game-card__name">{{ game.name }}</h3>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.categories-message {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.categories-title {
  color: #0000ff;
  font-weight: bold;
  margin-right: 0.5rem;
}
</style>
