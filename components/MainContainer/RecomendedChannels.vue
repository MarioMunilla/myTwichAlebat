<script setup lang="ts">
import { computed } from 'vue'
import '~/assets/styles/recommendedChannels.scss'

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
        <NuxtLink :to="`/live/${channel.user_name}`">
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
        </NuxtLink>
      </article>
    </section>
  </nav>
</template>

<style scoped lang="scss"></style>
