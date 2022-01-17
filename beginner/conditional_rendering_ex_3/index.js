class WarningBanner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const warning = this.props.warn
        if(!warning) {
            return null
        }

        return (
            <div className="warning">
                Warning!
            </div>
        )
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showWarning: false }
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }))
    }

    render() {
        return (
            <div>
                <WarningBanner warn={ this.state.showWarning } />
                <button onClick={ this.handleToggleClick }>
                    { this.state.showWarning ? 'Hide' : 'Show' }
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
)