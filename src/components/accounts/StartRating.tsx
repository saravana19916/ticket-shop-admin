import { StarIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";

export interface StartRatingProps {
  className?: string;
  point?: number;
  reviewCount?: number;
}

const StartRating: FC<StartRatingProps> = ({
  className = "",
  point = 4.5,
  reviewCount = 112,
}) => {
  return (
    <div
      className={`nc-StartRating d-flex align-items-center gap-1 text-sm ${className}`}
      data-nc-id="StartRating"
    >
      <div className="pb-1">
        <StarIcon className="w-5 h-5 text-warning" />
      </div>
      <span className="fw-medium">{point}</span>
      <span className="text-gray">({reviewCount})</span>
    </div>
  );
};

export default StartRating;
