import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './Service.module.css';

const ServiceFull = (props) => {
  const router = useRouter();
  return (
    <div
      className={`row ${classes.fullbg}`}
      style={{
        background: `url("https://akbrothersphotography.com/uploads/allimgs/${props.data.image22}")`,
      }}
    >
      {props.keys % 2 == 0 ? (
        <>
          <div className="col-md-6 align-self-center d-flex">
            <div className={classes.contentService}>
              <h3>{props.data.name}</h3>
              <p>{props.data.short_desp}</p>
              <Link href={`/service/${props.data.slug}`}>
                <a
                  className={`btn btn-dark ${
                    classes.customBtn
                  } ${'nav-link'} ${
                    router.pathname == '/service/[serviceid]'
                      ? 'active'
                      : ''
                  }`}
                >
                  Explore
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-6"></div>
        </>
      ) : (
        <>
          <div className="col-md-6"></div>
          <div className="col-md-6 align-self-center d-flex">
            <div className={classes.contentService}>
              <h3>{props.data.name}</h3>
              <p>{props.data.short_desp}</p>
              <Link href={`/service/${props.data.slug}`}>
                <a
                  className={`btn btn-dark ${
                    classes.customBtn
                  } ${'nav-link'} ${
                    router.pathname == '/service/[serviceid]'
                      ? 'active'
                      : ''
                  }`}
                >
                  Explore
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ServiceFull;
