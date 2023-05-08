import { GetStaticPaths, NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

type ISRProps = {
  message: string
}

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>ISR</title>
        <link rel='icon' href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはISRで生成されました。
        </p>
        <p>{ message }</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}に更新されました。`

  return {
    props: {
      message,
    },
    revalidate: 10,
  }
}

export default ISR