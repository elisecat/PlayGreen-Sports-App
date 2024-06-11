import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  return useContext(ThemeContext) ?? { theme: 'dark', toggleTheme: () => {} };
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  let [theme, setTheme] = useState('dark');

const toggleTheme = () => {
  setTheme(prevTheme => {
    let newTheme = prevTheme === 'dark' ? 'light' : 'dark';
    return newTheme;
  });
};



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
