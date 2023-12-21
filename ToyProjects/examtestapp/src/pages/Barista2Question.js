import { useEffect, useState } from "react";
import axios from "axios";
import { STATIC_GET_BARISTA2_EXAM_LIST_API } from "../statics/StaticValues";
import { Shuffle } from "../Utils";
import CommonQuestion from "./CommonQuestion";

function Barista2Question(props) {
    const [examList, setExamList] = useState([])
    const parameters = {
        "examList": examList,
    }

    useEffect(() => {
        axios.get(STATIC_GET_BARISTA2_EXAM_LIST_API)
        .then(
            response => {
                const exams = response.data.dataList
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

export default Barista2Question;