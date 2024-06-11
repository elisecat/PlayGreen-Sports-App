import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;