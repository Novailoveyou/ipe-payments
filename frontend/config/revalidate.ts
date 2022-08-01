const revalidate = {
  default: false,
  // default: 60,
  day: 60 * 60 * 24,
  hour: 60 * 60,
  minute: 60,
  secound: 1
} as const

export default revalidate
