function GreatProjects(props) {
    const info = props.info

    return (
        <div className="column">
            <div className="box has-background-light is-shadowless">
                <figure className="image is-5by3">
                    <img src={ info.image_path } alt={ `project ${ info.id } img` }/>
                </figure>
                <p className="has-text-danger pt-4 pb-1 is-size-7 has-text-weight-medium ls-1">SUBTITLE</p>
                <h1 className="title is-5 pb-4 my-1">{ info.title }</h1>
                <p>{ info.description }</p>
            </div>
        </div>
    )
}

export default GreatProjects