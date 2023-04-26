import type { AppProps } from 'next/app'

import Layout from '@/components/Layout'
// import Modal from '@/components/Modal' 
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Modal actionLabel ="Submit" title="New"/> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
 