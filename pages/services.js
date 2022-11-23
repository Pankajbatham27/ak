import Services from '../components/Service/Services';
import Header from './../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Service from '../components/Service/Service';
import CallOut from '../components/CallOut/CallOut';
export default function about(props) {
  return (
    <>
      <Header />
      <div className="container">
        <Service data={props.data} onlyTitle={true} />
        <CallOut />
      </div>
      {/* <Services /> */}
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
