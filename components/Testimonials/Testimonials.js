import Script from 'next/script';
import { useEffect, useState } from 'react';
import classes from './Testimonials.module.css';

const Testimonials = (props) => {
  const [sliderReady, setSliderReady] = useState(false);

  useEffect(() => {
    if (sliderReady == true) {
      $('#lightSlider').lightSlider({
        item: 1,
        pager: false,
        auto: false,
        onSliderLoad: function () {
          $('#lightSlider').removeClass('cs-hidden');
        },
      });
    }
  }, [sliderReady]);

  return (
    <div className="">
      <Script
        src="https://jhinichadariya.com/assets/front/lightslider.min.js"
        onReady={() => {
          console.log('slider jquery loaded');
          setSliderReady(true);
        }}
      />

      <ul
        id="lightSlider"
        className={`${classes.lightSlider} cs-hidden`}
      >
        {props.data.map((item, key) => (
          <li key={key}>
            <div className={classes.innerTest}>
              <p>
                {item.content}
                <i className="fa fa-quote-left"></i>
              </p>
              <h3>
                {item.title}
                <br />
                <small className={classes.font12}>
                  ({item.designation})
                </small>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Testimonials;
