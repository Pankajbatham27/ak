import clasess from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={clasess.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className={clasess.emailPhone}>
              <li>© Pankaj Batham 2022 . ALL RIGHTS RESERVED.</li>
              <li>
                <a href="#">YOURMAIL@DOMAIN.COM</a>
              </li>
              <li>
                <a href="#">+91 987-654-3210</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className={clasess.socialicons}>
              <li>
                <i className="fa fa-facebook">facebook</i>
              </li>
              <li>
                <i className="fa fa-facebook">facebook</i>
              </li>
              <li>
                <i className="fa fa-facebook">facebook</i>
              </li>
              <li>
                <i className="fa fa-facebook">facebook</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
