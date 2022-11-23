import AboutMore from '../components/About/AboutMore';
import CallOut from '../components/CallOut/CallOut';
import Footer from '../components/Footer/Footer';
import Service from '../components/Service/Service';
import Testimonials from '../components/Testimonials/Testimonials';
import About from './../components/About/About';
import Header from './../components/Header/Header';
export default function about(props) {
  return (
    <>
      <Header />
      <div className="container">
        <About />
        <Testimonials />
        <CallOut />
        <div className="mt-5">
          <AboutMore />
        </div>
        <Service data={props.data} onlyTitle={false} />
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
