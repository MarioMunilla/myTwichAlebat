export interface TwitchStream {
  profile_image_url: string
  id: string
  user_id: string
  user_login: string
  user_name: string
  game_id: string
  game_name: string
  type: 'live' | ''
  title: string
  viewer_count: number
  started_at: string
  language: string
  thumbnail_url: string
  tag_ids?: string[]
  tags?: string[]
  is_mature: boolean
}
