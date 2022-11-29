import classes from './Contact.module.css';

const Contact = (props) => {
  return (
    <section className={classes.contactForm}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={classes.heading}>REACH ME</div>
          </div>
          <div className="col-md-3">{props.data.addr}</div>
          <div className="col-md-3">Phone : {props.data.contact}</div>
          <div className="col-md-3">{props.data.email}</div>
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
