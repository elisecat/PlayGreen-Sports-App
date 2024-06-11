import styled from 'styled-components';

export const IconContainer = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  &.active {
    background-color: #1F1F31;
  }

  &:hover {
    background-color: #1F1F31;
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const NavBarContainer = styled.div`
  background-color: rgba(44, 43, 62, 1);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  border-radius: 24px;
  position: absolute;
  bottom: 0.7rem;
  left: 1rem;
  right: 1rem;
  width: auto;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
