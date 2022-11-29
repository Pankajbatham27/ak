import Link from 'next/link';
import { useEffect, useState } from 'react';
import classes from './Service.module.css';

const AllService = (props) => {
  return (
    <div className={`row`}>
      {props.data.map((item, key) => (
        <div key={key} className="col-md-4 col-6 gallery-grid">
          <div className={classes.serviceBlock}>
            {item.length != 0 ? (
              <figure>
                {props.onlyTitle && (
                  <img
                    src={`${process.env.apiURl}uploads/allimgs/${item.image22}`}
                    alt="gallery-post"
                    className="img-fluid"
                  />
                )}

                <figcaption>
                  <h2>{item.name}</h2>
                  <p>{item.short_desp}</p>
                  <Link href={`/service/${item.slug}`}>
                    View more
                  </Link>
                </figcaption>
              </figure>
            ) : (
              <div className={classes.loaderServcie}>Loading...</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default AllService;
