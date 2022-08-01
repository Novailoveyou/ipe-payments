import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Button from '@mui/material/Button'

const PageHome: NextPage = () => {
  // console.log(host)
  return (
    <>
      PageHome
      <p>Testing mui</p>
      <Button variant='contained'>Hello</Button>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async context => {
//   return {
//     props: {
//       host: JSON.stringify(context)
//     }
//   }
// }

export default PageHome
