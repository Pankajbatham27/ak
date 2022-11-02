import AllService from './AllService';
import classes from './Service.module.css';
const Service = () => {
  return (
    <div className={classes.service_container}>
      <h2>Our Professional Work</h2>
      <div className="mt-3 mb-3">
        <AllService />
      </div>
    </div>
  );
};
export default Service;
