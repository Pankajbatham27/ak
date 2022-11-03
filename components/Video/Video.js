import classes from './Video.module.css';

const Video = () => {
  return (
    <div className={classes.videoContainer}>
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/ZgEDgWx12mU?controls=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Video;
