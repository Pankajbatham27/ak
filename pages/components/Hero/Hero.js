import { useEffect, useState } from 'react';
import classes from './Hero.module.css';

const Hero = () => {
  const [textArr, setTextArr] = useState('life');
  const [number, setNumber] = useState(0);

  const changeText = () => {
    var arr = [
      'life',
      'moments',
      'happiness',
      'emotions',
      'action',
      'impression',
    ];
    setTimeout(() => {
      if (number < 4) {
        setNumber((number) => number + 1);
      } else {
        setNumber(0);
      }

      setTextArr(arr[number]);
    }, 1000);
    //
  };

  useEffect(() => {
    changeText();
  }, [number]);

  return (
    <section className={classes.heroSection}>
      <h1>
        Hi. I am a photographer
        <br />I capture <b>{textArr}</b>.
      </h1>
    </section>
  );
};
export default Hero;
