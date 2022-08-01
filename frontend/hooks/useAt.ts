import { useRouter } from 'next/router'

const useAt = () => {
  const { pathname, asPath, locale, query } = useRouter()

  const router = useRouter()

  console.log(router)

  // const getSplitedPath = pathname
  //   .split('/')
  //   .filter(item => item !== '' && item !== '[url]')

  // const getProgramTitle = asPath.split('/')[4]

  return {
    // ipe
    ru: locale === 'ru',
    kz:
      locale === 'kz' ||
      locale === 'kk' ||
      locale === 'kk_KZ' ||
      query.locale === 'kz' ||
      query.locale === 'kk' ||
      query.locale === 'kk_KZ',
    uz:
      locale === 'uz' ||
      locale === 'uz_UZ' ||
      query.locale === 'uz' ||
      query.locale === 'uz_UZ'
  }
}

export default useAt
