class UserGreeting extends React.Component {
    render() {
        return (
            <h1>Welcome back!</h1>
        )
    }
}

class GuestGreeting extends React.Component {
    render() {
        return (
            <h1>Please sign up.</h1>
        )
    }
}

class Greeting extends React.Component {
    constructor(props){
        super(props)
        this.state = { isLoggedIn: false }
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let greeting
        
        if(isLoggedIn) {
            greeting = <UserGreeting />
        }
        else {
            greeting = <GuestGreeting />
        }

        return greeting
    }
}

ReactDOM.render(
    <Greeting isLoggedIn={ false } />,
    document.getElementById('root')
)
