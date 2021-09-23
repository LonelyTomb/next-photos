import Artwork from "@/components/Artwork";
import Pagination from "@/components/Pagination";

const PhotosGrid = ({artworks}) => {
    return (
        <section className={'w-full lg:w-3/4'}>
            <div className={'grid grid-cols-1 lg:grid-cols-3 lg:px-3 gap-xl mb-2xl'}>
                {
                    artworks.map(art=><Artwork art={art} key={art.name} />)
                }
            </div>
            <Pagination />
        </section>
    )
}
export default PhotosGrid