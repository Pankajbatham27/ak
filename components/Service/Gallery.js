import Link from 'next/link';
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
            data-sub-html={`<a href="/hashtag/${item.hashtag}">${item.hashtag}</a>`}
            key={key}
            href={`https://akbrothersphotography.com/uploads/gallery/${item.image}`}
          >
            <div className="grid-item-holder hov_zoom">
              <img
                src={`https://akbrothersphotography.com/uploads/gallery/medium/${item.image}`}
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
