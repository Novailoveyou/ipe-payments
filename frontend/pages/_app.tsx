import type { AppProps } from 'next/app'
import {
  TContextGeneralIsBrowser,
  TContextGeneralHostname,
  TContextGeneralLocated,
  TContextGeneral
} from '@/types/index'
import { useEffect, useState } from 'react'
import { urls, ui } from '@/config/index'
import { ContextGeneral } from '@/context/index'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [isBrowser, setIsBrowser] = useState<TContextGeneralIsBrowser>(false)
  const [hostname, setHostname] = useState<TContextGeneralHostname>(null)
  const [located, setLocated] = useState<TContextGeneralLocated>(null)
  const [company, setCompany] = useState(null)

  useEffect(() => setIsBrowser(true), [])
  useEffect(() => {
    isBrowser && setHostname(window.location.hostname)
  }, [isBrowser])

  useEffect(() => {
    isBrowser &&
      setLocated({
        ipe: hostname === urls.domains.prod.ipe.default,
        mba: hostname === urls.domains.prod.mba.default,
        mip: hostname === urls.domains.prod.mip.default,
        mipo: hostname === urls.domains.prod.mipo.default,
        mitu: hostname === urls.domains.prod.mitu.default,
        imo: hostname === urls.domains.prod.imo.default
      })
  }, [isBrowser, hostname])

  // console.log(urls)
  // console.log(ui)
  return (
    <>
      <ContextGeneral.Provider
        value={{
          hostname,
          setHostname,
          isBrowser,
          setIsBrowser,
          located,
          setLocated
        }}>
        <Component {...pageProps} />
      </ContextGeneral.Provider>
    </>
  )
}

export default App
