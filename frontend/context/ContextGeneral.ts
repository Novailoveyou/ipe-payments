import { TContextGeneral } from '@/types/index'
import { createContext } from 'react'

const ContextGeneral = createContext<TContextGeneral>({
  hostname: null,
  setHostname: () => {},
  isBrowser: false,
  setIsBrowser: () => {},
  located: null,
  setLocated: () => {}
})

export default ContextGeneral
