import { useTheme } from '@/context/ThemeContext';
import React from 'react';
import { Button } from './styles/ToggleButton';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button onClick={toggleTheme} id = "toggle-theme-button" value = {theme}>
      {theme === 'dark' ? (
        '🌤️'
      ) : (
        '🌙'
      )}
    </Button>
  );
};

export default ThemeToggleButton;
