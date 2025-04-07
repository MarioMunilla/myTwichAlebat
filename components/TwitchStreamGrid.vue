<script setup lang="ts">
import type { PropType } from 'vue'
import '~/assets/styles/twitchStream.scss'
import type { TwitchStream } from '~/composables/useTwitchStreams'

defineProps({
  streams: {
    type: Array as PropType<TwitchStream[]>,
    required: true,
  },
})
</script>

<template>
  <div class="stream-grid">
    <div class="stream-grid__container">
      <div v-for="stream in streams" :key="stream.user_name" class="stream-card">
        <div class="stream-card__thumbnail-container">
          <img
            :src="
              stream.thumbnail_url
                ?.replace('{width}', '440')
                .replace('{height}', '248') || 'https://placehold.co/440x248'
            "
            :alt="stream.title"
            class="stream-card__thumbnail"
          />
          <div class="stream-card__overlay">
            <span class="stream-card__live-badge">DIRECTO</span>
            <span class="stream-card__viewers">{{ stream.view_count }} espectadores</span>
          </div>
        </div>
        <div class="stream-card__info">
          <div class="stream-card__streamer-info">
            <img
              :src="stream.profile_image_url || 'https://placehold.co/40x40'"
              :alt="stream.user_name"
              class="stream-card__avatar"
            />
            <div class="stream-card__details">
              <h3 class="stream-card__title">{{ stream.title || stream.user_name }}</h3>
              <p class="stream-card__streamer">{{ stream.user_name }}</p>
              <p v-if="stream.game_name" class="stream-card__game">
                {{ stream.game_name }}
              </p>
              <div class="stream-card__tags">
                <span class="stream-card__tag">{{ stream.language || 'Español' }}</span>
                <span class="stream-card__tag">Directo/Activado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="stream-grid__more">
      <button class="stream-grid__more-button">
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

<style lang="scss"></style>
