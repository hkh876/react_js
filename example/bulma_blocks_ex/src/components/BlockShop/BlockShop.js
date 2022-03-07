import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import './BlockShop.css'
import { getImageSrc } from 'utils/utils.js'
import FooterCategory from 'components/CommonBlock/FooterCategory'
import Product from "./Product"

function BlockShop() {
    const { products } = useSelector((state) => state.shop)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'UPDATE_PARAMS',
            payload: {
                main_color: 'success',
                title: 'BULMA SHOP',
            },
        })
    }, [dispatch])

    // render
    const categoryRender = Array.from({ length:6 }, (item, index) => {
        return <FooterCategory key={ `footer_category_${ index }` }/>
    })

    const productColumnCount = Math.ceil(products.length / 4)
    const productLoop = Array.from({ length: productColumnCount }, (item, cIndex) => {
        const elementLoop = Array.from({ length: 4 }, (item, eIndex) => {
            let currentIndex = cIndex * 4 + eIndex
            return (
                currentIndex < products.length ?
                <Product key={ products[currentIndex].id } info={ products[currentIndex] }/>
                : null
            )
        })

        return (
            <div key={ `product_column_${ cIndex }` } className="columns is-desktop">
                { elementLoop }
            </div>
        )
    })

    return (
        <div>
            <section className="p-5 mt-2">
                <div className="container is-max-widescreen">
                    <div className="columns">
                        <div className="column">
                            <figure className="image is-5by4">
                                <img src={ getImageSrc("main-product.jpg") } alt="main-product img"/>
                            </figure>
                        </div>
                        <div className="column">
                            <p className="has-text-success is-size-7 my-3 ls-1">
                                <span className="has-background-info-light p-1 box-radius has-text-weight-medium is-size-7-mobile">
                                    PETER ENGLAND
                                </span>
                            </p>
                            <h1 className="title is-3 is-size-4-mobile mb-0">
                                Striped Slim Fit Shirt with Patch Pocket
                            </h1>
                            <div className="mt-3">
                                <span className="icon is-small is-pulled-right has-text-gray mr-6 mt-1">
                                    <i className="far fa-eye" aria-hidden="true"></i>
                                    &nbsp;1.5K
                                    <span className="px-2">|</span>
                                    <i className="far fa-comment" aria-hidden="true"></i>
                                    &nbsp;5
                                </span>
                                <p className="has-text-success">
                                    <span className="icon-text">
                                        <span className="icon pl-6 wh-4">
                                            <i className="fas fa-star" aria-hidden="true"></i>
                                            <i className="fas fa-star" aria-hidden="true"></i>
                                            <i className="fas fa-star" aria-hidden="true"></i>
                                            <i className="fas fa-star" aria-hidden="true"></i>
                                            <i className="far fa-star" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                </p>
                            </div>
                            <p className="py-5">
                                Fam locavore kickstarter distillery. 
                                Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. 
                                XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. 
                                Everyday carry +1 seitan poutine tumeric. 
                                Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                            </p>
                            <div className="columns is-mobile">
                                <div className="column">
                                    <span className="has-text-weight-medium">Color:&nbsp;</span>
                                    <span className="icon is-clickable wh-4">
                                        <i className="fas fa-lg fa-circle has-text-gray-lighter" aria-hidden="true"></i>
                                    </span>
                                    <span className="icon is-clickable wh-4">
                                        <i className="fas fa-lg fa-circle" aria-hidden="true"></i>
                                    </span>
                                    <span className="icon is-clickable wh-4">
                                        <i className="fas fa-lg fa-circle has-text-success" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="column">
                                    <span className="has-text-weight-medium">Size:&nbsp;</span>
                                    <span>
                                        <div className="select is-small">
                                            <select>
                                                <option>SM</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </select>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <hr/>
                            <div className="columns is-mobile">
                                <div className="column">
                                    <h2 className="title is-4 is-size-5-mobile mt-2">$ 55.00</h2>
                                </div>
                                <div className="column px-3">
                                    <button className="button is-success is-pulled-right px-5">Purchase</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <div className="columns is-desktop">
                    <div className="column">
                        <p className="has-text-success py-3">
                            <span className="has-background-info-light p-1 box-radius has-text-weight-medium is-size-7-mobile">
                                ROOF PARTY POLAROID
                            </span>
                        </p>
                        <h1 className="title is-3 pb-5 my-1 is-size-5-mobile">
                            Download Our App for Better Experience
                        </h1>
                    </div>
                    <div className="column">
                        <div className="is-pulled-right">
                            <button className="button is-large has-background-light is-shadowless my-5 mx-4 is-hidden-mobile">
                                <span className="icon is-large">
                                    <i className="fab fa-google-play" aria-hidden="true"></i>
                                </span>
                                <span>
                                    <div className="columns">
                                        <div className="column">
                                            <p className="subtitle is-7 p-0 m-0">GET IT ON</p>
                                            <p className="subtitle is-4 p-0 m-0">Google Play</p>
                                        </div>
                                    </div>
                                </span>
                            </button>
                            <button className="button is-large has-background-light is-shadowless my-5 mx-4 is-hidden-mobile">
                                <span className="icon is-large">
                                    <i className="fab fa-apple" aria-hidden="true"></i>
                                </span>
                                <span>
                                    <div className="columns">
                                        <div className="column">
                                            <p className="subtitle is-7 p-0 m-0">Download on the</p>
                                            <p className="subtitle is-4 p-0 m-0">App Store</p>
                                        </div>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <h1 className="title is-3 is-size-4-mobile has-text-centered pt-5">Similar Products</h1>
            <section className="p-5">{ productLoop }</section>
            <hr/>
            <footer>
                <section className="p-5 footer">
                    <div className="columns">{ categoryRender }</div>
                    <hr/>
                    <p>Placeholder</p>
                    <div className="field is-grouped is-hidden-mobile">
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Find a repository"/>
                        </p>
                        <p className="control">
                            <button className="button is-success">Search</button>
                        </p>
                        <p className="control pr-6 mr-6">
                            Button Bitters chicharrones fanny pack
                            <br/>
                            waistcoat green juice
                        </p>
                        <span className="is-pulled-right pl-6 ml-6">
                            <span className="icon is-size-5 sns-icons">
                                <i className="fab fa-facebook-f pr-2" aria-hidden="true"></i>
                                <i className="fab fa-twitter pr-2" aria-hidden="true"></i>
                                <i className="fab fa-instagram pr-2" aria-hidden="true"></i>
                                <i className="fab fa-linkedin-in pr-6 mr-6" aria-hidden="true"></i>
                            </span>
                        </span>
                    </div>
                </section>
                <div className="has-background-light p-3">
                    <p>
                        © 2020 BULMA BLOCKS —@tejasmagade
                        <span className="is-pulled-right is-hidden-mobile">Enamel pin tousled raclette tacos irony</span>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default BlockShop