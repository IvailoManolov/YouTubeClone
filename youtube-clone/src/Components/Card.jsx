import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: ${(props) => props.type !== 'sm' && "360px"};
  margin-bottom:${(props) => props.type === 'sm' ? "10px" : "45px"};
  cursor:pointer;
  display:${(props) => props.type === 'sm' && "flex"};
  gap:10px;
`

const Image = styled.img`
  width:100%;
  height:${(props) => props.type === 'sm' ? "100px" : "202px"};
  border-radius:10px;
  background-color:#999;
  flex:1;
`
const Details = styled.div`
  display: flex;
  margin-top:${(props) => props.type !== 'sm' && "16px"};
  gap:12px;
  flex:1;
`
const ChannelImage = styled.img`
  width:36px;
  height:36px;
  border-radius:50%;
  background-color:#999;
  display:${(props) => props.type === 'sm' && "none"};
`

const Texts = styled.div`
`

const Title = styled.h1`
  font-size:16px;
  font-weight:500;
  color : ${({theme}) => theme.text};
`

const ChannelName = styled.h2`
  font-size:14px;
  color: ${({theme}) => theme.textSoft};
  margin:9px 0px;
`

const Info = styled.div`
  font-size:14px;
  color: ${({theme}) => theme.textSoft};
`


const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type = {type}>
      <Image type={type} src="data:image/jpeg;base64,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"/>
      <Details type={type}>
        <ChannelImage type={type} src="data:image/png;base64,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"/>
        <Texts>

          <Title>
            Test video
          </Title>

          <ChannelName>
            LeadEngineer
          </ChannelName>

          <Info>
            660,908 views • 1 day ago
          </Info>

        </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card