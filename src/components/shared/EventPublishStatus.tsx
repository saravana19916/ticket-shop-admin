import styled from "styled-components";

interface BadgeProps {
  status: string;
}

const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 0.714rem;
  min-width: 96px;
  color: white;
  text-transform: capitalize;
  background-color: ${(props) =>
    props.status === "on_sale"
      ? "#28a745" // Green for on_sale
      : props.status === "canceled"
      ? "#dc3545" // Red for canceled
      : "#343a40"}; // Dark for other statuses
`;

const formatStatus = (status: string): string => {
  return status
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

interface EventPublishStatusProps {
  publishStatus: string;
}

const EventPublishStatus: React.FC<EventPublishStatusProps> = ({
  publishStatus,
}) => {
  return <Badge status={publishStatus} className="text-center">{formatStatus(publishStatus)}</Badge>;
};

export default EventPublishStatus;
