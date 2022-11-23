import imagesLoaded from 'imagesloaded';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import classes from './Blogs.module.css';
import Loader from './../Loader/Loader';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loaderShow, setLoaderShow] = useState(true);

  async function getdata() {
    const response = await fetch(
      `${process.env.apiURl}apicontroller/blog`
    );

    const res = await response.json();
    console.log(res);
    setBlogs(res);
  }
  useEffect(() => {
    getdata();
  }, []);

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
  }, []);

  return (
    <div className="mian_div_blog">
      <Script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" />
      {loaderShow && <Loader />}
      <div class="grid">
        {blogs.map((item, key) => (
          <div key={key} class="grid-item">
            <div className={classes.insideBlog}>
              <img
                src={`${process.env.apiURl}uploads/allimgs/${item.blogpic}`}
                className="img-fluid"
              />
              <h3>{item.title}</h3>

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
