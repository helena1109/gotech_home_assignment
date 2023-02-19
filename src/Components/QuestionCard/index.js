import React, {useCallback} from "react";
import CardWrapper from "../CardWrapper";
import styled from "styled-components";
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";

const QuestionCard = ({data, handleChange, answers}) => {
    const {type, id, required, answerOptions, question} = data

    const isOtherOptionChecked = useCallback(() => {
        if (!answers[id]) {
            return false
        }
        return answerOptions.every(item => item !== answers[id])
    }, [answers, answerOptions, id])


    const renderAnswerOptions = () => {
        switch (type) {
            case "multiple-choice":
                return (<RadioGroup onChange={(e) => handleChange(e.target.value, id)}>
                        {answerOptions.map((answer, i) => {
                            return (
                                answer === "Other" ?
                                    <Box key={i} sx={{display: "flex", width: "100%"}}>
                                        <FormControlLabel key={i}
                                                          value={"Other"}
                                                          checked={answers[data.id] === "Other" || isOtherOptionChecked()}
                                                          control={<Radio/>}
                                                          label={`${answer}:`}/>
                                        <TextField
                                            value={isOtherOptionChecked() ? answer[id] : ""}
                                            required={answers[id] === "Other" && required}
                                            onChange={(e) => {
                                                handleChange(e.target.value, id)
                                            }}
                                            fullWidth variant="standard"/>
                                    </Box> :
                                    <FormControlLabel key={i} disabled={answer==="No"} value={answer}
                                                      checked={answers[id] === answer}
                                                      control={<Radio required={required}/>} label={answer}/>
                            )
                        })}
                    </RadioGroup>
                )
            case "open-ended":
                return (
                    <TextField sx={{width: "50%"}}
                               value={answers[id] || ""}
                               required={data.required}
                               label="Your answer" variant="standard" size="medium"
                               onChange={(e) => handleChange(e.target.value, id)}
                    />
                )
            default:
                break
        }
    }

    return (
        <CardWrapper>
            <FormControl required={required} fullWidth>
                <FormLabelStyled>{question}</FormLabelStyled>
                {renderAnswerOptions()}
            </FormControl>
        </CardWrapper>
    )
}


const FormLabelStyled = styled(FormLabel)`
  span {
    color: red;
  }

`
export default QuestionCard;