import { computed } from 'vue'
import type { TwitchStream } from '~/types/twitchStream'

export function useTwitchStreams() {
  const {
    data: streamsData,
    pending,
    error,
    refresh,
  } = useFetch<{ data: TwitchStream[] }>('/api/twitch-top-streams')

  const streams = computed(() => {
    return streamsData.value?.data || ([] as TwitchStream[])
  })

  return {
    streams,
    pending,
    error,
    refresh,
  }
}
