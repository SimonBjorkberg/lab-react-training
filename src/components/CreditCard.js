import visaLogo from '../images/visa.png';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const sliced = number.slice(12);
  const hiddenNumbers = `**** **** **** ${sliced}`;

  return (
    <div
      className="credit-card rounded-md w-72 h-36 my-5 mx-auto flex flex-col"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
    >
      {type === 'Visa' && <img src={visaLogo} alt="Logo" className='w-14 mr-3 mt-3 self-end' />  }
      {type === 'Master Card' && <p className="text-right mr-3 text-2xl italic">{type}</p>}
      <p className="text-2xl mt-3">{hiddenNumbers}</p>
      <div className="flex mt-2">
        <p className="mx-6">
          Expires {expirationMonth}/{expirationYear.toString().slice(2)}
        </p>
        <p>{bank}</p>
      </div>
      <p className="text-left ml-6">{owner}</p>
    </div>
  );
};

export default CreditCard;
