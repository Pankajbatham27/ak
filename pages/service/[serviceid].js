import { useEffect, useState } from 'react';
import Gallery from '../../components/Service/Gallery';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
const ServiceDetails = () => {
  const [serviceImage, setServiceImage] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  async function getdata() {
    const response = await fetch(
      'https://akbrothersphotography.com/apicontroller/full_details/wedding-photography'
      // 'http://localhost/tune/apicontroller/full_details/wedding-photography'
    );
    const res = await response.json();

    setServiceImage(res.getallImages);

    setTotalPage(res.total_pages);
  }

  async function getMoreData(page) {
    // const data = { page: page };
    const response = await fetch(
      'https://akbrothersphotography.com/apicontroller/full_details/wedding-photography?page=' +
        page
      // 'http://localhost/tune/apicontroller/full_details/wedding-photography?page=' +
    );
    const res = await response.json();

    setServiceImage((serviceImage) => [
      ...serviceImage,
      ...res.getallImages,
    ]);

    setPage((page) => page + 1);

    // setTotalPage(res.total_pages);
  }

  useEffect(() => {
    getdata();
  }, []);

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
export default ServiceDetails;
