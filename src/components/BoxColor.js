const BoxColor = (props) => {
  const { r, g, b } = props;

  const backgroundColor = `rgb(${r}, ${g}, ${b})`

  return (
    <div className="box-color w-1/2 mx-auto p-8 border border-black" style={{backgroundColor}}>
      <p>{backgroundColor}</p>
    </div>
  );
};

export default BoxColor;
