import { useEffect, useState } from "react";
import axios from "axios";
import { STATIC_PUT_SAVE_EXAM_API, STATIC_SAVE_EXAM_CONFIRM_TEXT } from "../statics/StaticValues";

function SaveButton(props) {
    const [currentExam, setCurrentExam] = useState({ saved: false })
    const requestBody = { "saved": true }

    useEffect(() => {
        setCurrentExam(props.exam)
    }, [props.exam])

    const onSaveClick = () => {
        if (window.confirm(STATIC_SAVE_EXAM_CONFIRM_TEXT) === true) {
            const examId = currentExam.id

            axios.patch(
                STATIC_PUT_SAVE_EXAM_API + '/' + examId,
                requestBody,
            )
            .then(response => {setCurrentExam(response.data.data)})
            .catch(error => console.error(error))
        }
    }

    return (
        <button className="font-size-30 padding-all-40 margin-right-20" onClick={ () => onSaveClick() } disabled={currentExam.saved}>저장하기</button>
    )
}

export default SaveButton;