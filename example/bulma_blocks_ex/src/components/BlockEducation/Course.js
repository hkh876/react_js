import { getImageSrc } from 'utils/utils.js'

function Course(props) {
    const info = props.info
    
    // render
    const ratingRender = Array.from({ length: 5 }, (item, index) => {
        if(index >= info.rating) {
            return ( <i key={ `rating_${ index }` } className="far fa-star" aria-hidden="true"></i> )
        }
        else {
            return ( <i key={ `rating_${ index }` } className="fas fa-star" aria-hidden="true"></i> )
        }
    })

    return (
        <div className="column">
            <div className="card is-shadowless">
                <div className="card-image">
                    <figure className="image is-2by1">
                        <img src={ getImageSrc(info.file_name) } alt={ info.file_name }/>
                    </figure>
                </div>
                <div className="card-content">
                    <div>
                        <h1 className="title is-4 mb-3 is-size-5-mobile">{ info.title }</h1>
                        <p className="pt-0 mt-0 is-pulled-right has-line-through">{ info.price }</p>
                        <p className="has-text-link pb-5">
                            <span className="icon-text">
                                <span className="icon pl-6">{ ratingRender }</span>
                            </span>
                        </p>
                    </div>
                    <div className="content">{ info.description }</div>
                    <div className="columns is-mobile">
                        <div className="column">
                            <h2 className="title is-4 is-size-5-mobile mt-2">{ info.discount_price }</h2>
                        </div>
                        <div className="column px-3">
                            <button className="button is-link is-pulled-right">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course