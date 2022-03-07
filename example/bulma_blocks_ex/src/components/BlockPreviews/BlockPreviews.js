import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './BlockPreviews.css'
import ExampleList from 'components/CommonBlock/ExampleList.js'

function BlockPreviews() {
    const { pages } = useSelector((state) => state.common)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'UPDATE_PARAMS',
            payload: {
                main_color: 'primary',
                title: 'BULMA PREVIEWS',
            },
        })
    }, [dispatch])

    // list render
    const columnCount = Math.ceil(pages.length / 3)
    const pageLoop = Array.from({ length: columnCount }, (item, cIndex) => {
        const elementLoop = Array.from({ length: 3 }, (item, eIndex) => {
            let currentIndex = cIndex * 3 + eIndex
            return (
                currentIndex < pages.length 
                ? <ExampleList 
                    key={ pages[currentIndex].id } 
                    info={ pages[currentIndex] }
                    type="example"
                /> : null
            )
        })

        return (
            <div className="columns is-desktop" key={ `page_column_${ cIndex }` }>
                { elementLoop }
            </div>
        )
    })
    const elementLoop = [1, 1, 1]
    
    return (
        <div>
            <section className="p-5">
                <div className="container is-centered has-text-centered pb-6">
                    <p className="has-text-primary pb-2 is-size-7-mobile">READY TO USE BLOCKS</p>
                    <h1 className="title is-3 is-size-4-mobile">See Some Examples Created by using Bulma Blocks</h1>
                </div> 
                { pageLoop }
            </section>
            <h2 className="has-text-gray has-text-centered is-size-4 has-text-weight-medium">+ More Coming Soon</h2>
        </div>
    )
}

export default BlockPreviews