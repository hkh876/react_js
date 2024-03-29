import { useState, useEffect } from "react";
import axios from "axios";
import { STATIC_GET_BARISTA2_EXAM_API } from "../statics/StaticValues";
import "../styles/SavedQuestion.css"
import CommonQuestion from "./CommonQuestion";
import { useParams } from "react-router-dom";

function SavedQuestion(props) {
    const [examList, setExamList] = useState([])
    let { examId } = useParams()
    const parameters = {
        "examList": examList,
        "saved": true,
    }
    
    useEffect(() => {
        axios.get(STATIC_GET_BARISTA2_EXAM_API + '?id=' + examId)
        .then(
            response => {
                const exams = response.data.data
                setExamList([exams])
            }
        ).catch(error => console.error(error))
    }, [examId])

    const onBackClick = () => {
        props.navigateHook(-1)
    }
 
    const events = {
        "onBackClick": () => { onBackClick() },
    }

    return (
        <CommonQuestion parameters={parameters} events={events}></CommonQuestion>
    )
}

export default SavedQuestion;