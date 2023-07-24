import { Rating } from 'primereact/rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;

  const rounded = Math.round(rating);

  return (
    <div className="driver-card w-[500px] flex bg-blue-500 rounded-md my-5 mx-auto text-white py-5 px-20">
      <img src={img} alt="Profile pic" className='rounded-full w-16 h-16' />
      <div className='ml-5 text-left'>
        <h1 className='text-xl font-bold'>{name}</h1>
        <Rating value={rounded} readOnly cancel={false} className='flex flex-row' />
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
