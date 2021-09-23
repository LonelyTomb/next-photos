import React, {useDispatch} from 'react-redux'
import Image from 'next/image'
import styles from '@/styles/Artwork.module.css'
import {addToCart, toggleCart} from "@/redux/slices/cart";

const Artwork = ({art}) => {
    const dispatch = useDispatch()

    const saveToCart = (item) => {
        dispatch(addToCart(item))
        dispatch(toggleCart(true))
    }

    return (
        <div className={'relative artwork'}>
            <div className={`${styles['image-wrapper']} relative mb-3`}>
                {art.bestseller && (
                    <span className={'absolute top-0 left-0 py-1 px-4 bg-white z-10 text-md'}>Best Seller</span>
                )}
                <div className={'relative h-full'}>
                    <Image src={art.image && art.image.src} alt={art.image && art.image.src} layout={'fill'}
                           objectFit={'cover'} objectPosition={'top center'}/>
                </div>
                <div className={'absolute h-full w-full group flex items-end top-0'}>
                    <button
                        onClick={() => saveToCart(art)}
                        className={'bg-black font-medium text-white uppercase py-3 px-6 tracking-wide text-xl w-full group-hover:block block lg:hidden'}>Add
                        to
                        cart
                    </button>
                </div>
            </div>
            <p className={'text-gray font-bold text-lg mb-1 category capitalize'}>{art.category}</p>
            <p className={'font-bold text-1xl title capitalize'}>{art.name}</p>
            <p className={'price text-gray text-xl'}>${art.price}</p>
        </div>
    )
}

export default Artwork