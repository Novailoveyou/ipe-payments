import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { urls, ui } from '@/config/index'
import { ContextGeneral } from '@/context/index'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [hostname, setHostname] = useState<string | null>(null)
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => setIsBrowser(true), [])
  useEffect(() => {
    isBrowser && setHostname(window.location.host)
  }, [isBrowser])

  // console.log(urls)
  // console.log(ui)
  console.log(hostname)
  return (
    <>
      <ContextGeneral.Provider
        value={{
          hostname,
          setHostname,
          isBrowser,
          setIsBrowser
        }}>
        <Component {...pageProps} />
      </ContextGeneral.Provider>
    </>
  )
}

export default App
