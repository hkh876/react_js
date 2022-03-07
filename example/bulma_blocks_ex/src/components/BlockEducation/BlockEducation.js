import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './BlockEducation.css'
import { getImageSrc } from 'utils/utils.js'
import FooterCategory from "components/CommonBlock/FooterCategory"
import Testimonials from "components/CommonBlock/Testimonials"
import Institution from "./Institution"
import Course from "./Course"

function BlockEducation() {
    const { testimonials, institutions, courses } = useSelector((state) => state.education)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'UPDATE_PARAMS',
            payload: {
                main_color: 'link',
                title: 'BULMA EDUCATION',
            },
        })
    }, [dispatch])

    // render
    const categoryRender = Array.from({ length: 4 }, (item, index) => {
        return <FooterCategory key={ `footer_category_${ index }` }/>
    })

    const courseColumnCount = Math.ceil(courses.length / 3)
    const courseLoop = Array.from({ length: courseColumnCount }, (item, cIndex) => {
        const elementLoop = Array.from({ length: 4 }, (item, eIndex) => {
            let currentIndex = cIndex * 4 + eIndex
            return (
                currentIndex < courses.length ?
                <Course key={ courses[currentIndex].id } info={ courses[currentIndex] }/>
                : null
            )
        })

        return (
            <div key={ `course_column_${ cIndex }` }  className="columns is-desktop">
                { elementLoop }
            </div>
        )
    })

    return (
        <div>
            <section className="p-5 pt-4">
                <div className="container is-max-widescreen is-centered has-text-centered">
                    <figure className="image is-inline-block">
                        <img src={ getImageSrc('hero.jpg') } alt="hero img"/>
                    </figure>
                    <h1 className="title is-3 is-size-4-mobile pt-3">Welcome to Bulma Education</h1>
                    <p className="pb-5">
                        Kickstarter biodiesel roof party wayfarers cold-pressed. 
                        Palo santo live-edge tumeric scenester copper mug flexitarian. 
                        Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.
                    </p> 
                    <div className="field is-grouped is-grouped-centered is-hidden-mobile">
                        <p className="control">
                            <input className="input edu-search-input" type="text" placeholder="Find a repository"></input>
                        </p>
                        <p className="control">
                            <button className="button is-link px-5">Search</button>
                        </p>                 
                    </div>
                    <p className="help pb-5">Neutra shabby chic ramps, viral fixie.</p>
                    <div>
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
            </section>
            <hr/>
            <section className="p-5">
                <div className="columns is-desktop mb-4">
                    <div className="column">
                        <h1 className="title is-3 pb-2 mb-0 is-size-4-mobile">We are Best Institution</h1>
                        <div className="insti-div"></div>
                    </div>
                    <div className="column">
                        <p className="pb-4 mr-4">
                            Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. 
                            Viral gochujang bitters dreamcatcher.
                        </p>
                    </div>
                </div>
                <div className="columns id-desktop">
                    {
                        institutions.map((item, index) => {
                            return <Institution key={ item.id } info={ item }/>
                        })
                    }
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <div className="columns is-variable is-6">
                    <div className="column">
                        <h4 className="title is-4 pt-5">Take the World's Best Courses online from us!</h4>
                        <p className="mt-0">
                            Pour-over craft beer pug drinking vinegar live-edge gastropub, 
                            keytar neutra sustainable fingerstache kickstarter.
                        </p>
                        <div className="columns pt-5 mt-5 is-mobile is-variable is-1">
                            <div className="column">
                                <h1 className="title is-3 is-size-4-mobile py-0 my-0">2.7K</h1>
                                <p className="py-0 my-0">Users</p>
                            </div>
                            <div className="column">
                                <h1 className="title is-3 is-size-4-mobile py-0 my-0">1.8K</h1>
                                <p className="py-0 my-0">Subscribers</p>
                            </div>
                            <div className="column">
                                <h1 className="title is-3 is-size-4-mobile py-0 my-0">35</h1>
                                <p className="py-0 my-0">Downloads</p>
                            </div>
                            <div className="column">
                                <h1 className="title is-3 is-size-4-mobile py-0 my-0">7</h1>
                                <p className="py-0 my-0">Products</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <figure className="image is-2by1">
                            <img src={ getImageSrc("statistics.jpg") } alt="statistics img"/>
                        </figure>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <h1 className="title is-3 is-size-4-mobile has-text-centered mb-2">Our Special Courses</h1>
                <p className="has-text-centered pb-5">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. 
                    Gastropub indxgo juice poutine, ramps microdosing banh mi pug.
                </p>
                { courseLoop }
            </section>
            <hr/>
            <section className="p-5">
                <div className="columns is-desktop">
                    <div className="column">
                        <p className="has-text-link py-3">
                            <span className="has-background-info-light p-1 box-radius has-text-weight-medium is-size-7-mobile">
                                ROOF PARTY POLAROID
                            </span>
                        </p>
                        <h1 className="title is-3 pb-5 my-1 is-size-5-mobile">Download Our App For Great Learning</h1>
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
            <section className="p-5">
                <div className="columns is-desktop">
                    {
                        testimonials.map((item, index) => {
                            return <Testimonials key={ item.id } info={ item } divider="edu"/>
                        })
                    }
                </div>
            </section>
            <footer>
                <section className="p-5 footer">
                    <div className="columns">
                        { categoryRender }
                        <div className="column">
                            <span className="icon-text">
                                <span className="icon fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x has-text-link" aria-hidden="true"></i>
                                    <i className="fas fa-asterisk fa-stack-1x fa-inverse" aria-hidden="true"></i>
                                </span>
                                <span>
                                    <h3 className="title is-5 pl-3 pt-3">BULMA EDUCATION</h3>
                                </span>
                                <p className="pt-3">Air plant banjo lyft occupy retro adaptogen indego</p>
                            </span>
                        </div>
                    </div>
                </section>
                <div className="has-background-light p-3">
                    <p>
                        © 2020 BULMA BLOCKS —@tejasmagade
                        <span className="is-pulled-right pl-6 ml-6">
                            <span className="icon is-size-5 sns-icons">
                                <i className="fab fa-facebook-f pr-2" aria-hidden="true"></i>
                                <i className="fab fa-twitter pr-2" aria-hidden="true"></i>
                                <i className="fab fa-instagram pr-2" aria-hidden="true"></i>
                                <i className="fab fa-linkedin-in pr-5 mr-6" aria-hidden="true"></i>
                            </span>
                        </span>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default BlockEducation