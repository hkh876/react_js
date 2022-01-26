import { useState, useEffect } from "react/cjs/react.development"
import "./CarList.css"
import getImageSrc from "../utils/utils.js"

function CarList() {
    const [carList, setCarData] = useState([])

    function handleLeftClick(index) {
        let imageIndex = carList[index].imageIndex

        if(imageIndex === 1) {
            imageIndex = carList[index].image_urls.length
        }
        else {
            imageIndex -= 1
        }

        const newCarList = [...carList]
        newCarList[index].imageIndex = imageIndex
        setCarData(newCarList)
    }

    function handleRightClick(index) {
        let imageIndex = carList[index].imageIndex
        const lastIndex = carList[index].image_urls.length

        if(imageIndex === lastIndex) {
            imageIndex = 1
        }
        else {
            imageIndex += 1
        }

        const newCarList = [...carList]
        newCarList[index].imageIndex = imageIndex
        setCarData(newCarList)
    }

    function handleStarClick(index) {
        const newCarList = [...carList]
        newCarList[index].starEnabled = !newCarList[index].starEnabled
        setCarData(newCarList)
    }

    useEffect(() => {
        // get data from json
        async function getDataFromJson() {
            await fetch('data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                data.forEach((item, index) => {
                  item['imageIndex'] = 1
                  item['starEnabled'] = false
                })

                setCarData(data)
            })
        }
        getDataFromJson()
    }, [])

    const renderData = carList.map((item, index) => {
        return (
            <div className="card-container" key={ item.id }>
                <div className="card-top">
                    <div className="image-top">
                        <span className="classification">Used</span>
                        <div className="button-container">
                            <p>{ item.imageIndex } of { item.image_urls.length }</p>
                            <button onClick={ () => handleLeftClick(index) }>
                                <img src={ getImageSrc('left-arrow.svg') } alt="left arrow"/>
                            </button>
                            <button onClick={ () => handleRightClick(index) }>
                                <img src={ getImageSrc('right-arrow.svg') } alt="right arrow"/>
                            </button>
                        </div>
                    </div>
                    <div className="tags">
                        { item.options.map((option, option_index) => {
                            return <p key={ item.id + '_option_' + option_index }>{ option }</p>
                        }) }
                    </div>
                    <img className="card-image" src={ item.image_urls[item.imageIndex - 1] } alt={ item.title }/>
                </div>
                <div className="card-bottom">
                    <div className="title-container">
                        <div className="title-left">
                            <h3>{ item.title }</h3>
                            <p>{ item.description }</p>
                        </div>
                        <img 
                            src={ item.starEnabled ? getImageSrc('star-fill.svg') : getImageSrc('star-outline.svg') } 
                            alt=""
                            onClick={ () => handleStarClick(index) }
                        />
                    </div>
                    <p className="price">£{ item.price }</p>
                    <p className="price-when-new">£{ item.new_price.toFixed(2) }</p>
                </div>
            </div>
        )
    })

    return renderData
}

export default CarList