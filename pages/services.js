import Services from '../components/Service/Services';
import Header from './../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Service from '../components/Service/Service';
import CallOut from '../components/CallOut/CallOut';
export default function about() {
  return (
    <>
      <Header />
      <div className="container">
        <Service onlyTitle={true} />
        <CallOut />
      </div>
      {/* <Services /> */}
      <Footer />
    </>
  );
}
