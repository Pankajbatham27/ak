import { useEffect, useState } from 'react';
import classes from './Service.module.css';
import Loader from './../Loader/Loader';

import imagesLoaded from 'imagesloaded';
import Script from 'next/script';
// import Masonry from 'masonry-layout';

const Gallery = (props) => {
  const [loaderShow, setLoaderShow] = useState(true);
  const [scriptMasonry, setScriptMasonry] = useState(false);

  useEffect(() => {
    setLoaderShow(true);

    if (scriptMasonry == true) {
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
    }
  }, [props, scriptMasonry]);

  return (
    <>
      {loaderShow && <Loader />}
      <div className="container">
        <Script
          src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
          onReady={() => {
            setScriptMasonry(true);
          }}
        />
        <div
          id="animated-thumbnails"
          className={`grid ${classes.masonry} ${classes.allPost}`}
        >
          {props.serviceImage.map((item, key) => (
            <div
              data-sub-html={item.hashtag
                .split(',')
                .map(
                  (item1, key) =>
                    `<a href="/hashtag/${item1}">${item1}</a>`
                )}
              key={key}
              href={`${process.env.apiURl}uploads/gallery/${item.image}`}
              className="grid-item"
            >
              <img
                src={`${process.env.apiURl}uploads/gallery/medium/${item.image}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Gallery;
