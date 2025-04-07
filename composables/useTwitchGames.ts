import { computed } from 'vue'
import type { Game } from '~/types/top-games'

export function useTwitchGames() {
  const {
    data: game,
    pending,
    error,
    refresh,
  } = useFetch<{ data: Game[] }>('/api/twitch-top-games')

  const games = computed(() => {
    return game.value?.data || ([] as Game[])
  })

  return {
    games,
    pending,
    error,
    refresh,
  }
}
