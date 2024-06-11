import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  box-sizing: border-box;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 0.8em;
`;

export const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 10px;
  color: #FEFEFE;
  font-size: 0.75rem;
  background: rgba(47, 47, 67, 1);
  padding: 0 5px;
  transform: translateY(-50%);
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 30px 10px 8px 10px;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  background: rgba(47, 47, 67, 1);
  color: white;

  &::placeholder {
    color: #BBBBBB;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
    width: 33%;
    height: 4rem;
    background: linear-gradient(99deg, #236BFE 6.69%, #0D4ED3 80.95%);
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s;
    padding: 22px, 38px, 22px, 38px;
    font-weight: 700;

  &:hover {
    box-shadow: 0px 4px 30px 0px rgba(34, 105, 251, 0.8);
  }
`;

export const Title = styled.h1`
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Text = styled.p`
  margin-top: 0;
  text-align: center;
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: 0.8rem;
  text-align: start;
  margin-bottom: 1rem;
  cursor: pointer;
`;

