import stls from '@/styles/components/layout/Header.module.sass'
import styled from 'styled-components'
import { TPropClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextGeneral } from '@/context/index'
import { ImgLogoIpe } from '@/components/imgs'

type THeaderProps = TPropClassNames

type TContainer = {
  readonly backgroundColor?: string
}

const Container = styled.div<TContainer>`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
`

const Header = ({ classNames }: THeaderProps) => {
  const { located } = useContext(ContextGeneral)

  const translations = {}

  return (
    <header
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Container backgroundColor='red'>
        {located?.ipe && <ImgLogoIpe />}
      </Container>
    </header>
  )
}

export default Header
