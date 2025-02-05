import React, { useState, useEffect } from "react";
import { SeatsioDesigner } from "@seatsio/seatsio-react";
import { toast } from "react-toastify";
import LineLoader from "../../shared/LineLoader";
import { archiveChart } from "../../../actions/seatsDesigner";

const Index = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [handleReload, setHandleReload] = useState(false);
  const [chartKey, setChartKey] = useState<string | undefined>(undefined);

  const handleFullScreenToggle = () => {
    setIsFullScreen((prev) => {
      return !prev;
    });
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsFullScreen(false);
    }
  };
  const [minHeight, setMinHeight] = useState("130vh");
  const updateMinHeight = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1400) {
      setMinHeight("130vh");
    } else {
      setMinHeight("100vh");
    }
  };
  useEffect(() => {
    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
    return () => {
      window.removeEventListener("resize", updateMinHeight);
    };
  }, []);

  useEffect(() => {
    if (isFullScreen) {
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isFullScreen]);

  const containerStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
    position: isFullScreen ? "fixed" : "static",
    top: isFullScreen ? 0 : "auto",
    left: isFullScreen ? 0 : "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: isFullScreen ? 9999 : "auto",
    backgroundColor: isFullScreen ? "white" : "transparent",
    padding: isFullScreen ? 0 : "0 1rem",
  };

  const cardStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
  };

  const buttonStyle: React.CSSProperties = {
    position: isFullScreen ? "absolute" : "relative",
    top: isFullScreen ? "4px" : "auto",
    right: isFullScreen ? "50%" : "auto",
    zIndex: isFullScreen ? 10000 : "", // Ensure button is above all other elements
    // transform: isFullScreen ? "translateX(40%)" : "none",
    marginTop: isFullScreen ? "8px" : "",
    backgroundColor: isFullScreen ? "#fff" : "#ed003b",
    color: isFullScreen ? "#777" : "#fff",
    border: isFullScreen ? "1px solid #777" : "none",
  };
  const handleExit = () => {
    setIsFullScreen(false);
    setHandleReload(true);
    setTimeout(() => setHandleReload(false), 100);
    setChartKey(undefined);
  };
  const handleArchive = async () => {
    if (chartKey) {
      setIsLoading(true);
      try {
        await archiveChart(chartKey);
        toast.success("Chart is archived successfully!", {
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
        });
        handleExit();
        setChartKey(undefined);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {/* px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 */}
      <div className="row px-0  ">
        <div style={containerStyle}>
          <>
            {isFullScreen ? (
              <>
                {/* <div className="row w-100">
                  <div className="col-12 p-0">
                    <button
                      className="btn mb-3 float-end"
                      type="button"
                      onClick={handleFullScreenToggle}
                      style={buttonStyle}
                    >
                      Exit Full Screen{" "}
                    </button>
                  </div>
                </div> */}
              </>
            ) : (
              <>
                <div className="row w-100">
                  <div className="col-12 p-0">
                    <div className="d-flex float-end gap-3">
                      {chartKey ? (
                        <>
                          <button
                            type="button"
                            title="Archive & Exit"
                            className="btn bg-light mb-3 "
                            disabled={isLoading}
                            onClick={handleArchive}
                          >
                            <i className="bi bi-archive fs-6"></i>
                          </button>
                        </>
                      ) : null}

                      <button
                        type="button"
                        title="Full Screen"
                        className="btn bg-light mb-3 "
                        disabled={isLoading}
                        onClick={handleFullScreenToggle}
                      >
                        <i className="bi bi-arrows-fullscreen fs-6"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>

          <div className="card border p-0" style={cardStyle}>
            <div className="row">
              <div className="col-12" style={{ minHeight }}>
                {isLoading && <LineLoader />}
                {handleReload ? (
                  <></>
                ) : (
                  <>
                    <SeatsioDesigner
                      secretKey="2571155e-035b-4772-a078-2a510524ff41"
                      region="eu"
                      onChartCreated={setChartKey}
                      onExitRequested={handleExit}
                      onRenderStarted={() => setIsLoading(true)}
                      onDesignerRendered={() => setIsLoading(false)}
                      onDesignerRenderingFailed={() => setIsLoading(false)}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
