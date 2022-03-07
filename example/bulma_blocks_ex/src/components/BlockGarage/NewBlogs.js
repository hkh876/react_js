import { Link } from 'react-router-dom'

function NewBlogs(props) {
    const info = props.info

    return (
        <div className="column">
            <div className="box has-background-light has-text-centered is-shadowless">
                <div>
                    <h2 className="subtitle is-6 is-uppercase pb-2 has-text-gray">{ info.category }</h2>
                    <h1 className="title is-4 pb-5 is-size-5-mobile">{ info.title }</h1>
                </div>
                <div className="content">{ info.description }</div>
                <div>
                    <span className="icon-text">
                        <span>
                            <Link to={ info.link_to } className="has-text-danger is-size-6">
                                Learn More&nbsp;
                                <span className="icon">
                                    <i className="fas fa-arrow-right has-text-danger" aria-hidden="true"></i>
                                </span>
                            </Link>
                        </span>
                    </span>
                </div>
                <span className="icon is-small has-text-gray-light m-5">
                    <i className="far fa-eye" aria-hidden="true"></i>
                    &nbsp;{ info.view_count }
                    <span className="px-2">|</span>
                    <i className="far fa-comment" aria-hidden="true"></i>
                    &nbsp;{ info.reply_count }
                </span>
            </div>
        </div>
    )
}

export default NewBlogs