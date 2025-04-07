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
    <div class="game-grid__header">
      <button class="header-item">
        Games
        <img src="~/assets/game.svg" alt="Elipsis" class="header__elipsis" />
      </button>
      <button class="header-item">
        IRL
        <img src="~/assets/microphone.svg" alt="Elipsis" class="header__elipsis" />
      </button>
      <button class="header-item">
        MUSIC & DJS
        <img src="~/assets/music.svg" alt="Elipsis" class="header__elipsis" />
      </button>
      <button class="header-item">
        Creative
        <img src="~/assets/creative.svg" alt="Elipsis" class="header__elipsis" />
      </button>
      <button class="header-item">
        ESports
        <img src="~/assets/creative.svg" alt="Elipsis" class="header__elipsis" />
      </button>
    </div>
    <div class="game-grid__more">
      <button class="game-grid__more-button">
        Mostrar más
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 11L3 6h10l-5 5z" fill="currentColor" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
