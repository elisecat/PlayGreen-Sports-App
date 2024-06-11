import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 90%;
  margin: 0 auto;   
  
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1025px) {
    width: 70%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: #fff;
`;

export const Subtitle = styled.p`
  margin-bottom: 0;
  color: #FEFEFE;
`;

export const Date = styled.p`
  margin-bottom: 10px;
  color: #a5a5a5;
`;

export const SportItem = styled.div`
  position: relative;
  display: flex;
  height: 9vh;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: rgba(44,43,62,1) !important;
  overflow: hidden;
  width: 100%;
    @media (min-width: 1025px) {
    height: 12vh;
  }
`;

export const SportImage = styled.img`
  position: absolute;
  left: 0px;
  width: 85%;
  object-fit: cover;
  height: 100%;
  border-radius: 10px;
  margin-right: 15px;
`;

export const SportOverlay = styled.div`
  position: absolute;
  left: 0px;
  width: 85%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 1;
`;

export const SportName = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: 700;
`;

export const SportNameContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 4%;
  transform: translateY(-50%);
  z-index: 2;
`;

interface SportButtonProps {
  liked: boolean;
}

export const SportButton = styled.button<SportButtonProps>`
  background: transparent;
  border: none;
  width: 30px;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
  margin-right: 3%;
@media (min-width: 1025px) {
  margin-right: 5%;
  }
  svg {
    fill: currentColor;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 90%;
  margin: 0 auto; 
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  background: #333;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  margin: 0 10px;
  &:disabled {
    background: #555;
    cursor: not-allowed;
  }
`;
