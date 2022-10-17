import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>NextJS + Tailwind</title>
    </Head>
      <div className='w-full min-h-screen bg-gray-300 flex items-center justify-center'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp;
