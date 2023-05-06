import { NextPage } from 'next'
import Head from 'next/head'

type SSGProps = {}

const SSG: NextPage<SSGProps> = () => {
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
      </main>
    </div>
  )
}

export default SSG