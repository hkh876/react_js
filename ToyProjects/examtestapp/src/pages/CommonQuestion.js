import { useRef, useState } from "react"
import { Shuffle } from "../Utils"
import "../styles/CommonQuestion.css"
import RadioButton from "../components/RadioButton"
import SaveButton from "../components/SaveButton"
import DeleteButton from "../components/DeleteButton"
import TipComponent from "../components/TipComponent"
import NotFoundComponents from "../components/NotFoundComponent"
import { STATIC_SERVER_DOMAIN } from "../statics/StaticValues"

function CommonQuestion(props) {
    const [resultState, setResultState] = useState(false)
    const questionIndex = useRef(1)
    const currentChoices = useRef([])
    const radioInputRef = useRef([])
    const correctCount = useRef(0)
    const incorrectCount = useRef(0)
    const parameters = props.parameters
    const events = props.events
    const examList = parameters.examList
    let examIndex = questionIndex.current - 1
    const currentExam = examList.length > 0 ? examList[examIndex] : null
    
    // Event
    const onSubmitClick = () => {
        let checked = false
        radioInputRef.current.forEach(element => {
            const elementValue = Number(element.value)
            if (element.checked) {
                checked = true
                if (elementValue === currentExam.correctNumber) {
                    correctCount.current += 1
                } else {
                    incorrectCount.current += 1
                } 
            }
        });

        if (checked) {
            setResultState(true)
        }
    }

    const onNextClick = () => {
        if (examList.length === questionIndex.current) {
            alert("마지막 문제 입니다.");
        } else {
            questionIndex.current += 1
            radioInputRef.current.forEach((value, index) => {
                value.checked = false
            })
            setResultState(false)
        }
    }

    if (currentExam != null) {
        const passageImageUrl = STATIC_SERVER_DOMAIN + currentExam.imageUrl

        // initialize
        if (!resultState) {
            let shuffledList = []
            currentExam.choices.forEach((element, index) => {
                element.choiceNumber = index + 1
                shuffledList.push(element)
            });

            Shuffle(shuffledList)
            currentChoices.current = shuffledList
        } 

        const choiceView = currentChoices.current.map((value, index) => {
            return <RadioButton 
                key={index}
                choice={value}
                indexNumber={index + 1}
                result={resultState}
                radioInputRef={radioInputRef}
                correctNumber={currentExam.correctNumber}
            ></RadioButton>
        })

        return (
            <div>
                <div>
                    <button className="font-size-40" onClick={events.onBackClick}>나가기</button>
                </div>
                <div className="result-counter-container margin-bottom-10">
                    <div>
                        <span className="color-green">맞은 문제 : </span>
                        <span className="result-counter min-width-30">{correctCount.current}</span>
                    </div>
                    <div>
                        <span className="color-red">틀린 문제 : </span>
                        <span className="result-counter min-width-30">{incorrectCount.current}</span>
                    </div>
                </div>
                <div className="question-contents">
                    <span className="question">{ questionIndex.current + ". " + currentExam.question }</span>
                    { currentExam.hasPassage && (
                        <div className="passage-image-container">
                            <img className="passage-image" src={passageImageUrl} alt="This is passage"></img>
                        </div>
                    )}
                    <div className="choice-container">
                        {choiceView}
                    </div>
                </div>
                <div className="action-container">
                    { parameters.isSaved === true ? <DeleteButton exam={currentExam}></DeleteButton> : <SaveButton exam={currentExam}></SaveButton> }
                    <button className="font-size-30 padding-all-40" onClick={ () => onSubmitClick() }>제출하기</button>
                    { resultState ? <button className="font-size-30 padding-all-40 margin-left-20" onClick={ ()=> onNextClick() }>다음문제</button> : null }
                </div>
                { resultState ? <TipComponent choices={currentChoices.current}></TipComponent> : null }
            </div>
        )
    } else {
        return <NotFoundComponents></NotFoundComponents>
    }
}

export default CommonQuestion;