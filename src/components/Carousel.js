import { useState } from 'react';

const Carousel = (props) => {
  const { images } = props;
  const [counter, setCounter] = useState(0);

  function changeImg(value) {
    if (value === '+') {
      setCounter(counter + 1);
      if (images[counter + 1] === undefined) {
        setCounter(0);
      }
    } else {
      setCounter(counter - 1);
      if (images[counter - 1] === undefined) {
        setCounter(images.length - 1);
      }
    }
  }

  return (
    <div>
      <img src={images[counter]} alt="" className="mx-auto" />
      <div className="flex justify-center">
        <button className="mx-2" onClick={() => changeImg()}>
          Prev
        </button>
        <button className="mx-2" onClick={() => changeImg('+')}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
