class Reservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        const isGoing = this.state.isGoing
        const numberOfGuests = this.state.numberOfGuests
        const handleInputChange = this.handleInputChange

        return (
            <form>
                <label>
                    Is going:
                    <input 
                        name="isGoing"
                        type="checkbox"
                        checked={ isGoing }
                        onChange={ handleInputChange }
                    />
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={ numberOfGuests }
                        onChange={ handleInputChange }
                    />
                </label>
            </form>
        )
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
)