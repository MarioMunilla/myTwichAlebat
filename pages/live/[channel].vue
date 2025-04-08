<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const channel = route.params.channel as string
</script>

<template>
  <MainContainer>
    <div class="live-page">
      <h2 class="live-page__title">Viendo en directo: {{ channel }}</h2>
      <div class="live-page__container">
        <iframe
          class="live-page__iframe"
          :src="`https://player.twitch.tv/?channel=${channel}?parent=my-twich-alebat.vercel.app&darkpopout`"
          frameborder="0"
          allowfullscreen
          scrolling="no"
        />
        <iframe
          class="live-page__chat"
          :src="`https://www.twitch.tv/embed/${channel}/chat?parent=my-twich-alebat.vercel.app&darkpopout`"
          frameborder="0"
          scrolling="yes"
        />
      </div>
    </div>
  </MainContainer>
</template>

<style lang="scss" scoped>
$border-radius: 0.5rem;
$gap: 1.25rem;
$video-height: 30rem;
$light-bg: #fff;

.live-page {
  padding: 1.25rem;

  &__title {
    font-size: 1.5rem;
    margin-bottom: $gap;
    text-align: center;
    color: #fff;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: $gap;
    justify-content: center;
  }

  &__iframe {
    flex: 2;
    min-width: 37.5rem;
    height: $video-height;
    border-radius: $border-radius;
  }

  &__chat {
    flex: 1;
    min-width: 18.75rem;
    height: $video-height;
    border-radius: $border-radius;
    background-color: $light-bg;
  }

  @media (max-width: 62.5rem) {
    &__container {
      flex-direction: column;
      align-items: center;
    }

    &__iframe,
    &__chat {
      min-width: 100%;
      width: 100%;
    }
  }
}
</style>
