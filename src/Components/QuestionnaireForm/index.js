import React, {Fragment} from "react";
import QuestionCard from "../QuestionCard";
import styled from "styled-components";
import {Button} from "@mui/material";


const QuestionnaireForm=({questions, answers, handleInputChange, handleSubmit})=>{
    const renderAdditionalQuestions = (data) => {
        const {additionalQuestion, id} = data
        if (answers[id] === additionalQuestion.causedAnswer) {
            return <QuestionCard data={additionalQuestion}
                                 answers={answers}
                                 handleChange={handleInputChange}/>
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            {
                questions && questions.map(data => {
                    const {additionalQuestion, id} = data
                    return (
                        <Fragment key={id}>
                            <QuestionCard data={data} handleChange={handleInputChange} answers={answers}/>
                            {additionalQuestion && renderAdditionalQuestions(data)}
                        </Fragment>
                    )
                })}

            <ButtonWrapper>
                <StyledButton variant="contained"
                              type="submit">
                    Submit
                </StyledButton>
            </ButtonWrapper>
        </form>
    )
}

const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    background-color: ${({theme}) => theme.color.primary};
    text-transform: none;

    &:hover {
      background-color: ${({theme}) => theme.color.secondary}
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`


export default QuestionnaireForm;