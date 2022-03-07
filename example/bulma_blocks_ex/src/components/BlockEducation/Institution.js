import { Link } from 'react-router-dom'
import { getImageSrc } from 'utils/utils.js'

function Institution(props) {
    const info = props.info

    return (
        <div className="column">
            <figure className="image is-16x9 mb-5">
                <img src={ getImageSrc(info.file_name) } alt={ info.file_name }/>
            </figure>
            <h1 className="title is-4 pb-3 my-2 is-size-5-mobile">{ info.title }</h1>
            <p className="pb-3 mr-4">{ info.description }</p>
            <span className="icon-text">
                <span>
                    <Link to={ info.link_to } className="has-text-link is-size-6">
                        Learn More&nbsp;
                        <span className="icon">
                            <i className="fas fa-arrow-right has-text-link" aria-hidden="true"></i>
                        </span>
                    </Link>
                </span>
            </span>
        </div>
    )
}

export default Institution