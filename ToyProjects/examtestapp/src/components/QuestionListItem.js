import "../styles/QuestionListItem.css"

function QuestionListItem(props) {
    const item = props.item

    return (
        <div className="question-item-container margin-bottom-10" onClick={props.onItemClick}>
            <span className="question-item-title">{props.indexNumber + '. ' + item.question}</span>
            <button className="question-item-delete-button min-width-70" onClick={props.onItemDeleteClick}>삭제하기</button>
        </div>
    )
}

export default QuestionListItem;