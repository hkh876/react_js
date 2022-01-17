class EssayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 'Please write an essay about your favorite DOM element' }

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
        alert('An essay was submitted: ' + stateValue)
        event.preventDefault()
    }

    render() {
        const stateValue = this.state.value
        const handleSubmit = this.handleSubmit
        const handleChange = this.handleChange

        return (
            <form onSubmit={ handleSubmit }>
                <label>
                    Essay:
                    <textarea type="text" value={ stateValue } onChange={ handleChange }/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

ReactDOM.render(
    <EssayForm />,
    document.getElementById('root')
)