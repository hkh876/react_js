class Blog extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const posts = this.props.posts
        const sidebar = (
            <ul>
                {posts.map((post) =>
                    <li key={ post.id }>
                        { post.title }
                    </li>
                )}
            </ul>
        )
        const content = posts.map((post) =>
            <div key={ post.id }>
                <h3>{ post.title }</h3>
                <p>{ post.content }</p>
            </div>
        )

        return (
            <div>
                { sidebar }
                <hr />
                { content }
            </div>
        )
    }
}

const posts = [
    { id: 1, title: 'Hello react', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
]
ReactDOM.render(
    <Blog posts={ posts }/>,
    document.getElementById('root')
)