import Image from 'next/image'
import dummy from '@images/dummy.png'
import styles from '@/styles/Artwork.module.css'

const Artwork = ({artwork}) => {
    return (
        <div className={'relative artwork'}>
            <div className={`${styles['image-wrapper']} relative mb-3`}>
                <span className={'absolute top-0 left-0 py-1 px-4 bg-white z-10 text-md'}>Best Seller</span>
                <Image src={dummy} alt={'image'} layout={'fill'} objectFit={'cover'} objectPosition={'top center'}/>
                <div className={'absolute h-full w-full group flex items-end'}>
                    <button
                        className={'bg-black font-medium text-white uppercase py-3 px-6 tracking-wide text-xl w-full group-hover:block block lg:hidden'}>Add
                        to
                        cart
                    </button>
                </div>
            </div>
            <p className={'text-gray font-bold text-lg mb-1 category'}>People</p>
            <p className={'font-bold text-1xl title'}>Red Bench</p>
            <p className={'price text-gray text-xl'}>$3.49</p>
        </div>
    )
}

export default Artwork