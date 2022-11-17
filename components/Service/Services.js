import { useEffect, useState } from 'react';
import classes from './Service.module.css';
import ServiceFull from './ServiceFull';

const Services = () => {
  const [services, setServices] = useState([]);

  async function getdata() {
    const response = await fetch(
      'https://akbrothersphotography.com/apicontroller/all_services'
    );
    const res = await response.json();
    console.log(res);
    setServices(res);
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <section className={classes.all_services}>
      {services.map((item, key) => (
        <ServiceFull key={key} keys={key} data={item} />
      ))}
    </section>
  );
};
export default Services;
