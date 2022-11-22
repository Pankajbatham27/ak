import { useEffect } from 'react';
import classes from './Service.module.css';

import imagesLoaded from 'imagesloaded';
import Script from 'next/script';
// import Masonry from 'masonry-layout';

const Gallery = (props) => {
  useEffect(() => {
    setTimeout(() => {
      imagesLoaded(
        document.querySelector('.grid'),
        function (instance) {
          var msnry = new Masonry('.grid', {
            // options
            itemSelector: '.grid-item',
          });
        }
      );
    }, 700);
  }, [props]);

  return (
    <div className="container">
      {/* <Script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js" /> */}
      <Script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" />
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
