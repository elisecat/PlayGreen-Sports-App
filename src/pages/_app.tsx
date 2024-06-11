import { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { darkTheme, lightTheme } from "@/styles/themes";
import { useRouter } from 'next/router';
import WithPrivateRoute from '../components/guard/WithPrivateRoute';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  let { theme } = useTheme();
  const router = useRouter();
  const unprotectedRoutes = ["/auth/login", "/auth/register"];
  const isProtectedRoute = !unprotectedRoutes.includes(router.pathname);

  return (
    <ThemeProvider>
      <SCThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        {
          isProtectedRoute ? (
            <WithPrivateRoute>
              <Component {...pageProps} />
            </WithPrivateRoute>
          )
          :
          (
            <Component {...pageProps} />
          )
        }
      </SCThemeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
