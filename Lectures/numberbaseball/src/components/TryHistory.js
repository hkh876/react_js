function TryHistory(props) {
    return (
        <ul>
            <li>{props.try.tryInput} - {props.try.tryResult}</li>
        </ul>
    );
}

export default TryHistory;