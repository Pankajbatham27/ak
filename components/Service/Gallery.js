import classes from './Service.module.css';
import Script from 'next/script';
import { useEffect } from 'react';
import Service from './Service';
const Gallery = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      lightGallery(document.getElementById('animated-thumbnails'), {
        thumbnail: true,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <Script src="https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.3/lightgallery.umd.js" />

      <div
        id="animated-thumbnails"
        className={`${classes.masonry} ${classes.allPost}`}
      >
        {props.serviceImage.map((item, key) => (
          <article
            key={key}
            href={`https://akbrothersphotography.com/uploads/gallery/medium/${item.image}`}
          >
            <div className="grid-item-holder hov_zoom">
              <img
                src={`https://akbrothersphotography.com/uploads/gallery/${item.image}`}
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
