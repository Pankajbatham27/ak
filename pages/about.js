import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import AboutMore from '../components/About/AboutMore';
import CallOut from '../components/CallOut/CallOut';
import Footer from '../components/Footer/Footer';
import Service from '../components/Service/Service';
import Testimonials from '../components/Testimonials/Testimonials';
import About from './../components/About/About';
import Header from './../components/Header/Header';
export default function AboutPage(props) {
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
          setJqeuryReady(true);
        }}
      />
      <Script
        src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
        onReady={() => {
          setJqeuryUiReady(true);
        }}
      />

      <Script
        src="https://jhinichadariya.com/assets/front/lightslider.min.js"
        onReady={() => {
          setSliderReady(true);
        }}
      />
      <Head>
        <title>Know More about WedKnox</title>
      </Head>

      <Header />
      <div className="container">
        <About data={props.aboutData.gettrecord} />
        <Testimonials data={props.aboutData.gettesto} />
        <CallOut />
        <div className="mt-5">
          <AboutMore data={props.aboutData.gettrecord.footertxt} />
        </div>
        <Service data={props.serviceData} onlyTitle={false} />
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
    props: { serviceData: data, aboutData: data1 },
  };
}
