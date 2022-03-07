import { getImageSrc } from 'utils/utils.js'

function Product(props) {
    const info = props.info

    return (
        <div className="column">
            <figure className="image is-16by9">
                <img src={ getImageSrc(info.file_name) } alt={ info.file_name }/>
            </figure>
            <p className="has-text-success is-size-7 my-3 ls-1">
                <span className="has-background-info-light p-1 box-radius has-text-weight-medium is-size-7-mobile">{ info.category }</span>
            </p>
            <h1 className="title is-4 is-size-5-mobile my-0 py-0">{ info.title }</h1>
            <p className="is-size-6 pt-3">{ info.price }</p>
        </div>
    )
}

export default Product