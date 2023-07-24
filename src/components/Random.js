const Random = (props) => {
  const { min, max } = props;

  const randomNumber = Math.floor(Math.random(min) * max);

  return (
    <div className="random-number">
      <p className="my-5 border text-left border-black p-2 mx-2">
        Random value between {min} and {max} === {randomNumber}
      </p>
    </div>
  );
};

export default Random;
