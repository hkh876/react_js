import { STATIC_SAVED_QUESTION_URL } from '../statics/StaticValues';
import CommonCategory from './CommonCategory';

function Exam(props) {
    const navigateHook = props.navigateHook
    
    const onBarista2Click = () => {
        navigateHook(STATIC_SAVED_QUESTION_URL)
    }

    return (
        <CommonCategory contents={
            <>
                <button className="padding-all-40 font-size-30" onClick={ ()=> onBarista2Click() }>바리스타2급</button>
            </>
        }></CommonCategory>
    )
}

export default Exam;