class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const value = this.props.value

        return (
            <li>{ value }</li>
        )
    }
}

class NumberList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const numbers = this.props.numbers
        const listItems = numbers.map((number) =>
            <ListItem key={ number.toString() } value={ number }/>
        )

        return (
            <ul>{ listItems }</ul>
        )
    }
}

const numbers = [1, 2, 3, 4, 5]
ReactDOM.render(
    <NumberList numbers={ numbers } />,
    document.getElementById('root')
)