import imagesLoaded from 'imagesloaded';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import classes from './Blogs.module.css';
import Loader from './../Loader/Loader';
import Link from 'next/link';

const Blogs = (props) => {
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
    <div className="mian_div_blog">
      <Script
        src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
        onReady={() => {
          setScriptMasonry(true);
        }}
      />
      {loaderShow && <Loader />}
      <div className="grid">
        {props.data.map((item, key) => (
          <div key={key} className="grid-item">
            <div className={classes.insideBlog}>
              <img
                src={`${process.env.apiURl}uploads/allimgs/${item.blogpic}`}
                className="img-fluid"
              />
              <Link href={`/blog/${item.slug}`}>
                <h3>{item.title}</h3>
              </Link>

              <p>
                {item.content
                  .replace(/<\/?[^>]+(>|$)/g, '')
                  .substring(0, 150)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
