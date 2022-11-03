import classes from './Header.module.css';
import Script from 'next/script';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={classes.header}>
      <Script src="https://code.jquery.com/jquery-3.6.0.js" />
      <Script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" />
      <Script src="https://jhinichadariya.com/assets/front/lightslider.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
      <div className={classes['header-logo']}>
        <img
          src="https://themes.pixelwars.org/photographer-html/images/site/logo.png"
          alt="ak brothers photography logo"
        />
      </div>
      <div className={classes.navCenter}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
                <Link href="#">
                  <a className="nav-link">Contact</a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
