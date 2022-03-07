function Blogs(props) {
    const info = props.info

    return (
        <div className="column py-5">
            <div className="columns is-gapless is-multiline is-mobile">
                <div className="is-one-quarter pr-5">
                    <p className="has-text-centered has-text-gray">{ info.month }</p>
                    <hr className="px-5 my-2"/>
                    <p className="has-text-centered has-text-weight-semibold">{ info.day }</p>
                </div>
                <div className="column">
                    <p className="has-text-primary is-size-7-mobile">{ info.category }</p>
                    <h1 className="title is-4 my-4 is-size-5-mobile">{ info.title }</h1>
                    <p className="pb-5">{ info.description }</p>
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-32x32">
                                <img 
                                    src={ info.image_path } 
                                    alt={ `${ info.id } img` }
                                    className="is-rounded"/>
                            </figure>
                        </div>
                        <div>
                            <p className="title is-6">{ info.name }</p>
                            <p className="subtitle is-size-7 has-text-gray-light">{ info.job}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs