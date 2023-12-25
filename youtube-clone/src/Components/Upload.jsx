import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import styled from 'styled-components';

import {getStorage, ref, uploadBytesResumable,getDownloadURL} from "firebase/storage";
import app from '../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
width: 100%;
height: 100%;
position:absolute;
top:0;
left:0;
background-color:#000000a7;
display: flex;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
width:600px;
height:600px;
background-color:${({theme}) => theme.bgLighter};
color:${({theme}) => theme.text};
padding:20px;
display: flex;
flex-direction:column;
gap: 20px;
position:relative;
`
const Close = styled.div`
position:absolute;
top:10px;
right:10px;
cursor:pointer;
`
const Title = styled.h1`
text-align:center;
`

const Input = styled.input`
    border:1px solid ${({theme}) => theme.soft};
    color:${({theme}) => theme.text};
    border-radius:3px;
    padding:10px;
    background-color:transparent;
`
const Description = styled.textarea`
    border:1px solid ${({theme}) => theme.soft};
    color:${({theme}) => theme.text};
    border-radius:3px;
    padding:10px;
    background-color:transparent;
`
const Button = styled.button`
    border-radius:3px;
    border:none;
    padding:10px 20px;
    font-weight:500;
    cursor:pointer;
    background-color:${({theme}) => theme.soft};
    color:${({theme}) => theme.textSoft};
`
const Label = styled.label`
font-size:14px;
`


const Upload = ({setIsOpen}) => {
    
    // The states for the uploadables.
    const[img,setImg] = useState(null);
    const[video,setVideo] = useState(null);
    const[inputs,setInputs] = useState({});
    const[tags,setTags] = useState([]);

    const navigate = useNavigate();

    
    // Uploading loading bar.
    const[imgPercentage,setImgPercentage] = useState(0);
    const[videoPercentage,setVideoPercentage] = useState(0);

    const handleUpload = async(e)=>{
        e.preventDefault();

        try{
            const response = await axios.post("/videos",{...inputs,tags});
            setIsOpen(false);
            navigate(`/video/${response.data._id}`);
        }catch(err){
            console.log(err);
        }
    }

    const handleChange = e => {
        setInputs(prev => {
            return{...prev,[e.target.name]:e.target.value}
        })
    }

    //Split tags based on a comma seperator.
    const handleTags = (e) =>{
        setTags(e.target.value.split(","));
    }

    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);

        // Get unique filename.
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef,file);

        uploadTask.on('state_changed', (snapshot) => {
            //Calculate progress
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            urlType === "imgUrl" ? setImgPercentage(Math.round(progress)) : setVideoPercentage(Math.round(progress));

            switch(snapshot.state){
                case 'paused' : console.log('Upload is paused'); break;
                case 'running' : console.log('Upload is running'); break;
                default : break;
            }
        },(error) => {},
        () => {
            // Uploaded successfully, get the URL.
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                setInputs(prev => {
                    return{...prev, [urlType]:downloadUrl}
                })
            })
        }
        );
    }

    // Upload when a video is chosen
    useEffect(()=>{
        video && uploadFile(video,'videoUrl');
    },[video]);

    // Upload when an img is chosen
    useEffect(()=>{
        img && uploadFile(img, 'img');
    },[img]);

  return (
    <Container>
        <Wrapper>
            <Close onClick={()=>setIsOpen(false)}>
                X
            </Close>

            <Title>
                Upload a new video
            </Title>

            <Label>
                Video
            </Label>

                {/* Take the first video file chosen */}
           {videoPercentage > 0 ? ("Uploading : " + videoPercentage) :
           (
                <Input type="file" accept="video/*" onChange={e=>setVideo(e.target.files[0])}/>
           )}

                {/* Modify the Title */}
            <Input type="text" placeholder="Title" name="title" onChange={handleChange} />

                {/* Modify the Description */}
            <Description placeholder="Video description" rows={8} name="description" onChange={handleChange} />

                {/* Modify the tags */}
            <Input type="text" placeholder="Seperate tags with a comma" onChange={handleTags}/>

            <Label>
                Thumbnail image
            </Label>
            
                {/* Take the first image file chosen */}
            {imgPercentage > 0 ? ("Uploading : " + imgPercentage) :
           (
            <Input type="file" accept="image/*" onChange={e=>setImg(e.target.files[0])} />
           )}
            

            <Button onClick={handleUpload}>
                Upload
            </Button>
        </Wrapper>
    </Container>
  )
}

export default Upload