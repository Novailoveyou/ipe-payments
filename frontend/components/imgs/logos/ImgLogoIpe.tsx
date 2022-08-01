import stls from '@/styles/components/imgs/logos/ImgLogoIpe.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { ContextGeneral } from '@/context/index'
import { ImageContainer } from '@/components/layout'
import src from '@/public/assets/imgs/logos/ipe-logo-192.png'

type TImgLogoIpeProps = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgLogoIpe = ({ classNames, width, height }: TImgLogoIpeProps) => {
  const { located } = useContext(ContextGeneral)

  const translations = {
    alt: located?.en
      ? 'Institute of Professional Education'
      : 'Институт Профессионального Образования'
  }

  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={translations.alt}
      />
    </>
  )
}

export default ImgLogoIpe
