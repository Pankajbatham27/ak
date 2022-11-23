import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Service from '../components/Service/Service';
import Testimonials from '../components/Testimonials/Testimonials';
import Video from '../components/Video/Video';
import styles from '../styles/Home.module.css';
import About from './../components/About/About';
import CallOut from './../components/CallOut/CallOut';
import Header from './../components/Header/Header';
import Hero from './../components/Hero/Hero';

export default function Home(props) {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />

        <About />
        <CallOut />
        <Service data={props.data} onlyTitle={true} />
        <Testimonials />
        {/* <Video /> */}
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.apiURl}apicontroller/all_services`
  );
  const data = await response.json();

  return {
    props: { data },
  };
}
