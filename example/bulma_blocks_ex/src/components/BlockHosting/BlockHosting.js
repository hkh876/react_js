import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './BlockHosting.css'
import ExampleList from 'components/CommonBlock/ExampleList.js'
import Pricing from './Pricing.js'
import Testimonials from 'components/CommonBlock/Testimonials.js'
import Blogs from './Blogs.js'
import FooterCategory from 'components/CommonBlock/FooterCategory.js'

function BlockHosting() {
    const { services, price_infos:priceInfos, testimonials, blogs } = useSelector((state) => state.hosting)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'UPDATE_PARAMS',
            payload: {
                main_color: 'primary',
                title: 'BULMA HOSTING',
            },
        })
    }, [dispatch])

    // render
    const catoryRender = Array.from({ length: 6 }, (item, index) => { 
        return <FooterCategory key={ `footer_category_${ index }` }/> 
    })

    return (
        <main className="pt-3">
            <section className="p-5">
                <div className="columns is-desktop is-5">
                    <div className="column is-two-thirds">
                        <div className="is-hidden-mobile">
                            <h1 className="title is-3 is-size-4-mobile pt-6">
                                Unlimited Web Hosting with
                                <br className="is-hidden-mobile"/>
                                free CPanel for 1 Year
                            </h1>
                            <p>
                                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos
                                poke
                                beard tote bag.
                                Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
                                try-hard
                                chambray.
                            </p>
                            <div className="field is-grouped pt-5">
                                <p className="control">
                                    <button className="button is-primary px-5">Button</button>
                                </p>
                                <p className="control">
                                    <button className="button px-5">Button</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <figure className="image is-5by4">
                            <img 
                                src="https://images.unsplash.com/photo-1554098415-788601c80aef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="Hostring img"/>
                        </figure>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <div className="container is-centered has-text-centered pb-6">
                    <p className="has-text-primary pb-2 is-size-7-mobile">ROOF PARTY POLAROID</p>
                    <h1 className="title is-3 is-size-4-mobile">Our Services</h1>
                </div>
                <div className="columns is-desktop">
                    {
                        services.map((item, index) => {
                            return <ExampleList key={ item.id } info={ item } type="normal"/>
                        })
                    }
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <div className="container is-max-widscreen">
                    <div className="columns is-centered is-mobile is-variable is-1">
                        <div className="column">
                            <h1 className="title is-3 is-size-4-mobile has-text-centered py-0 my-0">2.7K</h1>
                            <p className="py-0 my-0 has-text-centered">Users</p>
                        </div>
                        <div className="column">
                            <h1 className="title is-3 is-size-4-mobile has-text-centered py-0 my-0">1.8K</h1>
                            <p className="py-0 my-0 has-text-centered">Subscribers</p>
                        </div>
                        <div className="column">
                            <h1 className="title is-3 is-size-4-mobile has-text-centered py-0 my-0">35</h1>
                            <p className="py-0 my-0 has-text-centered">Downloads</p>
                        </div>
                        <div className="column">
                            <h1 className="title is-3 is-size-4-mobile has-text-centered py-0 my-0">7</h1>
                            <p className="py-0 my-0 has-text-centered">Products</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <div className="container is-centered has-text-centered is-max-widescreen">
                    <h1 className="title is-3 is-size-4-mobile">Pricing</h1>
                    <p className="subtitle is-6 has-text-gray py-3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                    <div className="field has-addons has-addons-centered">
                        <p className="control">
                            <Link to="#" className="button is-primary px-5">Monthly</Link>
                        </p>
                        <p className="control">
                            <Link to="#" className="button px-5">Annually</Link>
                        </p>
                    </div>
                </div>
                <div className="columns pt-5 mt-5">
                    {
                        priceInfos.map((item, index) => {
                            return <Pricing key={ item.id } info={ item }/>
                        })
                    }
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <h1 className="title is-3 pb-3 is-size-4-mobile has-text-centered">Our Testimonials</h1>
                <div className="columns is-desktop">
                    { 
                        testimonials.map((item, index) => {
                            return <Testimonials key={ item.id } info={ item }/>
                        })
                    }
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <div className="container is-max-widescreen">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <h1 className="title is-3 is-size-4-mobile">
                                Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.
                            </h1>
                        </div>
                        <div className="column">
                            <button className="button is-primary mt-4 is-pulled-right is-hidden-mobile px-5">
                                <span className="icon is-small">
                                    <i className="fas fa-check" aria-hidden="true"></i>
                                </span>
                                <span>Buy Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <h1 className="title is-3 pb-3 is-size-4-mobile has-text-centered">Lastest Blogs</h1>
                <div className="columns is-desktop">
                    {
                        blogs.map((item, index) => {
                            return <Blogs key={ item.id } info={ item }/>
                        })
                    }
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <div className="columns is-desktop">
                    <div className="column">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241412.9702956596!2d72.89307474834375!3d19.016299244427916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f0b81f13ad%3A0x3c12f7681185f869!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1626510370040!5m2!1sen!2sin"
                            width="100%" height="100%" loading="lazy"
                            className="google-map"
                            >
                        </iframe>
                    </div>
                    <div className="column">
                        <h1 className="title is-3 is-size-4-mobile">Contact Us</h1>
                        <p className="subtitle is-6 has-text-gray mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <label className="label has-text-weight-normal">Name</label>
                        <input className="input" type="text" placeholder="Your Name"/>
                        <label className="label has-text-weight-normal pt-4">Email</label>
                        <input className="input" type="text" placeholder="Your Email"/>
                        <label className="label has-text-weight-normal pt-4">Message</label>
                        <textarea className="textarea" type="text" placeholder="Enter your message..." rows="7"></textarea>
                        <button className="button is-primary is-fullwidth mt-5">Button</button>
                        <p className="is-7 has-text-gray mt-3">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    </div>
                </div>
            </section>
            <hr/>
            <footer>
                <section className="p-5 footer">
                    <div className="columns">{ catoryRender }</div>
                    <hr/>
                    <p>Placeholder</p>
                    <div className="field is-grouped is-hidden-mobile">
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Find a repository"/>
                        </p>
                        <p className="control">
                            <button className="button is-primary">Search</button>
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
        </main>
    )
}

export default BlockHosting