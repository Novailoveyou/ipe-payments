import stls from '@/styles/components/layout/Main.module.sass'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TMainProps = TPropClassNames & TPropChildren

const Main = ({ classNames, children }: TMainProps) => {
  return (
    <main
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      {children}
    </main>
  )
}

export default Main
