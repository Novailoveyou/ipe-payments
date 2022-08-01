import {
  TImgAlt,
  TImgHeight,
  TImgPriority,
  TImgSrc,
  TImgUnoptimized,
  TImgWidth
} from '@/types/index'

type TPropImgAlt = {
  alt?: TImgAlt
}

type TPropImgAltRequired = {
  alt: TImgAlt
}

type TPropImgHeight = {
  height?: TImgHeight
}

type TPropImgPriority = {
  priority?: TImgPriority
}

type TPropImgSrc = {
  src: TImgSrc
}

type TPropImgUnoptimized = {
  unoptimized?: TImgUnoptimized
}

type TPropImgWidth = {
  width?: TImgWidth
}

export type {
  TPropImgAlt,
  TPropImgAltRequired,
  TPropImgHeight,
  TPropImgPriority,
  TPropImgSrc,
  TPropImgUnoptimized,
  TPropImgWidth
}
