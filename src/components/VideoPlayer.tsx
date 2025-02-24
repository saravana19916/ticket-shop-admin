import React, { FC, Dispatch, SetStateAction } from "react";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import { useThemeMode } from "../utils/useThemeMode";
import { useWindowSize } from "react-use";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface IVideoPlayerProps {
  videoLink: string | undefined;
  videoModalIsOpen: boolean;
  setVideoLink: Dispatch<SetStateAction<string | undefined>>;
  setVideoModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const VideoPlayer: FC<IVideoPlayerProps> = ({
  videoLink,
  videoModalIsOpen,
  setVideoModalIsOpen,
}) => {
  const { isDarkMode } = useThemeMode();
  const windowWidth = useWindowSize().width;

  const modalStyles = {
    overlay: {
      zIndex: "51",
    },
    content: {
      zIndex: "52",
      backgroundColor: "rgba(19,19,19,1)",
      width: `${windowWidth > 600 ? "80%" : "100%"}`,
      height: `${windowWidth > 600 ? "80%" : "50%"}`,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "0.75rem",
      padding: "2rem 0 0 0",
    },
  };

  const closeButtonStyles = {
    position: "absolute",
    top: "-0.3rem",
    right: "0rem",
    color: "#FFF",
  } as React.CSSProperties;

  const handleCloseModal = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    // setVideoLink(undefined);
    setVideoModalIsOpen(false);
  };

  return (
    <>
      <div data-nc-id="VideoPlayer">
        <ReactModal
          isOpen={videoModalIsOpen}
          onRequestClose={handleCloseModal}
          style={modalStyles}
        >
          {videoLink && (
            <>
              <button
                className="btn"
                onClick={handleCloseModal}
                style={closeButtonStyles}
              >
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <ReactPlayer
                url={videoLink}
                height="100%"
                width="100%"
                controls={true}
                className="w-full"
              />
            </>
          )}
        </ReactModal>
      </div>
    </>
  );
};

export default VideoPlayer;
