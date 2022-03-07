function Team(props) {
    const info = props.info

    return (
        <div className="card is-shadowless mb-4">
            <article className="media m-4">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={ info.image_path } className="is-rounded" alt={ `card ${ info.id } img`}/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <h5 className="pt-3 my-0">{ info.name }</h5>
                        <p className="py-0 my-0">{ info.job }</p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Team