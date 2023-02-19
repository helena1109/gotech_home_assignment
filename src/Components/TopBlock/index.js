import React from "react";
import styled from "styled-components";
import CardWrapper from "../CardWrapper";


const TopBlock=()=>{
    return(
        <CardWrapperStyled>
            <Title>GoTech Questionnaire</Title>
            <TextBlock>
                Show me what you got!
                <div>*Required</div>
            </TextBlock>
        </CardWrapperStyled>
    )
}

const CardWrapperStyled = styled(CardWrapper)`
  border-top: ${({theme}) => `10px solid ${theme.color.primary}`};
`
const Title = styled.h1``

const TextBlock = styled.div`
  div {
    color: red;
    margin-top: 15px;
  }
`
export default TopBlock;