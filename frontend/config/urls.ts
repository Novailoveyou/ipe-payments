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

const domains = {
  dev: {
    // default: `localhost${ports.delimiter}${ports.dev.default}`
    default: 'localhost'
  },
  prod: {
    ipe: {
      default: 'pay.ipo.msk.ru'
    },
    mba: {
      default: 'pay.moscow.mba'
    },
    mip: {
      default: 'pay.mip.institute'
    },
    mipo: {
      default: 'pay.mipo.msk.ru'
    },
    mitu: {
      default: 'pay.mitu.msk.ru'
    },
    imo: {
      default: 'pay.imo.msk.ru'
    }
  }
} as const

const urls = {
  protocols,
  ports,
  locales,
  domains,
  front: {},
  back: {},
  external: {},
  anchors: {},
  params: {}
} as const

export default urls
