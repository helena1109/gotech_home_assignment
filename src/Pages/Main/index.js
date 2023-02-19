import React, {useEffect, useState, useCallback} from "react";
import styled from "styled-components";
import {fetchQuestionnaireById} from "../../API";
import {useParams, useNavigate} from "react-router-dom";
import QuestionnaireForm from "../../Components/QuestionnaireForm";
import Pagination from "../../Components/Pagination";
import SnackBar from "../../Components/SnackBar";


const MainPage = () => {
    const [questionnaireData, setQuestionnaireData] = useState({})
    const [answers, setAnswers] = useState({})
    const [isSnackBarOpen, setIsSnackBarOpen] = useState(false)
    const {id} = useParams()
    const navigate= useNavigate()

    useEffect(() => {
        const fetchData=async (id)=>{
            try{
                const res = await fetchQuestionnaireById(id)
                setQuestionnaireData(res)

            }catch (error){
                console.log("error:", error)
                navigate("/NotFound")
            }
        }
        fetchData(id)

    }, [id, navigate])


    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        console.log("Submitted answers:", answers)
        setAnswers({})
        setIsSnackBarOpen(true)
    }, [answers])

    const handleInputChange = useCallback((value, id) => {
        setAnswers({...answers, [id]: value})
    }, [answers])


    return (
        <PageWrapper>
            <QuestionnaireForm answers={answers} questions={questionnaireData.questions} handleSubmit={handleSubmit}
                               handleInputChange={handleInputChange}/>

            {
                questionnaireData.pagination && <Pagination pagination={questionnaireData.pagination}/>
            }

            <SnackBar isOpen={isSnackBarOpen} setIsOpen={setIsSnackBarOpen}/>
        </PageWrapper>


    )
}

const PageWrapper = styled.div``

export default MainPage;