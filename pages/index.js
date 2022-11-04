import Head from 'next/head';
import Image from 'next/image';
import Service from '../components/Service/Service';
import Testimonials from '../components/Testimonials/Testimonials';
import Video from '../components/Video/Video';
import styles from '../styles/Home.module.css';
import About from './../components/About/About';
import CallOut from './../components/CallOut/CallOut';
import Header from './../components/Header/Header';
import Hero from './../components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <About />
        <CallOut />
        <Service />
        <Testimonials />
        {/* <Video /> */}
      </div>
    </>
  );
}
