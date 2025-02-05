import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Breadcrumb = styled.span`
  display: flex;
  padding: 1rem 0;
  align-items: center;

  .breadcrumb-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    color: inherit;
    transition: color 0.3s ease;

    &:hover {
      color: rgba(249, 0, 85, 1);
    }
    span.text {
      margin-top: 2px; /* Adjust as needed */
    }
  }
`;
interface IProps {
  backLink?: string;
}
export default function BreadcrumbComponent(props: IProps) {
  const navigate = useNavigate();
  const handleBack = () => {
    if (props.backLink) {
      navigate(`${props.backLink}`);
      return;
    }
    window.history.back();
  };
  return (
    <Breadcrumb aria-label="Breadcrumb">
      <span className="breadcrumb-item" onClick={() => handleBack()}>
        <ChevronLeftIcon className="w-5 h-7" />
        <span className="ms-2">Back</span>
      </span>
    </Breadcrumb>
  );
}
