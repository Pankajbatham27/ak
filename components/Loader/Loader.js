import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.fullbg}>
      <span className={classes.loader}></span>
    </div>
  );
};
export default Loader;
