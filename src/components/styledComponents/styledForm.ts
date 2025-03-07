import styled, { css } from "styled-components";
import SunEditor from "suneditor-react";
const commonStyles = css`
  font-size: 1rem;
  border-color: #e5e7eb;
  font-weight: 400;
  color: #000;
  border-radius: 50px;
  margin-bottom: 0.5rem;

  .dark-mode & {
    border-color: #e5e7eb;
    color: #fff;
  }

  &:hover {
    border-color: #b3b3b3;
    .dark-mode & {
      border-color: #e5e7eb;
    }
  }

  &:focus,
  &:focus-within {
    border-color: #fec9da80;
    outline: 1px solid #fec9da80;
    .dark-mode & {
      border-color: #777;
    }
  }

  &:disabled {
    background-color: #f2f2f2;
    color: #888;
    cursor: not-allowed;
  }
`;
interface DateTimeInputGroupProps {
  disabled?: boolean;
}

export const FormInputStyled = styled.input`
  ${commonStyles}
  padding: 12px 12px 12px 20px;
  -moz-appearance: textfield;
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &.special-input {
    background-color: #f3f4f5; /* Light mode */

    .dark-mode & {
      background-color: #282848; /* Dark mode */
    }
  }
`;
export const FormDivStyled = styled.div`
  ${commonStyles}
  padding: 11px 12px 11px 20px;
`;

export const FormFileInputStyled = styled.div`
  ${commonStyles}
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ensures spacing between text and icon */
`;

export const FormDescriptionStyled = styled.textarea`
  ${commonStyles}
  border-radius: 26px;
  resize: none;
`;

export const FormLabelStyled = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 1rem;
  .dark-mode & {
    color: #fff;
  }
`;
export const FormInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content; /* Adjust width as needed */
`;

export const FormInputGroupLabel = styled.span`
  position: absolute;
  right: 18px; /* Adjust position */
  top: 13px;
  font-size: 1rem;
  color: #888;
`;

export const FormInputDescriptionStyled = styled.span`
  font-size: 0.72rem;
  color: #6b7280;
  margin-top: 12px;
  display: block;
`;
export const FormInputRequired = styled.span`
  color: #e00036;
  font-weight: semibold;
  padding-left: 0.25rem;
`;

export const DateTimeInputGroup = styled.div<DateTimeInputGroupProps>`
  border: 1px solid #e5e7eb;
  display: flex;
  width: 100%;
  text-align: center;
  border-radius: 50rem;
  margin-bottom: 0.5rem;
  background-color: ${({ disabled }) => (disabled ? "#f2f2f2" : "#fff")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  .dark-mode & {
    border-color: #e5e7eb;
    color: #fff;
  }
  &:hover {
    border-color: #b3b3b3;

    .dark-mode & {
      border-color: #e5e7eb;
    }
  }

  &:focus {
    border-color: #fec9da80;
    outline: 1px solid #fec9da80;
    .dark-mode & {
      border-color: #777;
    }
  }
  &:focus-within {
    border-color: #fec9da80;
    outline: 1px solid #fec9da80;
    .dark-mode & {
      border-color: #777;
    }
  }

  &:disabled {
    background-color: #f2f2f2;
    color: #888;
    cursor: not-allowed;
  }
`;

export const DateTimeCustomInput = styled.input`
  border: none;
  border-radius: 50rem;
  padding: 12px 12px 12px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  flex: 1;

  //   &::placeholder {
  //     color: #aaa;
  //   }

  &:focus {
    outline: none;
  }
`;

export const StyledSunEditor = styled(SunEditor)`
  .se-wrapper {
    border: 1px solid #ed003b !important; /* Ensure border color consistency */
    border-radius: 50px !important;
    overflow: hidden; /* Prevents content from overflowing the border-radius */
  }

  .se-wrapper .se-toolbar {
    border-bottom: 1px solid #ed003b !important;
    border-top-left-radius: 50px !important;
    border-top-right-radius: 50px !important;
  }

  .se-wrapper .se-resizing-bar {
    border-top: 1px solid #ed003b !important;
    border-bottom-left-radius: 50px !important;
    border-bottom-right-radius: 50px !important;
  }
`;

export const FormGroupStyled = styled.div`
  .form-group-row {
    display: flex;
    align-items: center;
    border: 1px solid #e5e7eb;
    border-radius: 50px;
    overflow: hidden;
    background: #fff;
    transition: border-color 0.2s ease-in-out;
    width: 100%;

    .dark-mode & {
      border-color: #40405c;
      background: #333;
    }

    &:hover {
      border-color: #b3b3b3;
      .dark-mode & {
        border-color: #e5e7eb;
      }
    }

    &:focus-within {
      border-color: #fec9da80;
      outline: 1px solid #fec9da80;
      .dark-mode & {
        border-color: #777;
      }
    }

    .input-column {
      flex: 1;
      border-left: 1px solid #e5e7eb;
      padding: 0 12px;
      .dark-mode & {
        border-left: 1px solid #40405c;
        background-color: #282848;
      }
    }

    input {
      width: 100%;
      padding: 12px 0;
      font-size: 1rem;
      font-weight: 400;
      color: #000;
      border: none;
      outline: none;
      background: transparent;

      .dark-mode & {
        color: #fff;
      }

      &:disabled {
        background-color: #f2f2f2;
        color: #888;
        cursor: not-allowed;
      }
    }
  }
`;

export const FormStyledPill = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 12px 14px 28px;
  border: 1px solid #f8f9f9;
  border-radius: 50px;
  background-color: #f3f4f5;
  color: #121826;
  font-size: 14px;
  font-weight: 600;
  gap: 20px;

  .icon {
    width: 20px !important;
    height: 20px !important;
    border-radius: 50%;
    background-color: #dddddf;
    flex-shrink: 0; /* Prevent shrinking */
    flex-grow: 0; /* Prevent growing */
    display: inline-block; /* Ensure it respects width and height */
  }

  .fw-normal {
    font-weight: 400; /* Normal font weight for span */
  }
  .dark-mode & {
    background-color: #282848;
    border: 1px solid #282848;
    color: #fff;
  }
`;

export const FormStyledContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: #fafbfc; /* Light background color */
  border-radius: 16px; /* Rounded corners */

  .dark-mode & {
    background: #1a1a3c;
  }

  .question {
    font-size: 0.857rem;
    font-weight: 600;
    color: #121826;
    margin-right: 1rem;
    .dark-mode & {
      color: #ffffff;
    }
  }
  input {
    width: 20px;
    height: 20px;
    border: 1px solid #e1e4e7;
    margin-right: 1rem;
    accent-color: #e00036;
    border-radius: 4px;
  }
  label {
    display: flex;
    align-items: center;
    font-size: 0.857rem;
    font-weight: 400;
    color: #121826;
  }
`;
export const FormStyledContentSectionUndesignedForFields = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: #fafbfc; /* Light background color */
  border-radius: 16px; /* Rounded corners */
  .dark-mode & {
    background: #1a1a3c;
  }
`;

export const StyledCountButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #e1e4e7;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f3f4f6;
  }

  svg {
    width: 16px;
    height: 16px;
    color: #4b5563;
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #f9fafb;
    border-color: #e5e7eb;

    svg {
      color: #9ca3af;
    }
  }
`;

export const StyledInputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 20px;
    height: 20px;
    border: 1px solid #e1e4e7;
    margin-right: 1rem;
    accent-color: #e00036;
    border-radius: 4px;
  }
  label {
    display: flex;
    align-items: center;
    font-size: 0.857rem;
    font-weight: 400;
    color: #121826;
  }
`;

export const StyledToggleButton = styled.span``;
