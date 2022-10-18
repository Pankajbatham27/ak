import classes from './About.module.css';
// import design from './../../../public/images/design.jpg';

const About = () => {
  return (
    <section className={classes.about}>
      <div className="row">
        <div className="col-md-12">
          <h2>About</h2>
        </div>
        <div className="col-md-8">
          <p>
            Pankaj Batham Aliquam erat volutpat. Duis ac turpis. Donec
            sit amet eros. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Mauris fermentum dictum magna. Sed
            laoreet aliquam leo. Ut tellus dolor, dapibus eget,
            elementum vel, cursus eleifend, elit. Aenean auctor wisi
            et urna. Aliquam erat volutpat. Duis ac turpis. Integer
            rutrum ante eu lacus.Vestibulum libero nisl, porta vel.{' '}
          </p>

          <p>
            Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum
            primis in <a href="#">faucibus orci</a> luctus et ultrices
            posuere cubilia Curae; Suspendisse sollicitudin velit sed
            leo. Ut pharetra augue nec augue. Nam elit agna,endrerit
            sit amet, tincidunt ac, viverra sed, nulla. Donec porta
            diam eu massa. Quisque diam lorem, interdum vitae,dapibus
            ac, scelerisque vitae, pede.{' '}
          </p>

          <p>
            Donec eget tellus non erat lacinia fermentum. Donec in
            velit vel ipsum auctor pulvinar. Vestibulum iaculis
            lacinia est. Proin dictum elementum velit. Fusce euismod
            consequat ante. Lorem ipsum dolor sit amet, consectetuer
            adipisMauris accumsan nulla vel diam. Sed in lacus ut enim
            adipiscing aliquet.
          </p>
        </div>
        <div className="col-md-4">
          <div className={classes.aboutRight}>
            {/* <img
              src="http://velikorodnov.com/html/joker/images/about_img_1.jpg"
              alt="ak photography about"
            /> */}
            <img
              src="https://themes.pixelwars.org/photographer-html/images/gallery/04.jpg"
              alt="ak photography about"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
