import { useRuntimeConfig } from '#imports'
import { getTwitchToken } from './twitch-token'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  try {
    const token = await getTwitchToken()

    const response = await fetch('https://api.twitch.tv/helix/games/top', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Client-Id': config.public.twitchClientId,
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
        `Twitch API Error: ${response.status} ${response.statusText}. ${errorText}`,
      )
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al obtener games de Twitch:', error)
    throw createError({
      statusCode: 500,
      message:
        error instanceof Error ? error.message : 'Failed to fetch Twitch games data',
    })
  }
})
