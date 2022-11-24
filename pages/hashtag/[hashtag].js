import { useEffect, useState } from 'react';
import Gallery from '../../components/Service/Gallery';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import { useRouter } from 'next/router';
import lightGallery from 'lightgallery';

// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

// import Script from 'next/script';
const HashtagDetails = (props) => {
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
      `${process.env.apiURl}apicontroller/hashtag/${router.query.hashtag}?page=` +
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
  const response = await fetch(
    `${process.env.apiURl}apicontroller/hashtag/${context.params.hashtag}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
}
export default HashtagDetails;
