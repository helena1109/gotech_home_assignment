import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const NotFoundPage=()=>{
    return(
        <Wrapper>
            <Title>Oops!</Title>
            <TextBlock>Page not found</TextBlock>
            <Link to={"/"}>
                <HomeBtn>
                    <HomeIcon/>
                </HomeBtn>
            </Link>
        </Wrapper>
    )
}


const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title=styled.h1`
  font-size: 80px;
  color: ${({theme}) => theme.color.secondary};
  margin-bottom: 20px;
`

const TextBlock=styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`

const HomeBtn=styled.div`
  color: ${({theme}) => theme.color.primary};
  cursor: pointer;
  svg{
    font-size: 40px;
  }
`


export default NotFoundPage;