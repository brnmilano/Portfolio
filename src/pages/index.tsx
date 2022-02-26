import Head from 'next/head';
import HomeApp from 'App/Pages/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Milano | Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeApp />
    </>
  )
}
