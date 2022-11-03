import { useEffect } from 'react';
import classes from './Testimonials.module.css';

const Testimonials = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      $('#lightSlider').lightSlider({
        item: 1,
        pager: false,
        auto: false,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <ul id="lightSlider" className={classes.lightSlider}>
        <li>
          <div className={classes.innerTest}>
            <p>
              Lorem ipsum Cupidatat quis pariatur anim. Lorem ipsum
              Excepteur amet adipisicing fugiat velit nisi. Lorem
              ipsum Cupidatat quis pariatur anim. Lorem ipsum
              Excepteur amet adipisicing fugiat velit nisi.
              <i className="fa fa-quote-left"></i>
            </p>
            <h3>First Slide</h3>
          </div>
        </li>
        <li>
          <div className={classes.innerTest}>
            <p>
              Lorem ipsum Cupidatat quis pariatur anim. Lorem ipsum
              Excepteur amet adipisicing fugiat velit nisi.
              <i className="fa fa-quote-left"></i>
            </p>
            <h3>First Slide</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Testimonials;
