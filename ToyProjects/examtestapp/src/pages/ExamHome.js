import { /*STATIC_EXPECTATION_QUESTION_URL, STATIC_PAST_QUESTION_URL, STATIC_SAVED_QUESTION_URL,*/ STATIC_BARISTA2_QUESTION_URL } from '../statics/StaticValues';
import CommonCategory from './CommonCategory';

function Exam(props) {
    const navigateHook = props.navigateHook

    /*
    const onPastQuestionClick = () => {
        navigateHook(STATIC_PAST_QUESTION_URL)
    }

    const onSavedQuestionClick = () => {
        navigateHook(STATIC_SAVED_QUESTION_URL)
    }

    const onExpectationQuestionClick = () => {
        navigateHook(STATIC_EXPECTATION_QUESTION_URL)
    }
    */
   
    const onBarista2Click = () => {
        navigateHook(STATIC_BARISTA2_QUESTION_URL)
    }

    return (
        /*
        <CommonCategory contents={
            <>
                <button className="padding-all-40 font-size-30" onClick={ ()=> onBarista2Click() }>바리스타2급</button>
                <button className="padding-all-40 font-size-30" onClick={ ()=> onPastQuestionClick() }>기출 문제</button>
                <button className="padding-all-40 font-size-30 margin-left-20" onClick={ ()=> onExpectationQuestionClick() }>예상 문제</button>
                <button className="padding-all-40 font-size-30 margin-left-20" onClick={ ()=> onSavedQuestionClick() }>저장 문제</button>
            </>
        }></CommonCategory>
        */
        <CommonCategory contents={
            <>
                <button className="padding-all-40 font-size-30" onClick={ ()=> onBarista2Click() }>바리스타2급</button>
            </>
        }></CommonCategory>
    )
}

export default Exam;