import Filters from '@/components/Filters'
import PhotosGrid from '@/components/PhotosGrid'
import Sorting from '@/components/Sorting'

import {useEffect, useState, useCallback} from "react";
import {useSelector} from "react-redux";

const Gallery = () => {
    const [artworks, setArtworks] = useState([])
    const [sortBy, setSortBy] = useState({type: 'Name', asc: true})
    const [picked, setPicked] = useState([])
    const [paging, setPaging] = useState({perPage: 6, currentPage: 1, total: 0})

    const {products} = useSelector(state => state.products)


    const sortProducts = useCallback((payload) => {
        const items = [...payload]
        if (!items.length) return []
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

    const selectByCategory = useCallback((payload) => {
        if (!picked.length) return payload
        return payload.filter(item => picked.includes(item.category))
    }, [picked])

    const selectCategories = (value) => {
        const filtered = picked.filter(pick => pick !== value)
        if (filtered.length === picked.length) {
            setPicked([...filtered, value])
        } else {
            setPicked([...filtered])
        }
    }
    const handleSort = (key, value) => {
        setSortBy({...sortBy, [key]: value})
    }
    const handlePaging = (e) => {
        const gallery = document.querySelector('.gallery')
        gallery.scrollIntoView({behavior: "smooth"})
        setPaging({...paging, currentPage: e})
    }

    useEffect(() => {
        const sorted = sortProducts(products)
        setArtworks([...sorted])
        setPaging({...paging, total: products.length})
    }, [products, sortProducts])

    useEffect(() => {
        const sorted = sortProducts(artworks)
        setArtworks([...sorted])
    }, [sortBy, sortProducts])

    useEffect(() => {
        const filteredByCategory = selectByCategory(products)
        setArtworks([...filteredByCategory])
    }, [picked, products, selectByCategory])

    useEffect(() => {
        setPaging({...paging, total: artworks.length})
    }, [artworks])

    return (
        <section className={'pt-6 lg:pt-xl pb-4 lg:pb-4 gallery'}>
            <Sorting sortBy={sortBy} callback={handleSort}/>
            <section className={'flex py-xl'}>
                <Filters products={products} callback={selectCategories} picked={picked}/>
                <PhotosGrid artworks={artworks} paging={paging} handlePaging={handlePaging}/>
            </section>
        </section>
    )
}
export default Gallery