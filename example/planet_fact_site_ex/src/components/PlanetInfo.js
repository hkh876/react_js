import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './PlanetInfo.css'
import { getImageSrc, isEmpty } from '../utils/utils.js'

function handleSourceClick() {
    alert('Not supported')
}

function PlanetInfo() {
    const planetTitle = useParams().title
    const planetData = useSelector((state) => state.planet_data)
    const dispatch = useDispatch()
    
    useEffect(() => {
        // get data from json
        async function getDataFromJson() {
            await fetch('data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for(let [ key, value ] of Object.entries(data)) {
                    value['info_type'] = 'overview'
                }

                dispatch({ type: 'update_data', payload: data })
            })
        }
        getDataFromJson()
    }, [dispatch])

    function handleInfoTypeClick(type) {
        const newPlanetData = { ...planetData }
        newPlanetData[planetTitle].info_type = type

        dispatch({ type: 'update_data', payload: newPlanetData })
    }

    // set render data
    const infoType = !isEmpty(planetData) ? planetData[planetTitle].info_type : ''
    let infoText = ''

    if(infoType === 'overview') {
        infoText = planetData[planetTitle].overview
    }
    else if(infoType === 'structure') {
        infoText = planetData[planetTitle].structure
    }
    else if(infoType === 'geology') {
        infoText = planetData[planetTitle].geology
    }

    // set image
    let imageSrc = ''
    let geologyImage = null

    if(planetTitle === 'mercury') {
        imageSrc = getImageSrc('planet-mercury.svg')
        if(infoType === 'geology') {
            geologyImage = <img 
                            className="geology" 
                            src={ getImageSrc('planet-mercury-geology.png') } 
                            alt={ planetTitle + ' geology image' }/>
        }
        else if(infoType === 'structure') {
            imageSrc = getImageSrc('planet-mercury-internal.svg')
        }
    }
    else if(planetTitle === 'venus') {
        imageSrc = getImageSrc('planet-venus.svg')
        if(infoType === 'geology') {
            geologyImage = <img 
                            className="geology" 
                            src={ getImageSrc('planet-venus-geology.png') } 
                            alt={ planetTitle + ' geology image' }/>
        }
        else if(infoType === 'structure') {
            imageSrc = getImageSrc('planet-venus-internal.svg')
        }
    }
    else if(planetTitle === 'earth') {
        imageSrc = getImageSrc('planet-earth.svg')
        if(infoType === 'geology') {
            geologyImage = <img 
                            className="geology" 
                            src={ getImageSrc('planet-earth-geology.png') } 
                            alt={ planetTitle + ' geology image' }/>
        }
        else if(infoType === 'structure') {
            imageSrc = getImageSrc('planet-earth-internal.svg')
        }
    }
    else if(planetTitle === 'mars') {
        imageSrc = getImageSrc('planet-mars.svg')
        if(infoType === 'geology') {
            geologyImage = <img 
                            className="geology" 
                            src={ getImageSrc('planet-mars-geology.png') } 
                            alt={ planetTitle + ' geology image' }/>
        }
        else if(infoType === 'structure') {
            imageSrc = getImageSrc('planet-mars-internal.svg')
        }
    }
    else if(planetTitle === 'jupiter') {
        imageSrc = getImageSrc('planet-jupiter.svg')
        if(infoType === 'geology') {
            geologyImage = <img 
                            className="geology" 
                            src={ getImageSrc('planet-jupiter-geology.png') } 
                            alt={ planetTitle + ' geology image' }/>
        }
        else if(infoType === 'structure') {
            imageSrc = getImageSrc('planet-jupiter-internal.svg')
        }
    }
    else if(planetTitle === 'saturn') {
        imageSrc = getImageSrc('planet-saturn.svg')
        if(infoType === 'geology') {
            geologyImage = <img 
                            className="geology" 
                            src={ getImageSrc('planet-saturn-geology.png') } 
                            alt={ planetTitle + ' geology image' }/>
        }
        else if(infoType === 'structure') {
            imageSrc = getImageSrc('planet-saturn-internal.svg')
        }
    }
    else if(planetTitle === 'uranus') {
        imageSrc = getImageSrc('planet-uranus.svg')
        if(infoType === 'geology') {
            geologyImage = <img 
                            className="geology" 
                            src={ getImageSrc('planet-uranus-geology.png') } 
                            alt={ planetTitle + ' geology image' }/>
        }
        else if(infoType === 'structure') {
            imageSrc = getImageSrc('planet-uranus-internal.svg')
        }
    }
    else if(planetTitle === 'neptune') {
        imageSrc = getImageSrc('planet-neptune.svg')
        if(infoType === 'geology') {
            geologyImage = <img 
                            className="geology" 
                            src={ getImageSrc('planet-neptune-geology.png') } 
                            alt={ planetTitle + ' geology image' }/>
        }
        else if(infoType === 'structure') {
            imageSrc = getImageSrc('planet-neptune-internal.svg')
        }
    }
    
    return (
        <div className="planet-info">
            <div className="planet-image">
                <img src={ imageSrc } alt={ planetTitle + " image" }/>
                { geologyImage }
            </div>
            <div className="planet-desc">
                <h2 className="name">{ planetTitle.toUpperCase() }</h2>
                <p className="text">{ infoText }</p>
                <span className="links">
                    <p>Source</p>
                    <p onClick={ handleSourceClick }>Wikipedia</p>
                </span>
                <div 
                    className={ "info-change-button" + (infoType === 'overview' ? ' active' : '') } 
                    onClick={ () => handleInfoTypeClick('overview') }
                    >
                    <p>01</p>
                    <p className="info-text">OVERVIEW</p>
                </div>
                <div 
                    className={ "info-change-button" + (infoType === 'structure' ? ' active' : '') }
                    onClick={ () => handleInfoTypeClick('structure') }
                    >
                    <p>02</p>
                    <p className="info-text">INTERNAL STRUCTURE</p>
                </div>
                <div 
                    className={ "info-change-button" + (infoType === 'geology' ? ' active' : '') }
                    onClick={ () => handleInfoTypeClick('geology') }
                    >
                    <p>03</p>
                    <p className="info-text">SURFACE GEOLOGY</p>
                </div>
            </div>
        </div>
    )
}

export default PlanetInfo