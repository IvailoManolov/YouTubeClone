import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    height:86vh;
    color:${({theme}) => theme.text};
`

const Wrapper = styled.div`
    display: flex;
    align-items:center;
    flex-direction:column;
    padding:20px 50px;
    background-color:${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.soft};
    gap:10px;
`

const Title = styled.h1`
    font-size:24px;
`

const SubTitle = styled.h2`
    font-size:20px;
    font-weight:300;
`

const Input = styled.input`
    border:1px solid ${({theme}) => theme.soft};
    border-radius:3px;
    padding: 10px;
    background-color:transparent;
    width:100%;
`

const Button = styled.button`
    border-radius:3px;
    border:none;
    padding: 10px 20px;
    cursor:pointer;
    font-weight:500;
    background-color:${({theme}) => theme.soft};
    color:${({theme}) => theme.textSoft};
`
const More = styled.div`
    display: flex;
    margin-top:10px;
    font-size:12px;
    color:${({theme}) => theme.textSoft};
`
const Links = styled.div`
    margin-left:50px;
`
const Link = styled.span`
    margin-left:30px;
`

const Signin = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                Sign in
            </Title>

            <SubTitle>
                to continue to YouTube
            </SubTitle>

            <Input placeholder='username'/>
            <Input placeholder='password' type="password"/>

            <Button>Sign in</Button>

            <Title>
                No account yet ?
            </Title>

            <Input placeholder='username'/>
            <Input placeholder='email' type='email'/>
            <Input placeholder='password' type="password"/>

            <Button>Sign up</Button>
        </Wrapper>
        <More>
            English(US)
            <Links>
                <Link>
                    Help
                </Link>

                <Link>
                    Privacy
                </Link>

                <Link>
                    Terms
                </Link>
            </Links>
        </More>
    </Container>
  )
}

export default Signin