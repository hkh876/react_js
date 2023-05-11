import { useEffect, useState } from "react";
import axios from "axios";
import { STATIC_EXAMS_API, STATIC_SAVE_EXAM_CONFIRM_TEXT } from "../statics/StaticValues";

function SaveButton(props) {
    const [currentExam, setCurrentExam] = useState({ saveStatus: false })
    const requestBody = { "save_status": true }

    useEffect(() => {
        setCurrentExam(props.exam)
    }, [props.exam])

    const onSaveClick = () => {
        if (window.confirm(STATIC_SAVE_EXAM_CONFIRM_TEXT) === true) {
            const examId = currentExam.id

            axios.patch(
                STATIC_EXAMS_API + '/' + examId,
                requestBody,
            )
            .then(response => {setCurrentExam(response.data)})
            .catch(error => console.error(error))
        }
    }

    return (
        <button className="font-size-30 padding-all-40 margin-right-20" onClick={ () => onSaveClick() } disabled={currentExam.saveStatus}>저장하기</button>
    )
}

export default SaveButton;