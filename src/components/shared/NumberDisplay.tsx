import React from "react";

type NumberDisplayProps = {
  value: number;
};

const formatNumber = (value: number): string => {
  // Format the number with thousand separators
  return value.toLocaleString();
};

const abbreviateNumber = (value: number): string => {
  // Convert numbers to K, M, etc.
  if (value >= 1_000_000_000) {
    return `${Math.floor(value / 1_000_000_000)}B`;
  } else if (value >= 1_000_000) {
    return `${Math.floor(value / 1_000_000)}M`;
  } else if (value >= 1_000) {
    return `${Math.floor(value / 1_000)}K`;
  } else {
    return value.toString();
  }
};

const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {
  const originalValueFormatted = formatNumber(value); // Original with thousand separators
  const abbreviatedValue = abbreviateNumber(value); // Abbreviated value

  return (
    <h2
      className="mb-0 number-font"
      title={originalValueFormatted} // Tooltip with original value
    >
      {abbreviatedValue}
    </h2>
  );
};

export default NumberDisplay;
