import classes from './About.module.css';
// import design from './../../../public/images/design.jpg';

const About = (props) => {
  return (
    <section className={classes.about}>
      <div className="row">
        <div className="col-md-12">
          <h2>{props.data.title}</h2>
        </div>
        <div
          className="col-md-8"
          dangerouslySetInnerHTML={{ __html: props.data.content }}
        ></div>
        <div className="col-md-4">
          <div className={classes.aboutRight}>
            <img
              src={`${process.env.apiURl}uploads/allimgs/${props.data.image}`}
              alt={props.data.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
