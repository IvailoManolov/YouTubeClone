import React from 'react'
import styled from 'styled-components'
import YTLogo from '../Images/YouTubeLogo.png'

const Container = styled.div`
    flex:1;
    background-color:#202020;
    height:100vh;
    color:white;
`
const Wrapper = styled.div`
    padding: 18px 6px;
    position:relative;
    width:50px;
    height:100px
`

const Logo = styled.div`
    display: flex;
    align-items:center;
    font-weight: bold;
    margin-bottom:25px;
`

const Img = styled.img`
    height:50px;
    gap:1px;
`

const LogoTextHolder = styled.div`
    position:absolute;
    bottom:2%;
    left:90%;
    width:100px;
    height:100px;
`

const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={YTLogo}/>
                <LogoTextHolder>
                    YouTube
                </LogoTextHolder>
            </Logo>
        </Wrapper>
    </Container>
  )
}

export default Menu