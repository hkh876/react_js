import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import './BlockGarage.css'
import GreatProjects from './GreatProjects.js'
import Team from './Team.js'
import NewBlogs from "./NewBlogs.js"
import ExampleList from 'components/CommonBlock/ExampleList.js'
import FooterCategory from "components/CommonBlock/FooterCategory"

function BlockGarage() {
    const { projects, services, teams, new_blog_info:newBlogInfo } = useSelector((state) => state.garage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'UPDATE_PARAMS',
            payload: {
                main_color: 'danger',
                title: 'BULMA GARAGE',
            },
        })
    }, [dispatch])

    // list render
    const serviceColumnCount = Math.ceil(projects.length / 3)
    const serviceLoop = Array.from({ length: serviceColumnCount }, (item, cIndex) => {
        const elementLoop = Array.from({ length: 3 }, (item, eIndex) => {
            let currentIndex = cIndex * 3 + eIndex
            return (
                currentIndex < services.length 
                ? <ExampleList 
                    key={ services[currentIndex].id } 
                    info={ services[currentIndex] }
                    type="normal"
                /> : null
            )            
        })

        return (
            <div className="columns is-desktop" key={ `service_column_${ cIndex }` }>
                { elementLoop }
            </div>
        )
   })

   const teamColumnCount = Math.ceil(teams.length / 3)
   const teamLoop = Array.from({ length: teamColumnCount }, (item, cIndex) => {
       const elementLoop = Array.from({ length: 3 }, (item, eIndex) => {
           let currentIndex = cIndex * 3 + eIndex
           return (
               currentIndex < teams.length
               ? <Team key={ teams[currentIndex].id } info={ teams[currentIndex] }/> : null
           )
       })

       return (
           <div className="column" key={ `team_column_${ cIndex }` }>{ elementLoop }</div>
       )
   })

   const categoryRender = Array.from({ length: 4 }, (item, index) => { 
       return <FooterCategory key={ `footer_category_${ index }` }/>
    })

    return (
        <main className="pt-3">
            <section className="p-5">
                <div className="columns is-8 is-variable">
                    <div className="column">
                        <figure className="image">
                            <img src="https://thetejasmagade.github.io/bulma-blocks-examples/example-2/images/hero-image.jpg" alt="hero img"/>
                        </figure>
                    </div>
                    <div className="column is-two-thirds">
                        <div className="is-hidden-mobile">
                            <h1 className="title is-3 is-size-4-mobile pt-6">Make Your Car Last Longer</h1>
                            <p>
                                Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal
                                <br/>
                                dreamcatcher.
                            </p>
                            <div className="field is-grouped pt-5 garage-find-repo">
                                <p className="control is-expanded">
                                    <input className="input" type="text" placeholder="Find a repository"/>
                                </p>
                                <p className="control">
                                    <button className="button is-danger px-5">Button</button>
                                </p>
                            </div>
                            <p className="help">Neutra shabby chic ramps, viral fixie.</p>
                            <button className="button is-large has-background-light is-shadowless my-5 mr-4 is-hidden-mobile">
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
                            <button className="button is-large has-background-light is-shadowless my-5 ml-4 is-hidden-mobile">
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
                <div className="container is-max-widescreen">
                    <div className="columns is-centered is-mobile is-variable is-1">
                        <div className="column">
                            <h1 className="title is-3 is-size-4-mobile has-text-centered py-0 my-0 has-text-danger">1800+</h1>
                            <p className="py-0 my-0 has-text-centered">Engineers & Workers</p>
                        </div>
                        <div className="column">
                            <h1 className="title is-3 is-size-4-mobile has-text-centered py-0 my-0 has-text-danger">635</h1>
                            <p className="py-0 my-0 has-text-centered">Factory In Worldwide</p>
                        </div>
                        <div className="column">
                            <h1 className="title is-3 is-size-4-mobile has-text-centered py-0 my-0 has-text-danger">2500+</h1>
                            <p className="py-0 my-0 has-text-centered">Projects Completed</p>
                        </div>
                        <div className="column">
                            <h1 className="title is-3 is-size-4-mobile has-text-centered py-0 my-0 has-text-danger">206+</h1>
                            <p className="py-0 my-0 has-text-centered">Clients</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <div className="columns is-desktop mb-6">
                    <div className="column">
                        <h1 className="title is-3 pb-2 mb-0 is-size-4-mobile">Our Great Projects</h1>
                        <div className="great-div"></div>
                    </div>
                    <div className="column">
                        <p className="pb-4 mr-4">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. 
                            Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
                        </p>
                    </div>
                </div>
                <div className="columns is-desktop">
                    {
                        projects.map((item, index) => {
                            return <GreatProjects key={ item.id } info={ item }/>
                        })
                    }
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <div className="container is-centered has-text-centered pb-6">
                    <p className="has-text-danger pb-2 is-size-7-mobile">ROOF PARTY POLAROID</p>
                    <h1 className="title is-3 is-size-4-mobile">Our Services</h1>
                </div>
                { serviceLoop }
            </section>
            <hr/>
            <section className="p-5">
                <div className="columns is-desktop">
                    <div className="column is-three-fifths is-8 mt-6 pt-5">
                        <h1 className="title is-3 is-size-4-mobile">
                            Book Your Consultation Free for 1st Time and Half Price on 2nd Time
                        </h1>
                        <p className="is-size-6">
                            Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.
                        </p>
                    </div>
                    <div className="column">
                        <form className="box has-background-light is-shadowless">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="e.g. Alex Demo"/>
                                </div>
                            </div>
                            <div className="field pb-3">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="e.g. alex@example.com"/>
                                </div>
                            </div>
                            <button className="button is-danger is-fullwidth">Button</button>
                            <p className="is-size-7 mt-2">Literally you probably haven't heard of them jean shorts.</p>
                        </form>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="p-5">
                <div className="container is-max-widescreen centered has-text-centered">
                    <h2 className="title is-3 pb-2 my-1 is-size-5-mobile">Our Team</h2>
                    <p>
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. 
                        Franzen you probably haven't
                        <br/>
                        heard of them.
                    </p>
                </div>
                <div className="columns is-centered pt-6">{ teamLoop }</div>
            </section>
            <hr/>
            <section className="p-5">
                <h2 className="title is-3 pb-2 my-1 is-size-5-mobile centered has-text-centered">Newly Added Blogs</h2>
                <p className="pb-4 centered has-text-centered">
                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                    <br/>
                    heard of them.
                </p>
                <div className="columns is-desktop">
                    {
                        newBlogInfo.map((item, index) => {
                            return <NewBlogs key={ item.id } info={ item }/>
                        })
                    }
                </div>
            </section>
            <footer>
                <section className="p-5 footer">
                    <div className="columns">
                        <div className="column">
                            <span className="icon-text">
                                <span className="icon fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x has-text-danger" aria-hidden="true"></i>
                                    <i className="fas fa-asterisk fa-stack-1x fa-inverse" aria-hidden="true"></i>
                                </span>
                                <span>
                                    <h3 className="title is-5 pl-3 pt-3">BULMA GARAGE</h3>
                                </span>
                                <p className="pt-3">Air plant banjo lyft occupy retro adaptogen indego</p>
                            </span>
                        </div>
                        { categoryRender }
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
        </main>
    )
}

export default BlockGarage