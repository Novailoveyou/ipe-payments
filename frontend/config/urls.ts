const protocols = {
  delimiter: '://',
  http: 'http',
  https: 'https'
} as const

const ports = {
  delimiter: ':',
  dev: {
    default: 3000
  }
} as const

const locales = {
  default: 'ru'
} as const

const urls = {
  protocols,
  ports,
  locales,
  domains: {
    dev: {
      default: `localhost${ports.delimiter}${ports.dev.default}`
    },
    prod: {
      ipe: {
        default: 'pay.ipo.msk.ru'
      },
      mba: 'pay.moscow.mba',
      mip: 'pay.mip.institute',
      mipo: 'pay.mipo.msk.ru',
      mitu: 'pay.mitu.msk.ru',
      imo: 'pay.imo.msk.ru'
    }
  },
  front: {},
  back: {},
  external: {},
  anchors: {},
  params: {}
} as const

export default urls
