import { Footer, Navbar } from '@/components/elements';
import '@/styles/globals.css';
import { Inter, Manrope } from '@next/font/google';
import { useRouter } from 'next/router';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className={`${inter.variable} ${manrope.variable}`}>
      {router.asPath != '/' && <Navbar />}
      <Component {...pageProps} />
      {router.asPath != '/' && <Footer />}
    </div>
  );
}
