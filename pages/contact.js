import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from './../components/Header/Header';
export default function about() {
  return (
    <>
      <Header />
      <div className="container">
        <Contact />

        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14661.659551977067!2d77.4243175!3d23.2643698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81f3433cb0800576!2sAK%20BROTHERS%20PHOTOGRAPHY!5e0!3m2!1sen!2sin!4v1667815911162!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
