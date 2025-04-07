export async function getTwitchToken() {
  const clientId = process.env.TWITCH_CLIENT_ID!
  const clientSecret = process.env.TWITCH_CLIENT_SECRET!
  const authUrl = 'https://id.twitch.tv/oauth2/token'

  const params = new URLSearchParams({
    client_id: clientId || '',
    client_secret: clientSecret || '',
    grant_type: 'client_credentials',
  })

  try {
    const response = await fetch(`${authUrl}?${params}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`)
    }

    const data = await response.json()
    console.log('Data:', data)
    return data.access_token
  } catch (error) {
    console.error('Error fetching Twitch token:', error)
    throw error
  }
}
