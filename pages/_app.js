import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        ></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          async
        ></script>

        <script
          src="https://code.jquery.com/jquery-3.6.0.js"
          async
        ></script>
        <script
          src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
          async
        ></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/css/lightslider.min.css"
        ></link>

        <script src="https://jhinichadariya.com/assets/front/lightslider.min.js"></script>

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        ></link>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
