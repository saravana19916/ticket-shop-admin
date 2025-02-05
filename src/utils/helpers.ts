export const roundToNearestWhole = (value: string): number => {
  const numberValue = parseFloat(value);
  if (isNaN(numberValue)) {
    return 0;
  }
  return Math.round(numberValue);
};
