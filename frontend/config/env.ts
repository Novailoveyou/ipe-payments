const env = {
  dev: process.env.NODE_ENV === 'development',
  prod: process.env.NODE_ENV === 'production',
  test: process.env.NODE_ENV === 'test',
  googleTagManagerId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
} as const

export default env
