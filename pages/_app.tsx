import '../styles/globals.css';
import type { AppProps } from 'next/app';
import BackgroundLine from '@components/background-line';
import Header from '@components/headers/header';
import Footer from '@components/headers/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black text-white">
      <BackgroundLine />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
