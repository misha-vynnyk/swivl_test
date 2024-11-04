import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";
import Main from "./components/Main";
import { HelmetProvider } from "react-helmet-async";

const theme = {
  paddding: {
    mobile: "1rem",
    tablet: "2rem",
    desktop: "3rem",
  },
  colors: {
    text: "#3E4056",
    header: "#fff",
    body: "#F2F2F2",
    textRed: "#F05D63",
    backgroundText: "#ECF1F8",
  },
  mobile: "870px",
  tablet: "1320px",
  desktop: "1440px",
  fonts: {
    primary: "Open Sans, sans-serif",
    secondary: "Montserrat, sans-serif",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </HelmetProvider>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
