import { createContext, Dispatch, SetStateAction } from 'react'

type TContextGeneral = {
  hostname: string | null
  setHostname: Dispatch<SetStateAction<string | null>>
  isBrowser: boolean
  setIsBrowser: Dispatch<SetStateAction<boolean>>
}

const ContextGeneral = createContext<TContextGeneral>({
  hostname: '',
  setHostname: () => {},
  isBrowser: false,
  setIsBrowser: () => {}
})

export default ContextGeneral
