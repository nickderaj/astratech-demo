import Head from 'next/head';
import About from '../components/About';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Navigation from '../components/Navigation';
import Technology from '../components/Technology';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AstraTech</title>
        <meta name="description" content="Sustainable Energy Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Navigation />
        <Hero />
        <About />
        <Features />
        <Highlights />
        <Technology />
      </main>

      <Footer />
    </div>
  );
}
