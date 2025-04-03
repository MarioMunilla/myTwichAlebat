export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const clientId = config.public.twitchClientId
  const clientSecret = config.twitchClientSecret

  if (!clientId || !clientSecret) {
    throw createError({
      statusCode: 400,
      message: 'Twitch credentials not configured',
    })
  }

  try {
    const response = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Twitch API error: ${error}`)
    }

    const { access_token, expires_in } = await response.json()
    return {
      token: access_token,
      expiresIn: expires_in,
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch Twitch token: ' + error,
    })
  }
})
