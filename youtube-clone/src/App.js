import styled, { ThemeProvider } from "styled-components"

import Menu from "./Components/Menu";

import Navbar from "./Components/Navbar";

import "./App.css"

import { darkTheme, lightTheme } from "./Utilities/Theme";

import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import SignIn from "./Pages/SignIn";
import Search from "./Pages/Search";

const Container = styled.div`
display:flex;
`

const Main = styled.div`
  flex:7;
  background-color:${({theme}) => theme.bg}; 
`

const Wrapper = styled.div`
  padding:22px 96px;
`

function App() {

  const [darkMode,setDarkMode] = useState(false)


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
        {/* MENU */}
        <Menu darkMode = {darkMode} setDarkMode = {setDarkMode} />

        {/* MAIN */}
        <Main>
          <Navbar/>
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element ={<Home type="random"/>}/>
                <Route path="trends" element ={<Home type="trend"/>}/>
                <Route path="subscriptions" element ={<Home type="sub"/>}/>
                <Route path="search" element ={<Search/>}/>
                <Route path="signin" element ={<SignIn/>}/>

                <Route path="video">
                  <Route path=":id" element = {<Video/>}/>
                </Route>

              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
