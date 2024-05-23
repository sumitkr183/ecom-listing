import Image from "next/image";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

import { IProduct } from "@/types";

const printRating = (rating: number) => {
  return Array(rating)
    .fill("")
    .map((_, i) => <IoMdStar key={`fill-${i}`} />);
};

const printOutlinedRating = (rating: number) => {
  let star = 5 - rating;
  if (!star) return null;
  return Array(star)
    .fill("")
    .map((_, i) => <IoMdStarOutline key={`fill-${i}`} />);
};

export const Card = ({ title, price, image, rating }: IProduct) => {
  return (
    <div className="border-[1px] border-black/10 p-2 space-y-2 flex flex-col hover:shadow-sm">
      <div className="w-full h-44 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain img_relative"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-1 justify-end">
        <div className="flex space-x-1 items-center">
          {printRating(Math.round(rating.rate))}
          {printOutlinedRating(Math.round(rating.rate))}
          <span className="text-sm">({rating.count})</span>
        </div>
        <p className="text-sm line-clamp-2">{title}</p>
        <h4 className="text-secondary font-semibold">${price}</h4>
      </div>
    </div>
  );
};
