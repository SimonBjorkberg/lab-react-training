const SingleColorPicker = (props) => {
  const { color, onChange, value } = props;

  return (
    <div className="single-picker flex justify-center">
      <div className="flex justify-center">
        <div
          className={`border border-black w-7 h-7 bg-${color}-500 self-center mr-1`}
        />
        <p className="my-auto mr-3">{color[0].toUpperCase()}: </p>
      </div>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="my-2 border border-black"
      />
    </div>
  );
};

export default SingleColorPicker;
