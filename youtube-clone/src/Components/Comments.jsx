import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import Comment from './Comment'

const Container = styled.div`
    
`

const NewComment = styled.div`
    display: flex;
    align-items:center;
    gap:10px;
`

const Avatar = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
`

const Input = styled.input`
    border:none;
    outline:none;
    border-bottom:3px solid ${({theme}) => theme.soft};
    background-color:transparent;
    padding: 5px;
    width: 100%
`

const Comments = ({videoId}) => {

    const[comments,setComments] = useState([]);
    const{currentUser} = useSelector((state) => state.user);

    useEffect(()=>{
        const fetchComments = async () => {
            try{
                const response = await axios.get(`/comments/${videoId}`);
                setComments(response.data);

            }catch(err){
                console.log(err);
            }
        }

        fetchComments();
    },[videoId]);

  return (
    <Container>
        <NewComment>
            <Avatar src={currentUser.img}/>
            <Input placeholder='Add a comment...'/>
        </NewComment>

        {comments.map(comment => (
            <Comment key={comment._id} comment={comment}/>
        ))}
        
    </Container>
  )
}

export default Comments