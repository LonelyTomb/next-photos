import Image from 'next/image'
import Filters from '@/components/Filters'
import PhotosGrid from '@/components/PhotosGrid'

import sortIcon from '@images/sort.svg'
import downArrow from '@images/down-arrow.svg'
import toolbar from '@images/toolbar.svg'

const Gallery = () => {
    return (
        <section className={'pt-6 lg:pt-xl pb-4 lg:pb-4'}>
            <section className={'flex justify-between'}>
                <div>
                    <p className={'text-md lg:text-1xl space-x-1'}>
                        <span className={'font-bold'}>Photography</span><span className={'font-bold'}>/</span><span
                        className={'text-grey font-normal'}>Premium Photos</span>
                    </p>
                </div>
                <div>
                    <div className={'hidden lg:flex'}>
                        <p className={'flex items-center space-x-3 text-md lg:text-lg'}>
                            <span className={'text-grey'}><Image src={sortIcon} alt={'sort icon'}/> Sort By</span>
                            <span className={''}>Price <Image src={downArrow} alt={'down arrow'}/></span>
                        </p>
                    </div>
                    <div className={'block lg:hidden'}>
                        <button><Image src={toolbar} alt={'filter icon'}/></button>
                    </div>
                </div>
            </section>
            <section className={'flex py-xl'}>
                <Filters />
                <PhotosGrid />
            </section>
        </section>
    )
}
export default Gallery