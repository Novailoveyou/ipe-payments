import stls from '@/styles/components/layout/Footer.module.sass'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TFooterProps = TPropClassNames

const Footer = ({ classNames }: TFooterProps) => {
  return (
    <footer
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      Footer
    </footer>
  )
}

export default Footer
