import { useEffect, useState } from 'react';
import Gallery from '../../components/Service/Gallery';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import { useRouter } from 'next/router';
import lightGallery from 'lightgallery';

// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

// import Script from 'next/script';
const ServiceDetails = () => {
  const [serviceImage, setServiceImage] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [slider, setSlider] = useState();

  const router = useRouter();

  async function getdata() {
    const response = await fetch(
      // 'https://akbrothersphotography.com/apicontroller/full_details/wedding-photography'
      `https://akbrothersphotography.com/apicontroller/full_details/` +
        router.query.serviceid
    );
    const res = await response.json();

    setServiceImage(res.getallImages);

    setTotalPage(res.total_pages);

    setTimeout(() => {
      const lg = document.getElementById('animated-thumbnails');
      var plugin = lightGallery(lg, {
        // plugins: [lgThumbnail],
        toggleThumb: true,
        speed: 500,
        preload: 3,
        // thumbnail: true,
        download: false,
      });
      setSlider(plugin);
    }, 1000);
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {

  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [serviceImage]);

  async function getMoreData(page) {
    // const data = { page: page };
    const response = await fetch(
      // 'https://akbrothersphotography.com/apicontroller/full_details/wedding-photography?page=' +
      //   page
      `https://akbrothersphotography.com/apicontroller/full_details/${router.query.serviceid}?page=` +
        page
    );
    const res = await response.json();

    setServiceImage((serviceImage) => [
      ...serviceImage,
      ...res.getallImages,
    ]);

    setPage((page) => page + 1);

    setTimeout(() => {
      slider.refresh();
    }, 1000);
  }

  useEffect(() => {
    if (router.query.serviceid) {
      getdata();
    }
  }, [router.query.serviceid]);

  return (
    <>
      <Header />
      {/* <Script src="https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.3/lightgallery.umd.js" /> */}
      <Gallery slider={slider} serviceImage={serviceImage} />

      {totalPage > page ? (
        <div className="d-flex justify-content-center">
          <button
            onClick={() => getMoreData(page)}
            className="btn btn-dark "
          >
            Get More
          </button>
        </div>
      ) : (
        ''
      )}
      <Footer />
    </>
  );
};
export default ServiceDetails;
