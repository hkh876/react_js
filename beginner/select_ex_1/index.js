class FlavorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 'coconut' }

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
        alert('Your favorite flavor is: ' + stateValue)
        event.preventDefault()
    }

    render() {
        const stateValue = this.state.value
        const handleSubmit = this.handleSubmit
        const handleChange = this.handleChange

        return (
            <form onSubmit={ handleSubmit }>
                <label>
                    Pick your favorite flavor:
                    <select value={ stateValue } onChange={ handleChange }>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root')
)