import React, { FC, useState } from "react";
import { Button } from "react-bootstrap";

export interface BtnLikeIconProps {
  className?: string;
  colorClass?: string;
  isLiked?: boolean;
}

const BtnLikeIcon: FC<BtnLikeIconProps> = ({
  className = "",
  isLiked = false,
}) => {
  const [likedState, setLikedState] = useState(isLiked);

  return (
    <Button
      variant={likedState ? "danger" : "light"}
      className={`rounded-circle d-flex align-items-center justify-content-center p-2 border-0 shadow ${className}`}
      onClick={() => setLikedState(!likedState)}
      title="Save"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill={likedState ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </Button>
  );
};

export default BtnLikeIcon;
