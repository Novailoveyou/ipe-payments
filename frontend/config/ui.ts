import {
  TGeneralColor,
  TGeneralColorKeys,
  TGeneralBreakPointKeys,
  TGeneralDataUrl
} from '@/types/index'
import Colors from '@/styles/config/Colors.module.sass'
import BreakPoints from '@/styles/config/BreakPoints.module.sass'

type TColors = {
  [key in TGeneralColorKeys]: TGeneralColor
}

type TBreakPoints<T = string | number> = {
  [key in TGeneralBreakPointKeys]: T
}

const colors = Colors as TColors
const breakPoints = BreakPoints as TBreakPoints<string>

const delimiters = {
  id: '#',
  className: '.'
} as const

const ui = {
  colors: { ...colors, theme: colors.alpha },
  breakPoints: {
    phone: +breakPoints.phone.slice(0, -2),
    tablet: +breakPoints.tablet.slice(0, -2),
    laptop: +breakPoints.laptop.slice(0, -2)
  } as TBreakPoints<number>,
  base64pixel:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=' as TGeneralDataUrl,
  selectors: {
    delimiters,
    ids: {
      header: 'header',
      main: 'main',
      footer: 'footer',
      googleTagManager: 'google-tag-manager'
    },
    classNames: {}
  }
} as const

export default ui
