import { useEffect, useState } from 'react';
import classes from './CallOut.module.css';
import sliderImage from './../../public/images/img_524387.png';
import Script from 'next/script';

const CallOut = () => {
  return (
    <>
      <div className={classes.callOut} id="showOnload">
        <div id="slider" className={classes.slideHandle}>
          <div
            id="custom-handle"
            className={`${classes.customHandle} ui-slider-handle`}
          >
            <img src={sliderImage.src} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CallOut;
