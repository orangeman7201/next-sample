import { GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'

type SSGProps = {
  message: string
}

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>SSG</title>
        <link rel='icon' href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはSSGで生成されました。
        </p>
        <p>
          {message}
        </p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp =  new Date().toLocaleString()
  const message = `${timestamp}に更新されました。`

  console.log(message)
  console.log(context.locales)
  return {
    props: {
      message
    }
  }
}

export default SSG