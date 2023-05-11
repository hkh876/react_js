import "../styles/RadioButton.css"

function RadioButton(props) {
    const choice = props.choice
    const indexNumber = props.indexNumber
    const result = props.result
    const correctNumber = props.correctNumber
    let radioInputRef = props.radioInputRef
    const choiceNumber = choice.choiceNumber
    const currentElement = radioInputRef.current[indexNumber - 1]
    let titleClassName = ''

    if (result && currentElement != null) {
        const elementValue = Number(currentElement.value)
        if (currentElement.checked) {
            if (elementValue === correctNumber) {
                titleClassName = 'color-green'
            } else {
                titleClassName = 'color-red'
            } 
        } else {
            if (elementValue === correctNumber) {
                titleClassName = 'color-green'
            }
        }
    }

    return (
        <div className="choice">
            <input id={"choice_" + indexNumber} ref={elem => (radioInputRef.current[indexNumber - 1] = elem)} type="radio" name="choice" value={choiceNumber} disabled={result} />
            <label className={titleClassName}htmlFor={"choice_" + indexNumber}>{choice.content}</label>
        </div>
    );
}

export default RadioButton;