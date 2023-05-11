import { useEffect, useState } from "react";
import axios from "axios";
import { STATIC_GET_PAST_EXAM_API } from "../statics/StaticValues";
import { Shuffle } from "../Utils";
import CommonQuestion from "./CommonQuestion";

function PastQuestion(props) {
    const [examList, setExamList] = useState([])
    const parameters = {
        "examList": examList,
    }

    useEffect(() => {
        axios.get(STATIC_GET_PAST_EXAM_API)
        .then(
            response => {
                const exams = response.data
                let shuffledList = exams

                Shuffle(shuffledList)
                setExamList(shuffledList)
            }
        ).catch(error => console.error(error))
    }, [])

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

export default PastQuestion;