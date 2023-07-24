import { Rating } from 'primereact/rating';

const Ratings = (props) => {
  const rounded = Math.round(props.children);

  return (
      <Rating value={rounded} readOnly cancel={false} className="flex my-3" />
  );
};

export default Ratings;
