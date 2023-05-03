import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap:24px;
`
const Content = styled.div`
    flex:5;
`
const VideoWrapper = styled.div`

`

const Title = styled.h1`
    
`

const Details = styled.div`

`
const Info = styled.span`
    
`
const Buttons = styled.div`
    
`
const Button = styled.div`
    
`

const Recommendation = styled.div`
    flex:2;
`


const Video = () => {
  return (
    <Container>
        {/* Main Video content / Views / Likes&Dislikes */}
        <Content>
            <VideoWrapper>
                <iframe
                width="100%"
                height="680"
                src = "https://www.youtube.com/embed/k3Vfj-e1Ma4"
                title="Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />

            </VideoWrapper>
            <Title>
                Test Video
            </Title>
            <Details>
                <Info>
                    7,948,154 views • Jun 22,2022
                </Info>
                <Buttons>
                    buttons
                </Buttons>
            </Details>

        </Content>

        {/* Recommend Section*/}
        <Recommendation>
            Recommendation
        </Recommendation>

    </Container>
  )
}

export default Video