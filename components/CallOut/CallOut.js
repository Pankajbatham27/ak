import { useEffect, useState } from 'react';
import classes from './CallOut.module.css';
import sliderImage from './../../public/images/img_524387.png';
import Script from 'next/script';

const CallOut = () => {
  const [jqeuryUiReady, setJqeuryUiReady] = useState(false);

  useEffect(() => {
    if (jqeuryUiReady == true) {
      $('#showOnload').fadeIn();
      $('#slider').slider({
        value: 50,
        slide: function (event, ui) {
          if (ui.value < 4) {
            window.open(
              'https://api.whatsapp.com/send/?phone=8963957654&text=Hi+there&app_absent=0',
              '_blank'
            );
          }
        },
      });
    }
  }, [jqeuryUiReady]);

  return (
    <>
      <Script
        src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
        onReady={() => {
          console.log('call jquery loaded');
          setJqeuryUiReady(true);
        }}
      />
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
