"use client";

import { useState } from "react";
import { Carousel, Button, Image } from "react-bootstrap";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { variants } from "../../utils/animationVariants";
import { Route } from "../../../routers/types";

export interface GallerySliderProps {
  className?: string;
  galleryImgs: string[];
  uniqueID: string;
  href?: Route<string>;
  imageClass?: string;
  navigation?: boolean;
}

export default function GallerySlider({
  className = "",
  galleryImgs,
  navigation = true,
}: GallerySliderProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const images = galleryImgs;

  function changePhotoId(newVal: number) {
    setDirection(newVal > index ? 1 : -1);
    setIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => index < images.length - 1 && changePhotoId(index + 1),
    onSwipedRight: () => index > 0 && changePhotoId(index - 1),
    trackMouse: true,
  });

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div className={`position-relative ${className}`} {...handlers}>
        <Carousel
          activeIndex={index}
          onSelect={changePhotoId}
          indicators={false}
          controls={false}
        >
          {images.map((img, i) => (
            <Carousel.Item key={i}>
              <motion.div
                key={i}
                custom={direction}
                variants={variants(340, 1)}
                initial="enter"
                animate="center"
                exit="exit"
                className="d-flex justify-content-center"
              >
                <Image
                  src={img}
                  className="img-fluid rounded-3"
                  alt="Gallery Image"
                />
              </motion.div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Navigation Buttons */}
        {navigation && (
          <>
            {index > 0 && (
              <Button
                variant="light"
                className="position-absolute start-0 top-50 translate-middle-y"
                onClick={() => changePhotoId(index - 1)}
              >
                <ChevronLeft size={24} />
              </Button>
            )}
            {index + 1 < images.length && (
              <Button
                variant="light"
                className="position-absolute end-0 top-50 translate-middle-y"
                onClick={() => changePhotoId(index + 1)}
              >
                <ChevronRight size={24} />
              </Button>
            )}
          </>
        )}
      </div>
    </MotionConfig>
  );
}
