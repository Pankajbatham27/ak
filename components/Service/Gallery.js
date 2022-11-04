import classes from './Service.module.css';
import Script from 'next/script';
import { useEffect } from 'react';
const Gallery = () => {
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
        <article href="https://res.cloudinary.com/professional-clickers/image/upload/allimgs/21260">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/21260"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/272600">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/272600"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/321110">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/321110"
              alt=""
            />
          </div>
        </article>

        <article href="hhttps://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/85330">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/85330"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/202290">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/202290"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/233860">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/233860"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/3950">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/3950"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/139430">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/139430"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/221450">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/221450"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/84460">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/84460"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/18650">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/18650"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/274470">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/274470"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/63080">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/63080"
              alt=""
            />
          </div>
        </article>

        <article href="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/262400">
          <div className="grid-item-holder hov_zoom">
            <img
              src="https://res.cloudinary.com/professional-clickers/image/upload/c_scale,w_400/v1/allimgs/262400"
              alt=""
            />
          </div>
        </article>
      </div>
    </div>
  );
};
export default Gallery;
