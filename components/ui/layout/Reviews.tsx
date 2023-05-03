import Image from "next/image";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import Link from "next/link";
import { BsYelp } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
import { useScroll, useTransform } from "framer-motion";
const Reviews = ({ reviews }: any) => {
  return (
    <div className="container my-24">
      <h1 className="font-mono text-4xl flex items-center ">
        Latest Reviews from Yelp
        <span>
          <BsYelp className="text-pink-500 ml-2" />
        </span>
      </h1>
      <hr className="my-4" />
      <div className="grid md:grid-cols-3 gap-8">
        {/* <pre>{JSON.stringify(reviews, null, 2)}</pre> */}

        {reviews.reviews.map((review: any) => (
          <div key={review.id}>
            <Link href={review.user.profile_url} target="_blank">
              <h1 className="text-xl font-semibold font-mono capitalize ">
                {review.user.name}
              </h1>
            </Link>
            <div className="flex items-center my-1">
              <RiStarSFill style={{ color: "goldenrod" }} />
              <RiStarSFill style={{ color: "goldenrod" }} />
              <RiStarSFill style={{ color: "goldenrod" }} />
              <RiStarSFill style={{ color: "goldenrod" }} />
              <RiStarSFill style={{ color: "goldenrod" }} />
              <p className="text-sm font-semibold ml-2">
                {format(new Date(review.time_created), "MMM i y")}
              </p>
            </div>
            <p className="">{review.text}</p>

            {/* <p>{review.rating}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
