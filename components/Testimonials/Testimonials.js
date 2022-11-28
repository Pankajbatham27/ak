import Script from 'next/script';
import { useEffect, useState } from 'react';
import classes from './Testimonials.module.css';

const Testimonials = (props) => {
  return (
    <div className="">
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
