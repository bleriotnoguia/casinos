import { IoStar, IoStarOutline } from "react-icons/io5";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <>
      {index < rating ? (
        <IoStar size={38} color="#F09F00" />
      ) : (
        <IoStarOutline size={38} color="#F09F00" />
      )}
    </>
  ));
  return <div className="my-3 flex">{stars}</div>;
};

export default RatingStars;
