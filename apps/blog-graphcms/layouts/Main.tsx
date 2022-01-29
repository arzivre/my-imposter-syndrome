import Head from 'next/head'
import { Header } from '../components'

type MainProps = {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Blog - Graphcms</title>
      </Head>
      <main className='bg-gradient-to-r from-red-300 via-blue-500 to-purple-600'>
      <Header />
        {children}
      </main>
    </>
  )
}
