import { useState } from "react";

interface SwitchButtonProps {
  options: string[]; // Array of button options
  defaultSelected?: string; // Default selected option
  onChange?: (selected: string) => void; // Callback function when selection changes
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  options,
  defaultSelected,
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultSelected || options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    if (onChange) onChange(option);
  };

  return (
    <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
      {options.map((option, index) => {
        const borderRadius =
          index === 0
            ? "50px 0 0 50px" // First button (left rounded)
            : index === options.length - 1
            ? "0px 50px 50px 0px" // Last button (right rounded)
            : "0"; // Middle buttons (no rounded corners)

        return (
          <label
            key={option}
            className={`btn btn-outline-primary flex-grow-1 text-black ${
              selected === option ? "active" : ""
            }`}
            onClick={() => handleSelect(option)}
            style={{
              borderColor: "#d1d5db",
              padding: "0.75rem",
              borderRadius,
            }}
          >
            <input type="radio" name="options" autoComplete="off" /> {option}
          </label>
        );
      })}
    </div>
  );
};

export default SwitchButton;
