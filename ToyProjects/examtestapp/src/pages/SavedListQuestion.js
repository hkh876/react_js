import axios from "axios"
import { useEffect, useState } from "react"
import { STATIC_DELETE_EXAM_CONFIRM_TEXT, STATIC_EXAMS_API, STATIC_GET_SAVED_EXAM_API, STATIC_SAVED_QUESTION_URL } from "../statics/StaticValues"
import QuestionListItem from "../components/QuestionListItem"
import NotFoundComponents from "../components/NotFoundComponent"

function SavedListQuestion(props) {
    const [examList, setExamList] = useState([])

    useEffect(() => {
        axios.get(STATIC_GET_SAVED_EXAM_API)
        .then(
            response => {
                const exams = response.data
                setExamList(exams)
            }
        ).catch(error => console.error(error))
    }, [])

    if (examList.length > 0) {
        const onBackClick = () => {
            props.navigateHook(-1)
        }

        const onItemClick = (examId) => {
            props.navigateHook(STATIC_SAVED_QUESTION_URL + '/' + examId)
        }
    
        const onItemDeleteClick = (e, examId) => {
            e.stopPropagation();
    
            if (window.confirm(STATIC_DELETE_EXAM_CONFIRM_TEXT) === true) {
                const requestBody = { "save_status": false };
    
                axios.patch(
                    STATIC_EXAMS_API + '/' + examId, 
                    requestBody,
                )
                .then(response => { window.location.reload() })
                .catch(error => console.error(error));
            }
        }

        const itemView = examList.map((value, index) => {
            return <QuestionListItem 
                key={value.id}
                indexNumber={index + 1}
                item={value}
                onItemClick={() => onItemClick(value.id)}
                onItemDeleteClick={(e) => onItemDeleteClick(e, value.id)}
            ></QuestionListItem>
        })
    
        return (
            <div className="saved-question-container">
                <button className="font-size-40 margin-bottom-20" onClick={() => onBackClick()}>나가기</button>
                {itemView}
            </div>
        )
    }
    else {
        return <NotFoundComponents></NotFoundComponents>
    }
}

export default SavedListQuestion;