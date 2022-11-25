import classes from './Header.module.css';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from './../../public/images/logo.png';
const Header = () => {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
      <div className={classes['header-logo']}>
        <Link href="/">
          <img
            src={logo.src}
            alt="ak brothers photography logo"
            height={128}
          />
        </Link>
      </div>
      <div className={classes.navCenter}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link href="/">
                  <a
                    className={`${'nav-link'} ${
                      router.pathname == '/' ? 'active' : ''
                    }`}
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className={`${'nav-link'} ${
                      router.pathname == '/about' ? 'active' : ''
                    }`}
                  >
                    About
                  </a>
                </Link>
                <Link href="/services">
                  <a
                    className={`${'nav-link'} ${
                      router.pathname == '/services' ? 'active' : ''
                    }`}
                  >
                    Services
                  </a>
                </Link>
                <Link href="/blogs">
                  <a
                    className={`${'nav-link'} ${
                      router.pathname == '/blogs' ? 'active' : ''
                    }`}
                  >
                    Blogs
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    className={`${'nav-link'} ${
                      router.pathname == '/contact' ? 'active' : ''
                    }`}
                  >
                    Contact
                  </a>
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
