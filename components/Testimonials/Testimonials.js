import { useEffect } from 'react';
import classes from './Testimonials.module.css';

const Testimonials = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      $('#lightSlider').lightSlider({
        item: 1,
        pager: false,
        auto: false,
        onSliderLoad: function () {
          $('#lightSlider').removeClass('cs-hidden');
        },
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
