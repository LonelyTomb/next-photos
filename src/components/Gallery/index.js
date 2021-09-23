import Filters from '@/components/Filters'
import PhotosGrid from '@/components/PhotosGrid'
import Sorting from '@/components/Sorting'

import {useEffect, useState, useCallback} from "react";
import {useSelector} from "react-redux";

const Gallery = () => {
    const [artworks, setArtworks] = useState([])
    const [sortBy, setSortBy] = useState({type: 'Name', asc: true})

    const {products} = useSelector(state => state.products)


    const sortProducts = useCallback((payload) => {
        const items = [...payload]
        if(!items.length) return []
        if (sortBy.type === 'Name') {
            return items.sort((a, b) => {
                return sortBy.asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            })
        } else {
            return items.sort((a, b) => {
                return sortBy.asc ? Number(a.price) < Number(b.price) : Number(a.price) > Number(b.price)
            })
        }
    }, [sortBy])

    useEffect(() => {
        const sorted = sortProducts(products)
        setArtworks([...sorted])
    }, [products, sortProducts])

    useEffect(() => {
        const sorted = sortProducts(artworks)
        setArtworks([...sorted])
    }, [sortBy, sortProducts])

    const handleSort = (key, value) => {
        setSortBy({...sortBy, [key]: value})
    }

    return (
        <section className={'pt-6 lg:pt-xl pb-4 lg:pb-4'}>
            <Sorting sortBy={sortBy} callback={handleSort}/>
            <section className={'flex py-xl'}>
                <Filters products={products}/>
                <PhotosGrid artworks={artworks}/>
            </section>
        </section>
    )
}
export default Gallery