import { useEffect, useState } from 'react';
import Gallery from '../../components/Service/Gallery';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import { useRouter } from 'next/router';
import lightGallery from 'lightgallery';

const ServiceDetails = (props) => {
  const router = useRouter();

  const [serviceImage, setServiceImage] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    setServiceImage(props.data.getallImages);
  }, [props]);

  useEffect(() => {
    setTotalPage(props.data.total_pages);

    setTimeout(() => {
      const lg = document.getElementById('animated-thumbnails');
      var plugin = lightGallery(lg, {
        // plugins: [lgThumbnail],
        toggleThumb: true,
        speed: 500,
        // thumbnail: true,
        download: false,
      });
      setSlider(plugin);
    }, 1000);
  }, []);

  async function getMoreData(page) {
    const response = await fetch(
      `${process.env.apiURl}apicontroller/full_details/${router.query.serviceid}?page=` +
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

  return (
    <>
      <Header />
      {/* <Script src="https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.3/lightgallery.umd.js" /> */}
      <Gallery serviceImage={serviceImage} />

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

export async function getServerSideProps(context) {
  // const response = await fetch(
  //   `https://akbrothersphotography.com/apicontroller/full_details/${context.params.blogid}?page=` +
  //     page
  // );
  // const data = await response.json();

  const response = await fetch(
    `${process.env.apiURl}apicontroller/full_details/${context.params.serviceid}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
}

export default ServiceDetails;
