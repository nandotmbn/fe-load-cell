import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import HomeViews from '@/views/home/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pascasarjana PENS</title>
        <meta name="description" content="Pascasarjana Politeknik Elektronika Negeri Surabaya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
				<HomeViews />
			</MainLayout>
    </>
  )
}
