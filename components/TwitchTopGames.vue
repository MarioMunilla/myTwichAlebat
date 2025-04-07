<script setup lang="ts">
import type { PropType } from 'vue'
import '~/assets/styles/twitchStream.scss'
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

<style lang="scss" scoped>
.game-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.game-grid__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: 18px;
  font-weight: 600;
  padding: 8px;
}

.header-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  font-size: medium;
  margin: 0 8px;
  color: white;
  background-color: rgb(23, 137, 219);

  &:hover {
    background-color: #3a3a3f;
  }
}

.header__elipsis {
  width: 24px;
  height: 24px;
}

.game-grid__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

.game-card {
  background-color: #1f1f23;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    background-color: #2a2a2f;
  }
}

.game-card__button {
  width: 100%;
  margin: 8px 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
}

.game-card__thumbnail-container {
  width: 100%;
  aspect-ratio: 4/5;
  overflow: hidden;
}

.game-card__thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.game-card__info {
  padding: 12px;
}

.game-card__name {
  font-size: 14px;
  font-weight: 600;
  color: #efeff1;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.game-grid__more {
  text-align: center;
  margin-top: 8px;
}

.game-grid__more-button {
  background-color: #2a2a2f;
  color: #efeff1;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3a3a3f;
  }
}
</style>
