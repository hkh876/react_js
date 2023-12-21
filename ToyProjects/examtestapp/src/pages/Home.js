import { STATIC_EXAM_URL, STATIC_SAVED_EXAM_URL } from '../statics/StaticValues';
import CommonCategory from './CommonCategory';

function Home(props) {
    const navigateHook = props.navigateHook

    const onExamClick = () => {
        navigateHook(STATIC_EXAM_URL)
    }

    const onSavedExamClick = () => {
        navigateHook(STATIC_SAVED_EXAM_URL)
    }

    return (
        <>
            <CommonCategory contents={<button className="common-category-move-button" onClick={ ()=> onExamClick() }>문제 풀이</button>}></CommonCategory>
            <CommonCategory contents={<button className="common-category-move-button" onClick={ ()=> onSavedExamClick() }>저장 문제 풀이</button>}></CommonCategory>
        </>
    )
}

export default Home;