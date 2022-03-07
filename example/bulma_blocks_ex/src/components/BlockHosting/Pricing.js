function Pricing(props) {
    const info = props.info
    const optionLength = info.options.length
    const optionLastIndex = optionLength - 1
    const isPopular = info.is_popular

    // render
    const isTopMarginClass = (optionLength !== 4 ? "mt-5" : "")
    const isPopularClass = (isPopular ? "price-popular" : "")
    const isPopularButtonClass = (isPopular ? "is-primary" : "has-background-gray")
    let popularRender = null
    
    if(isPopular) {
        popularRender = (
            <p className="has-text-primary is-pulled-right">
                <span 
                className="has-background-info-light p-1 box-radius has-text-weight-medium is-size-7-mobile"
                >POPULAR
                </span>
            </p>
        )
    }

    return (
        <div className="column">
            <div className={`card is-shadowless p-5 price-card ${ isPopularClass }`}>
                { popularRender }
                <p className="has-text-weight-medium is-size-6">{ info.title }</p>
                <h2 className="title is-2">
                    { info.price }
                    { info.price === 'Free' ? null : <span className="subtitle is-4 has-text-gray">&nbsp;/mo</span> } 
                </h2>
                <hr/>
                {
                    info.options.map((item, index) => {
                        const isLessClass = ( optionLength <= 4 ? "pb-6" : "")
                        const isLastClass = ( index === optionLastIndex ? "pt-1" : "py-1" )
                        const isPopularClass = (isPopular ? "has-text-primary" : "")
                        
                        return (
                            <span className={ `icon-text ${ isLastClass } ${ isLessClass }` } key={ `option_${ index }` }>
                                <span className="icon">
                                    <i className={ `fas fa-check ${ isPopularClass }` } aria-hidden="true"></i>
                                </span>
                                <span>{ item }</span>
                            </span>
                        )
                    })
                }
                {
                    <button className={ `button is-fullwidth ${ isPopularButtonClass } ${ isTopMarginClass }` }>
                        <span className="has-text-light">Button</span>
                        <span className="icon is-small">
                            <i className="fas fa-arrow-right has-text-light" aria-hidden="true"></i>
                        </span>
                    </button>
                }
                <p className="help">Literally you probably haven't heard of them jean shorts.</p>
            </div>
        </div>
    )
}

export default Pricing