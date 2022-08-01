import stls from '@/styles/components/layout/Header.module.sass'
import { TPropClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextGeneral } from '@/context/index'
import { ImgLogoIpe } from '@/components/imgs'

type THeaderProps = TPropClassNames

const Header = ({ classNames }: THeaderProps) => {
  const { located } = useContext(ContextGeneral)

  const translations = {}

  return (
    <header
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      {located?.ipe && <ImgLogoIpe />}
    </header>
  )
}

export default Header
