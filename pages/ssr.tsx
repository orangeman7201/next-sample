import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

type SSRProps = {
  message: string
}

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>hogehoge</title>
        <link rel='icon' href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはSSRで生成されました。
        </p>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}に更新されました。`

  console.log(message)

  return {
    props: {
      message,
    },
  }
}

export default SSR