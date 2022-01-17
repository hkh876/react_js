class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                value: event.target.value
            }
        )
    }

    handleSubmit(event) {
        const stateValue = this.state.value
        alert('A name was submitted: ' + stateValue)
        event.preventDefault()
    }

    render() {
        const stateValue = this.state.value
        const handleSubmit = this.handleSubmit
        const handleChange = this.handleChange

        return (
            <form onSubmit={ handleSubmit }>
                <label>
                    Name:
                    <input type="text" value={ stateValue } onChange={ handleChange }/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
)