class Square extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const selected = this.props.selected
        const winSquare = this.props.winSquare
        
        let className = 'square'
        if(selected) {
            className += ' selected'
        }

        if(winSquare) {
            className += ' win-square'
        }

        return (
            <button 
                className={ className }
                onClick={ () => this.props.onClick() }>
                { this.props.value }
            </button>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    renderSquare(i) {
        const squareKey = 'square_' + i
        const winSquare = this.props.winSquares ? this.props.winSquares.includes(i) : false

        return (
            <Square 
                key={ squareKey }
                value={ this.props.squares[i] }
                selected={ this.props.selections[i] }
                winSquare={ winSquare }
                onClick={ () => this.props.onClick(i) }
            />
        )
    }

    render() {
        let boards = []
        for(let i=0; i<3; i++) {
            let squares = []
            const boardKey = 'board_' + i
            for(let j=0; j<3; j++) {
                squares.push(this.renderSquare(i * 3 + j))
            }

            boards.push(<div key={ boardKey } className='board-row'>{ squares }</div>)
        }
        
        return (
            <div>
                { boards }
            </div>
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                lastPositions: Array(2).fill(0),
                selections: Array(9).fill(false),
            }],
            stepNumber: 0,
            xIsNext: true,
            descSort: false,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        const { winner, winSquares } = calculateWinnner(squares)
        if(winner || squares[i]){
            return
        }

        let selections = Array(9).fill(false)
        selections[i] = true

        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares: squares,
                lastPositions: getPosition(i),
                selections: selections,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    handleSortClick() {
        this.setState({ descSort: !this.state.descSort })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        let { winner, winSquares } = calculateWinnner(current.squares)

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move (' + step['lastPositions'][0] + ', ' + step['lastPositions'][1] + ')' : 'Go to game start'

            return (
                <li key={ move }>
                    <button onClick={ () => this.jumpTo(move) }>{ desc }</button>
                </li>
            )
        })
        let status
        
        if(winner) {
            status = 'Winner: ' + winner
        }
        else {
            if(!current.squares.includes(null)) {
                status = 'Game is draw'
            }
            else {
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
            }
        }

        let descSort = this.state.descSort

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={ current.squares }
                        selections={ current.selections }
                        winSquares={ winSquares } 
                        onClick={ (i) => this.handleClick(i) }
                    />
                </div>
                <div className="game-info">
                    <div>
                        { status }
                    </div>
                    <button onClick={ () => this.handleSortClick() }>{ descSort ? 'Ascending' : 'Descending' }</button>
                    <ol>{ descSort ? moves.reverse() : moves }</ol>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
)

function calculateWinnner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    let winner = null
    let winSquares = null

    for(let i=0; i<lines.length; i++) {
        const [a, b, c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            winner = squares[a]
            winSquares = lines[i]
            break
        }
    }

    return { winner, winSquares }
}

function getPosition(index) {
    const positions = [
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 1],
        [2, 2],
        [2, 3],
        [3, 1],
        [3, 2],
        [3, 3],
    ]

    return positions[index]
}