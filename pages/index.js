import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import About from './components/About/About';
import CallOut from './components/CallOut/CallOut';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <About />
        <CallOut />
      </div>
    </>
  );
}
