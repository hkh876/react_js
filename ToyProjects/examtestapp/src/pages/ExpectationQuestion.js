import axios from "axios"
import { useEffect, useState } from "react"
import { STATIC_GET_EXPECTATION_EXAM_API } from "../statics/StaticValues"
import { Shuffle } from "../Utils"
import CommonQuestion from "./CommonQuestion"

function ExpectationQuestion(props) {
    const [examList, setExamList] = useState([])
    const parameters = {
        "examList": examList,
    }

    useEffect(() => {
        axios.get(STATIC_GET_EXPECTATION_EXAM_API)
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

export default ExpectationQuestion;