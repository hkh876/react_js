function Testimonials(props) {
    const info = props.info

    // render
    const dividerClass = props.divider || ""

    return (
        <div className="column is-centered has-text-centered">
            <figure className="image is-96x96 is-inline-block">
                <img src={ info.image_path } className="is-rounded" alt={ `${ info.name } img` }/>
            </figure>
            <p className="pt-5">{ info.description }</p>
            <div className={ `testimonials-divider my-5 ${ dividerClass }` }></div>
            <p className="has-text-black-ter has-text-weight-medium">{ info.name }</p>
            <p className="has-text-gray">{ info.job }</p>
        </div>
    )
}

export default Testimonials