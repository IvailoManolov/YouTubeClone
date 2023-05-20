import React from 'react'
import styled from 'styled-components'
import Card from '../Components/Card'
import Comments from '../Components/Comments'

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
    font-size:18px;
    font-weight:400;
    margin-top: 20px;
    margin-bottom: 10px;
    color:${({theme}) => theme.text};
`

const Details = styled.div`
display: flex;
align-items:center;
justify-content:space-between; 
`

const ChannelDetails = styled.div`
    display: flex;
`
const ChannelInfoDetails = styled.div`
    display: flex;
    flex-direction:column;
`

const Recommendation = styled.div`
    flex:2;
`
const ChannelImage = styled.img`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:#999;
`

const ChannelName = styled.h2`
  font-size:14px;
  color: ${({theme}) => theme.textSoft};
  margin:0px 0px;
  padding:5px;
`
const Info = styled.div`
  font-size:10px;
  margin:0px 5px;
  color: ${({theme}) => theme.textSoft};
`

const SubscribeButton = styled.button`
    background:${({theme}) => theme.subButton};
    color:${({theme}) => theme.bg};
    font-size:14px;
    font-weight:500;
    cursor:pointer;
    border:none;
    margin:0px 15px;
    border-radius:50px;
    padding:10px;
`

const Buttons = styled.div`
    display: flex;
    padding:8px;
    background: ${({theme}) => theme.descriptionBackground};
    border-radius:25px;
    margin-right:10px;
`

const ButtonHolder = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
`

const Button = styled.div`
    display: flex;
    margin:0px 5px;
    cursor:pointer;

    :hover{
    color:${({theme}) => theme.textSoft};
    }

    color:${({theme}) => theme.bg};
`

const DescriptionSection = styled.div`
    display: flex;
    color:${({theme}) => theme.text};
    background: ${({theme}) => theme.descriptionBackground};
    flex-direction:column;
    width:100%;
    height:150px;
    padding:5px;
    border-radius:10px;
    margin-top:10px;
`

const DescriptionSectionDetails = styled.div`
    display: flex;
    width:25%;
    font-size:17px;
    font-weight:600;
    margin-bottom:10px;
    height:20px;
`

const Description = styled.div`
    display: flex;
    font-size:15px;
    font-weight:400;
`

const Video = () => {
  return (
    <Container>
        {/* Main Video content / Views / Likes&Dislikes */}
        <Content>
            <VideoWrapper>
                <iframe
                width="100%"
                height="600"
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
                <ChannelDetails>
                    <ChannelImage />

                    <ChannelInfoDetails>
                        <ChannelName>
                            LeadEngineer
                        </ChannelName>
                        <Info>
                            11.3M subscribers
                        </Info>
                    </ChannelInfoDetails>

                    <SubscribeButton>
                        Subscribe
                    </SubscribeButton>

                </ChannelDetails>

                <ButtonHolder>
                <Buttons>
                    <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1 h-1" height={"20px"} width={"20px"}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                    1.8K
                     |
                    </Button>
                     <Button>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1 h-1" height={"20px"} width={"20px"}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                    </svg>
                     </Button>
                </Buttons>

                <Buttons>
                    <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1 h-1" height={"20px"} width={"20px"}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                    </svg>

                        Share
                    </Button>
                </Buttons>

                <Buttons>
                    <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-1" height={"20px"} width={"20px"}>
                        <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                    </svg>


                        Download
                    </Button>
                </Buttons>
    
                </ButtonHolder>
                
            </Details>
            

            <DescriptionSection>

                <DescriptionSectionDetails>
                    50K views Apr 7, 2022
                </DescriptionSectionDetails>

                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi culpa, consequuntur, cum quasi assumenda minus ut praesentium fuga similique eum odit sint quibusdam rem, vitae eaque harum ipsam libero.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem saepe numquam delectus similique aspernatur corporis doloribus error laboriosam quod, repellat hic? Animi doloremque perferendis consequatur reiciendis quo aliquam qui unde?
                    Lorem ipsum dolor sit amet consectetur auptas adipisci at, commodi dolorem inventore error perferendis placeat similique vel odit in alias iste omnis.
                </Description>

            </DescriptionSection>
            <hr/>
            
            <Comments/>

        </Content>

        {/* Recommend Section*/}
        <Recommendation>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
        </Recommendation>

    </Container>
  )
}

export default Video