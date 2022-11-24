import { useRef } from 'react';

const Photowall = (props) => {
  const componentRef = useRef();

  setTimeout(() => {
    // console.log(componentRef.current.clientWidth);

    var totalLi = $('#ulWidth li').length;

    if (componentRef.current.clientWidth > 1295) {
      $('#ulWidth').css('column-count', 12);
      var liWidth = componentRef.current.clientWidth / 12;

      for (let index = totalLi; index > 12 * 3; index--) {
        $('#ulWidth li:nth-child(' + index + ')').remove();
      }
    } else if (componentRef.current.clientWidth > 1115) {
      $('#ulWidth').css('column-count', 9);
      var liWidth = componentRef.current.clientWidth / 9;

      for (let index = totalLi; index > 9 * 3; index--) {
        $('#ulWidth li:nth-child(' + index + ')').remove();
      }
    } else if (componentRef.current.clientWidth > 935) {
      $('#ulWidth').css('column-count', 6);
      var liWidth = componentRef.current.clientWidth / 6;

      for (let index = totalLi; index > 6 * 3; index--) {
        $('#ulWidth li:nth-child(' + index + ')').remove();
      }
    } else if (componentRef.current.clientWidth > 695) {
      $('#ulWidth').css('column-count', 6);
      var liWidth = componentRef.current.clientWidth / 6;

      for (let index = totalLi; index > 6 * 3; index--) {
        $('#ulWidth li:nth-child(' + index + ')').remove();
      }
    } else if (componentRef.current.clientWidth > 515) {
      $('#ulWidth').css('column-count', 6);
      var liWidth = componentRef.current.clientWidth / 6;

      for (let index = totalLi; index > 6 * 3; index--) {
        $('#ulWidth li:nth-child(' + index + ')').remove();
      }
    } else if (componentRef.current.clientWidth < 515) {
      $('#ulWidth').css('column-count', 4);
      var liWidth = componentRef.current.clientWidth / 4;

      for (let index = totalLi; index > 4 * 3; index--) {
        $('#ulWidth li:nth-child(' + index + ')').remove();
      }
    }

    $('#ulWidth li').css('height', liWidth);
    $('#ulWidth li').css('width', liWidth);
  }, 1000);

  setInterval(() => {
    var min = 1;
    var max = $('#ulWidth li').length;

    var randNumber = Math.floor(Math.random() * (max - min)) + min;

    var randNumber2 = Math.floor(Math.random() * (max - min)) + min;

    var tt = $('#ulWidth li:nth-child(' + randNumber + ')').css(
      'background'
    );

    var pp = $('#ulWidth li:nth-child(' + randNumber2 + ')').css(
      'background'
    );

    $('#ulWidth li:nth-child(' + randNumber + ')')
      .fadeOut(1000, function () {
        $('#ulWidth li:nth-child(' + randNumber + ')').css(
          'background',
          'url(' + pp.split('"')[1] + ')'
        );
      })
      .fadeIn(1000);

    $('#ulWidth li:nth-child(' + randNumber2 + ')')
      .fadeOut(1400, function () {
        $('#ulWidth li:nth-child(' + randNumber2 + ')').css(
          'background',
          'url(' + tt.split('"')[1] + ')'
        );
      })
      .fadeIn(1400);
  }, 3000);
  return (
    <div className="photowall">
      <ul ref={componentRef} id="ulWidth">
        {props.data.map((item, key) => (
          <li
            style={{
              background: `url(${process.env.apiURl}uploads/gallery/medium/${item.image})`,
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};
export default Photowall;
