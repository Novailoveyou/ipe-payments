import { Dispatch, SetStateAction } from 'react'

type TContextGeneralIsBrowser = boolean
type TContextGeneralHostname = string | null
type TContextGeneralLocated = {
  ipe: boolean
  mba: boolean
  mip: boolean
  mipo: boolean
  mitu: boolean
  imo: boolean
} | null

type TContextGeneral = {
  isBrowser: TContextGeneralIsBrowser
  setIsBrowser: Dispatch<SetStateAction<TContextGeneralIsBrowser>>
  hostname: TContextGeneralHostname
  setHostname: Dispatch<SetStateAction<TContextGeneralHostname>>
  located: TContextGeneralLocated
  setLocated: Dispatch<SetStateAction<TContextGeneralLocated>>
}

export type {
  TContextGeneralHostname,
  TContextGeneralIsBrowser,
  TContextGeneralLocated,
  TContextGeneral
}
