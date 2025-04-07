<script setup lang="ts">
import { computed } from 'vue'

export interface RecommendedChannel {
  id: string
  user_id: string
  user_login: string
  user_name: string
  title: string
  viewer_count: number
  thumbnail_url: string
  profile_image_url: string
  game_name: string
  language: string
}

const { data, pending, error } = await useAsyncData('recommended-channels', () =>
  $fetch('/api/recommended-channels'),
)

const channels = computed(
  () =>
    data.value?.data.map((channel: { thumbnail_url: string }) => ({
      ...channel,
      formattedThumbnail: channel.thumbnail_url
        .replace('{width}', '450')
        .replace('{height}', '220'),
    })) ?? [],
)
</script>

<template>
  <nav class="nav">
    <header class="nav__header">
      <h1>RECOMMENDED CHANNELS</h1>
    </header>
    <section class="channels__list">
      <div v-if="pending" class="loading">Cargando canales...</div>
      <div v-else-if="error" class="error">Error al cargar canales</div>
      <article
        v-else
        v-for="channel in channels"
        :key="channel.user_name"
        class="channel__card"
      >
        <!-- Miniatura del stream -->
        <!--      <div class="channel__thumbnail">
          <img
            :src="channel.formattedThumbnail"
            :alt="channel.title"
            class="channel__thumbnail--img"
          />
        </div> -->

        <!-- Info del canal -->
        <div class="channel__info">
          <div class="channel__avatar">
            <img
              :src="channel.formattedThumbnail"
              :alt="channel.user_name"
              class="channel__avatar--img"
            />
          </div>
          <div class="channel__details">
            <span class="channel__details--username">{{ channel.user_name }}</span>
            <span class="channel__details--game">{{ channel.game_name }}</span>
          </div>
        </div>

        <div class="channel__viewers">
          <span class="channel__viewers--live-indicator">🔴</span>
          <span>{{ channel.viewer_count }}</span>
        </div>
      </article>
    </section>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  height: 80vh;
  width: 17vw;
  min-width: 250px;
  background-color: #1f1f23;
  color: white;
  padding: 0.8em;
  overflow-y: auto;

  &__header {
    padding: 0.5em 0;
    margin-bottom: 1em;

    h1 {
      font-size: 0.9em;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 1240px) {
    display: none;
  }
}

.channels__list {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.channel__card {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  background-color: #26262c;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
}

.channel__thumbnail--img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.channel__info {
  display: flex;
  align-items: center;
  padding: 0.5em;
  gap: 0.5em;
}

.channel__avatar {
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  overflow: hidden;

  &--img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}

.channel__details {
  display: flex;
  flex-direction: column;

  &--username {
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &--game {
    font-size: 0.8em;
    color: #adadb8;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.channel__viewers {
  padding: 0 0.5em 0.5em;
  font-size: 0.8em;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.3em;

  &--live-indicator {
    color: red;
    font-size: 0.6em;
  }
}

.loading,
.error {
  padding: 1em;
  text-align: center;
  color: #adadb8;
}

.error {
  color: #ff4444;
}
</style>
