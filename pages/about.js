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
      </div>
    </>
  );
}
