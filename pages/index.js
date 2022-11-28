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
import Script from 'next/script';

export default function Home(props) {
  const [jqeuryUiReady, setJqeuryUiReady] = useState(false);
  const [jqeuryReady, setJqeuryReady] = useState(false);
  const [sliderReady, setSliderReady] = useState(false);

  useEffect(() => {
    if (jqeuryUiReady == true && jqeuryReady == true) {
      $('#showOnload').fadeIn();
      $('#slider').slider({
        value: 50,
        slide: function (event, ui) {
          if (ui.value < 4) {
            window.open(
              'https://api.whatsapp.com/send/?phone=8963957654&text=Hi+there&app_absent=0',
              '_blank'
            );
          }
        },
      });
    }
  }, [jqeuryUiReady, jqeuryReady]);

  useEffect(() => {
    if (sliderReady == true) {
      $('#lightSlider').lightSlider({
        item: 1,
        pager: false,
        auto: false,
        onSliderLoad: function () {
          $('#lightSlider').removeClass('cs-hidden');
        },
      });
    }
  }, [sliderReady]);

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.js"
        onReady={() => {
          console.log('test jquery loaded');
          setJqeuryReady(true);
        }}
      />
      <Script
        src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
        onReady={() => {
          console.log('call jquery loaded');
          setJqeuryUiReady(true);
        }}
      />

      <Script
        src="https://jhinichadariya.com/assets/front/lightslider.min.js"
        onReady={() => {
          console.log('slider jquery loaded');
          setSliderReady(true);
        }}
      />

      <Header />
      <div className="container">
        <Hero />

        <About data={props.aboutData.gettrecord} />
        <CallOut />
        <div className="mt-5">
          <Photowall />
        </div>
        <Service data={props.serviceData} onlyTitle={true} />
        <Testimonials data={props.aboutData.gettesto} />

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
