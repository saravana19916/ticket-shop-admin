import styled from "styled-components";
import SunEditor from "suneditor-react";

interface DateTimeInputGroupProps {
  disabled?: boolean;
}
export const FormLabelStyled = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 1rem;
  .dark-mode & {
    color: #fff;
  }
`;

export const FormInputStyled = styled.input`
  font-size: 1rem;
  padding: 12px 12px 12px 20px;
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
export const FormFileInputStyled = styled.div`
  font-size: 1rem;
  padding: 12px 20px;
  border-color: #e5e7eb;
  font-weight: 400;
  color: #000;
  border-radius: 50px;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ensures spacing between text and icon */

  .dark-mode & {
    border-color: #555;
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
export const FormDescriptionStyled = styled.textarea`
  font-size: 1rem;
  border-color: #e5e7eb;
  font-weight: 400;
  color: #000;
  border-radius: 26px;
  margin-bottom: 0.5rem;
  resize: none;
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

export const FormInputDescriptionStyled = styled.span`
  font-size: 0.72rem;
  color: #6b7280;
  margin-top: 12px;
  display: block;
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

export const ButtonPrimary = styled.button`
  border-radius: 50px;
  font-weight: 500;
  padding: 10px 24px;
  font-size: 14px;
  color: #fff;
  border-color: #ed003b;
  background-color: #ed003b;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e00036;
    color: #fff;
  }
  i {
    display: block;

    @media (min-width: 768px) {
      display: none;
    }
  }

  span {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
export const ButtonSuccess = styled.button`
  border-radius: 50px;
  font-weight: 500;
  padding: 10px 24px;
  color: #fff;
  font-size: 14px;
  border-color: #16d9c6;
  background-color: #16d9c6;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #16d9c6;
    color: #fff;
  }
`;

export const ButtonSecondary = styled.button`
  border-radius: 50px;
  border-color: #e5e7eb; 
  color: #374151; 
  background-color: #ffffff; 
  font-weight: 500; 
  font-size: 14px;
  padding: 10px 24px;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: #f3f4f6; 
  }
  }
`;
export const ButtonActive = styled.button`
  border-radius: 50px;
  border-color: #00ff00;
  color: #fff;
  background-color: #00ff00;
  font-weight: 500;
  font-size: 12px;
  padding: 8px 32px;
  min-width: 130px;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: #00ff00;
    color: #fff;
  }
`;
export const ButtonNotActive = styled.button`
  border-radius: 50px;
  border-color: #00dcfa;
  color: #fff;
  background-color: #00dcfa;
  font-weight: 500;
  font-size: 12px;
  padding: 8px 32px;
  min-width: 130px;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: #00dcfa;
    color: #fff;
  }
`;
export const ButtonSecondaryGrey = styled.button`
  border-radius: 50px;
  border-color: #dadbdf; 
  color: #374151; 
  background-color: #e4e4e4; 
  font-weight: 500; 
  font-size: 14px;
  padding: 10px 24px;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: #f3f4f6; /* Equivalent to hover:bg-neutral-100 */
  }
  }
`;
export const ButtonSecondaryDarkGrey = styled.button`
  border-radius: 50px;
  border-color: #8c8c8c;
  color: #fff;
  background-color: #8c8c8c;
  font-weight: 500;
  font-size: 14px;
  padding: 10px 24px;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #a6a6a6; // Lightened grey for hover effect
    border-color: #a6a6a6; // Lighten the border color as well
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
      border-color: #e5e7eb;
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
`;
