import AllService from './AllService';
import classes from './Service.module.css';
const Service = (props) => {
  return (
    <div className={classes.service_container}>
      {props.onlyTitle && <h2>Our Professional Work</h2>}
      <div className="mt-3 mb-3">
        <AllService onlyTitle={props.onlyTitle} />
      </div>
    </div>
  );
};
export default Service;
