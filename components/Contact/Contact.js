import classes from './Contact.module.css';

const Contact = () => {
  return (
    <section className={classes.contactForm}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={classes.heading}>REACH ME</div>
          </div>
          <div className="col-md-3">based in Los Angeles, USA</div>
          <div className="col-md-3">Tel : +123 456 78900</div>
          <div className="col-md-3">johndoe@gmail.com</div>
          <div className="col-md-3">Freelance Available</div>

          <div className={classes.heading}>OR MAIL ME!</div>
          <div className="col-md-6">
            <div className={`form-group ${classes.marginContact}`}>
              <label>NAME</label>
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="col-md-6">
            <div className={`form-group ${classes.marginContact}`}>
              <label>MOBILE</label>
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="col-md-12">
            <div className={`form-group ${classes.marginContact}`}>
              <label>MESSAGE</label>
              <textarea rows="8" className="form-control" />
            </div>
          </div>
          <div className="col-md-12">
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
