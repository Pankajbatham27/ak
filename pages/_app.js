import Head from 'next/head';
import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

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
          href="https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.3/css/lightgallery.css"
          rel="stylesheet"
        ></link>

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/css/lightslider.min.css"
          rel="stylesheet"
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

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        ></link>
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
