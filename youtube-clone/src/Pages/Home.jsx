import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Card from '../Components/Card'
import axios from 'axios'
import { useEffect } from 'react'

const Container = styled.div`
    display: flex;
    justify-content:space-between;
    flex-wrap:wrap;
`

const Home = ({type}) => {

  const [videos,setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const videosResponce = await axios.get(`/videos/${type}`);

      setVideos(videosResponce.data);

      console.log("Videos received ");
    }

    fetchVideos();

  }, [])

  return (
    <Container>
      {videos.map(video => (
        <Card key={video._id} video = {video}/>
      ))}
    </Container>
  )
}

export default Home