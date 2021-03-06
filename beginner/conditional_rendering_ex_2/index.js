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
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn
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

class LoginButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button onClick={ this.props.onClick }>
                Login
            </button>
        )
    }
}

class LogoutButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button onClick={ this.props.onClick }>
                Logout
            </button>
        )
    }
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props)

        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = { isLoggedIn: false }
    }

    handleLoginClick() {
        this.setState(
            {
                isLoggedIn: true
            }
        )
    }

    handleLogoutClick() {
        this.setState(
            {
                isLoggedIn: false
            }
        )
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button

        if(isLoggedIn) {
            button = <LogoutButton onClick={ this.handleLogoutClick } />
        }
        else {
            button = <LoginButton onClick={ this.handleLoginClick } />
        }

        return (
            <div>
                <Greeting isLoggedIn={ isLoggedIn } />
                { button }
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)
