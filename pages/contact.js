import Head from 'next/head';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from './../components/Header/Header';
export default function contact(props) {
  return (
    <>
      <Head>
        <title>
          Contact with WedKnox for photography inquiry. WhatsApp |
          Contact Form
        </title>
      </Head>
      <Header />
      <div className="container">
        <Contact data={props.contactData} />

        <div className="mt-5">
          <iframe
            src={props.contactData.map}
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.apiURl}apicontroller/contact`
  );
  const data = await response.json();

  return {
    props: { contactData: data },
  };
}
