import type { AppProps } from 'next/app'
import { urls, ui } from '@/config/index'
import { useAt } from '@/hooks/index'

const App = ({ Component, pageProps, router }: AppProps) => {
  const at = useAt()

  // console.log(urls)
  // console.log(ui)
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
