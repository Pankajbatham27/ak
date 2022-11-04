import { useEffect } from 'react';
import classes from './CallOut.module.css';
import sliderImage from './../../public/images/img_524387.png';

const CallOut = () => {
  return (
    <div className="callOut">
      <div id="slider" className={classes.slideHandle}>
        <div
          id="custom-handle"
          className={`${classes.customHandle} ui-slider-handle`}
        >
          <img src={sliderImage.src} />
        </div>
      </div>
    </div>
  );
};

export default CallOut;
