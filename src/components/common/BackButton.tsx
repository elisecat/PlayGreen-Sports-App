import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  background: rgba(34, 34, 67, 1);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 1rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButton: React.FC = () => {
  return (
    <Link href="/home" passHref>
      <Button aria-label="Go back to home page">
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.125 1.5625L1.6875 10L10.125 18.4375" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Button>
    </Link>
  );
};

export default BackButton;
