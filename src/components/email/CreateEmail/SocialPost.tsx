import React from "react";
import styled from "styled-components";

interface SocialPostProps {
  icon: string;
  name: string;
  connectText: string;
  link: string;
}

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const ConnectLink = styled.a`
  text-decoration: underline;
  margin-left: 10px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

const SocialPost: React.FC<SocialPostProps> = ({
  icon,
  name,
  connectText,
  link,
}) => {
  return (
    <SocialContainer>
      <SocialIcon src={icon} alt={name} />
      <span>{name}</span>
      <a className="text-decoration-underline ms-5" href={link}>
        {connectText}
      </a>
    </SocialContainer>
  );
};

export default SocialPost;
