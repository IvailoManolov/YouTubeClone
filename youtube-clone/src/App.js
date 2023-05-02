import styled, { ThemeProvider } from "styled-components"
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import "./App.css"
import { darkTheme, lightTheme } from "./Utilities/Theme";
import { useState } from "react";

const Container = styled.div`
display:flex;
`

const Main = styled.div`
  flex:7;
  background-color:${({theme}) => theme.bg}; 
`

const Wrapper = styled.div`

`

function App() {

  const [darkMode,setDarkMode] = useState(false)


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      {/* MENU */}
      <Menu darkMode = {darkMode} setDarkMode = {setDarkMode} />

      {/* MAIN */}
      <Main>
        <Navbar/>
        <Wrapper>
          video cards
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;
