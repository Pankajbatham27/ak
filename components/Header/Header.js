import classes from './Header.module.css';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <Script src="https://code.jquery.com/jquery-3.6.0.js" />
      <Script
        src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
        onLoad={() => {
          $('#slider').slider({
            value: 50,
            slide: function (event, ui) {
              if (ui.value < 4) {
                window.open(
                  'https://api.whatsapp.com/send/?phone=8963957654&text=Hi+there&app_absent=0',
                  '_blank'
                );
              }
            },
          });
        }}
      />
      <Script
        src="https://jhinichadariya.com/assets/front/lightslider.min.js"
        onLoad={() => {
          $('#lightSlider').lightSlider({
            item: 1,
            pager: false,
            auto: false,
          });
        }}
      />
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
                <Link href="#">
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
