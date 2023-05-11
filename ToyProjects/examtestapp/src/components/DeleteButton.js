import { useEffect, useState } from "react";
import axios from "axios";
import { STATIC_DELETE_EXAM_CONFIRM_TEXT, STATIC_EXAMS_API } from "../statics/StaticValues";

function DeleteButton(props) {
    const [currentExam, setCurrentExam] = useState({ saveStatus: false });
    const requestBody = { "save_status": false };
    
    useEffect(() => {
        setCurrentExam(props.exam)
    }, [props.exam])

    const onDeleteClick = () => {
        if (window.confirm(STATIC_DELETE_EXAM_CONFIRM_TEXT) === true) {
            const examId = currentExam.id;

            axios.patch(
                STATIC_EXAMS_API + '/' + examId, 
                requestBody,
            )
            .then(response => { setCurrentExam(response.data); })
            .catch(error => console.error(error));
        }
    }

    return (
        <button className="font-size-30 padding-all-40 margin-right-20" onClick={ ()=> onDeleteClick() } disabled={!currentExam.saveStatus}>삭제하기</button>
    )
}

export default DeleteButton;