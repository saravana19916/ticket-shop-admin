import React from "react";

const LineLoader: React.FC = () => {
  const lineLoaderStyle: React.CSSProperties = {
    width: "100%",
    height: "2px",
    backgroundColor: "#f3f3f3",
    position: "relative",
    overflow: "hidden",
  };

  const lineStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, #ed003b, transparent)",
    animation: "lineLoader 1.5s infinite",
  };

  const keyframes = `
    @keyframes lineLoader {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `;

  return (
    <div style={lineLoaderStyle}>
      <style>{keyframes}</style>
      <div style={lineStyle}></div>
    </div>
  );
};

export default LineLoader;
