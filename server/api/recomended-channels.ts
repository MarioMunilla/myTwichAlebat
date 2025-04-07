import { useRuntimeConfig } from '#imports'
import { getTwitchToken } from './twitch-token'

export default async function getRecomendedChannels() {
  const config = useRuntimeConfig()

  try {
    const token = await getTwitchToken()

    const response = await fetch(
      'https://api.twitch.tv/helix/streams?language=es&first=10',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Client-Id': config.public.twitchClientId,
        },
      },
    )

    console.log('Client ID usado:', config.public.twitchClientId)

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
        `Twitch API Error: ${response.status} ${response.statusText}. ${errorText}`,
      )
    }

    const data = await response.json()
    console.log('Datos recibidos:', data)
    return data
  } catch (error) {
    console.error('=================== ERROR ===================')
    console.error('Error al obtener streams de Twitch:', error)
    throw createError({
      statusCode: 500,
      message:
        error instanceof Error ? error.message : 'Failed to fetch Twitch streams data',
    })
  }
}
