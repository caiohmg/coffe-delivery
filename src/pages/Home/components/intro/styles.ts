import { rgba } from "polished";
import styled from "styled-components";
import introBackgroundImg from "../../../../assets/intro-background.png";
import { TitleText } from "../../../../components/Typography";

const mobileSize = "768px";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${mobileSize}) {
    height: 24rem;
  }
`;

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  @media only screen and (min-width: ${mobileSize}) {
    flex-direction: row;
  }
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
  text-align: center;

  @media only screen and (min-width: ${mobileSize}) {
    text-align: left;
  }
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.25rem;
  margin-top: 2.5rem;

  @media only screen and (min-width: ${mobileSize}) {
    grid-template-columns: 1fr 1fr;
    margin-top: 4.125rem;
  }
`;
