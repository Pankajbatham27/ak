import AboutMore from '../components/About/AboutMore';
import CallOut from '../components/CallOut/CallOut';
import Footer from '../components/Footer/Footer';
import Service from '../components/Service/Service';
import Testimonials from '../components/Testimonials/Testimonials';
import About from './../components/About/About';
import Header from './../components/Header/Header';
export default function about() {
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
        <Service onlyTitle={false} />
      </div>
      <Footer />
    </>
  );
}
