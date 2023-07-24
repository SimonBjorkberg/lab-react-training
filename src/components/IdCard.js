const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;

  console.log(birth.toLocaleString());

  return (
    <div className="id-card flex m-2 border border-black p-2">
      <div>
        <img src={picture} alt="Profile pic" />
      </div>
      <div className="text-left ml-3">
        <p>
          <span className="font-bold">First name: </span>
          {firstName}
        </p>
        <p>
          <span className="font-bold">Last name: </span>
          {lastName}
        </p>
        <p>
          <span className="font-bold">Gender: </span>
          {gender}
        </p>
        <p>
          <span className="font-bold">Height: </span>
          {height}
        </p>
        <p>
          <span className="font-bold">Birth: </span>
          {birth.toString().slice(0, 16)}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
