<script setup lang="ts">
import MainContainer from '~/components/MainContainer/MainContainer.vue'
import RecomendedChannels from '~/components/MainContainer/RecomendedChannels.vue'
import type { TwitchTokenResponse } from '@/types/twitchTokenResponse'

const { data: tokenData, error: tokenError } =
  await useFetch<TwitchTokenResponse>('/api/twitch-token')

if (tokenError.value) {
  throw new Error(
    `Failed to get Twitch token: ${tokenError.value.data?.message || tokenError.value.message}`,
  )
}

const token = tokenData.value?.token

if (!token) {
  throw new Error('Twitch token is missing')
}

const config = useRuntimeConfig()
const videoId = '987654321'
const { data: videoData, error: videoError } = await useFetch(
  'https://api.twitch.tv/helix/videos',
  {
    query: { id: '987654321' },
    headers: {
      Authorization: `Bearer ${token}`,
      'Client-ID': config.public.twitchClientId,
    },
  },
)

if (videoError.value) {
  throw new Error('Failed to fetch videos: ' + videoError.value.message)
}

console.log('Twitch video data:', videoData.value)

const hostname = ref('')
onMounted(() => {
  hostname.value = window.location.hostname
})
</script>

<template>
  <MainContainer>
    <h1>Twitch Video</h1>
    <iframe
      v-if="hostname"
      width="560"
      height="315"
      :src="`https://player.twitch.tv/?video=${videoId}&parent=${hostname}`"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <RecomendedChannels />
  </MainContainer>
</template>

<style lang="scss"></style>
