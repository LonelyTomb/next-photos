import Artwork from "@/components/Artwork";
import Pagination from "@/components/Pagination";
import {useState, useEffect} from "react";

const PhotosGrid = ({artworks, paging, handlePaging}) => {
    const [paged, setPaged] = useState([])
    useEffect(() => {
        let sliced = artworks.slice((paging.currentPage - 1) * paging.perPage, (paging.currentPage) * paging.perPage)

        setPaged([...sliced])
    }, [paging, artworks])
    return (
        <section className={'w-full lg:w-3/4'}>
            <div className={'grid grid-cols-1 lg:grid-cols-3 lg:px-3 gap-xl mb-2xl'}>
                {
                    paged.map(art => <Artwork art={art} key={art.name}/>)
                }
            </div>
            <Pagination paging={paging} callback={handlePaging}/>
        </section>
    )
}
export default PhotosGrid