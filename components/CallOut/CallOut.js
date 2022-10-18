import { useEffect } from 'react';
import classes from './CallOut.module.css';
import sliderImage from './../../public/images/img_524387.png';

const CallOut = () => {
  useEffect(() => {
    // var handle = $('#custom-handle');
    // $('#slider').slider({
    //   value: 50,
    //   slide: function (event, ui) {
    //     if (ui.value < 4) {
    //       window.open(
    //         'https://api.whatsapp.com/send/?phone=8963957654&text=Hi+there&app_absent=0',
    //         '_blank'
    //       );
    //     }
    //   },
    // });
  }, []);

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
