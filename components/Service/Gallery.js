import { useEffect, useState } from 'react';
import classes from './Service.module.css';
import Loader from './../Loader/Loader';

import imagesLoaded from 'imagesloaded';
import Script from 'next/script';
// import Masonry from 'masonry-layout';

const Gallery = (props) => {
  const [loaderShow, setLoaderShow] = useState(true);
  useEffect(() => {
    setLoaderShow(true);
    setTimeout(() => {
      imagesLoaded(
        document.querySelector('.grid'),
        function (instance) {
          var msnry = new Masonry('.grid', {
            // options
            itemSelector: '.grid-item',
          });
          setLoaderShow(false);
        }
      );
    }, 500);
  }, [props]);

  return (
    <div className="container">
      <Script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" />

      {loaderShow && <Loader />}

      <div
        id="animated-thumbnails"
        className={`grid ${classes.masonry} ${classes.allPost}`}
      >
        {props.serviceImage.map((item, key) => (
          <div
            data-sub-html={`<a href="/hashtag/${item.hashtag}">${item.hashtag}</a>`}
            key={key}
            href={`https://akbrothersphotography.com/uploads/gallery/${item.image}`}
            className="grid-item"
          >
            <img
              src={`https://akbrothersphotography.com/uploads/gallery/medium/${item.image}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
