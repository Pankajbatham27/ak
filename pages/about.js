import AboutMore from '../components/About/AboutMore';
import CallOut from '../components/CallOut/CallOut';
import Footer from '../components/Footer/Footer';
import Service from '../components/Service/Service';
import Testimonials from '../components/Testimonials/Testimonials';
import About from './../components/About/About';
import Header from './../components/Header/Header';
export default function about(props) {
  console.log(props);
  return (
    <>
      <Header />
      <div className="container">
        <About data={props.aboutData.gettrecord} />
        <Testimonials />
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
