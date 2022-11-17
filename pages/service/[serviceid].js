import { useEffect, useState } from 'react';
import Gallery from '../../components/Service/Gallery';
import Header from './../../components/Header/Header';

const ServiceDetails = () => {
  const [serviceImage, setServiceImage] = useState([]);

  async function getdata() {
    const response = await fetch(
      'https://akbrothersphotography.com/apicontroller/full_details/wedding-photography'
    );
    const res = await response.json();
    setServiceImage(res);
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Header />
      <Gallery serviceImage={serviceImage} />
    </>
  );
};
export default ServiceDetails;
