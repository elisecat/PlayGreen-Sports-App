import styled from "styled-components";

export const SportImageContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: relative;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 22%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 59%,
      rgba(0, 0, 0, 0) 97%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 0px 0px 32px 32px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    &::after {
      height: 22%;
    }
  }
`;

export const SportImage = styled.img`
  width: 100%; 
  height: 65vh;
  display: block;
  object-fit: cover;
  border-radius: 0px 0px 32px 32px;
`;

export const SportName = styled.h2`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  z-index: 2;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 6vh 0;
`;

export const Button = styled.button`
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  &:first-child {
    background-color: rgba(34, 34, 67, 1);
    box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.08);
  }
  &:last-child {
    background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
    margin-left: 1rem;
  }

  &:hover:first-child {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:hover:last-child {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
