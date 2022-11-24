import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Service from '../components/Service/Service';
import Testimonials from '../components/Testimonials/Testimonials';
import Video from '../components/Video/Video';
import styles from '../styles/Home.module.css';
import About from './../components/About/About';
import CallOut from './../components/CallOut/CallOut';
import Header from './../components/Header/Header';
import Hero from './../components/Hero/Hero';
import Photowall from '../components/Photowall/Photowall';

export default function Home(props) {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />

        <About data={props.aboutData.gettrecord} />
        <CallOut />
        <Service data={props.serviceData} onlyTitle={true} />
        <Testimonials data={props.aboutData.gettesto} />
        <Photowall />
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

  const response1 = await fetch(
    `${process.env.apiURl}apicontroller/about`
  );
  const data1 = await response1.json();

  return {
    props: {
      serviceData: data,
      aboutData: data1,
    },
  };
}
