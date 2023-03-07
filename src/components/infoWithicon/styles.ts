import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

interface IconsContainerProps {
  iconBg: string;
}

export const IconContainer = styled.div<IconsContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({ iconBg }) => iconBg};
  color: ${({ theme }) => theme.colors["base-white"]};

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }
`;
