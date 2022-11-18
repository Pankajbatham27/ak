import { useEffect } from 'react';
import classes from './Service.module.css';

const Gallery = (props) => {
  return (
    <div className="container">
      <div
        id="animated-thumbnails"
        className={`${classes.masonry} ${classes.allPost}`}
      >
        {props.serviceImage.map((item, key) => (
          <article
            key={key}
            href={`http://localhost/tune/uploads/gallery/${item.image}`}
          >
            <div className="grid-item-holder hov_zoom">
              <img
                src={`http://localhost/tune/uploads/gallery/medium/${item.image}`}
                alt=""
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
