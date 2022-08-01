import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

const PageHome: NextPage<{ host: any }> = ({ host }) => {
  // const at = useAt()
  // console.log(host)
  return <>PageHome</>
}

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      host: JSON.stringify(context)
    }
  }
}

export default PageHome
