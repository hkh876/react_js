import { Link } from 'react-router-dom'

function ExampleList(props) {
    const info = props.info
    const listType = props.type

    return (
        <div className="column">
            <div className="box has-background-light is-shadowless">
                <span className="icon-text">
                    <span className="fa-stack fa-lg">
                        <i className={ `fas fa-circle fa-stack-2x has-text-${info.color}` } aria-hidden="true"></i>
                        <i className={ `${info.icon_class} fa-stack-1x fa-inverse has-text-${info.color}-light` } aria-hidden="true"></i>
                    </span>
                    <span>
                        <h1 className="title is-5 is-size-5-mobile pt-3 pl-3">{ info.title }</h1>
                    </span>
                </span>
                <p className="py-4 pl-2">
                    { info.description }
                </p>
                <span className="icon-text pl-2">
                    <span>
                        <Link to={ info.link_to } className={ `has-text-${info.color} is-size-6` }>
                            {
                                listType === "example" ? `See Example ${info.id} ` : "Learn More "
                            }
                            <span className="icon">
                                <i className={ `fas fa-arrow-right has-text-${info.color}` } aria-hidden="true"></i>
                            </span>
                        </Link>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default ExampleList