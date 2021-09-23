import {useDispatch, useSelector} from 'react-redux'
import Image from 'next/image'
import styles from '@/styles/Featured.module.css'
import dummy from '@images/dummy.png'
import {useEffect, useState} from "react";
import {addToCart, toggleCart} from "@/redux/slices/cart";

const Featured = () => {
    const dispatch = useDispatch()

    const [artwork, setArtwork] = useState({})
    const {products} = useSelector(state => state.products)

    useEffect(() => {
        const filtered = products.filter(product => product.featured)
        const selected = filtered.length && filtered[0] || {}
        setArtwork({...selected})
    }, [products])

    const saveToCart = (item) => {
        dispatch(addToCart(item))
        dispatch(toggleCart(true))
    }


    return (
        <section className={'py-6 lg:py-xl'}>
            <div className={'flex justify-between items-center mb-6'}>
                <span className={'font-bold text-1xl capitalize'}>{artwork.name}</span>
                <button
                    onClick={() => saveToCart(artwork)}
                    className={'bg-black font-medium text-white uppercase py-4 px-6 tracking-wide text-xl hidden lg:inline'}>
                    Add to cart
                </button>
            </div>
            <div className={`relative w-100 ${styles['featured-image']} mb-6`}>
                <Image src={artwork.image && artwork.image.src || dummy} layout={'fill'}
                       alt={artwork.image && artwork.image.alt}
                       objectFit={'cover'} objectPosition={'center'}/>
                <span className={'absolute bottom-0 left-0 bg-white font-bold py-5 px-xl text-base lg:text-lg'}>Photo of the Day</span>
            </div>
            <section className={'grid grid-cols-1 lg:grid-cols-2'}>
                <button
                    onClick={() => saveToCart(artwork)}
                    className={'bg-black font-medium text-white uppercase py-4 px-6 tracking-wide text-xl block lg:hidden mb-6'}>
                    Add to cart
                </button>
                <div className={''}>
                    <p className={'font-bold text-md lg:text-lg mb-3'}><span
                        className={'mr-1'}>About the</span><span>{artwork.name}</span>
                    </p>
                    <p className={'text-gray font-bold text-md lg:text-lg capitalize'}>{artwork.category}</p>
                    <p className={'text-gray leading-7 text-md lg:text-lg font-normal'}>
                        {artwork.description}
                    </p>
                </div>
                <div className={'flex flex-col lg:items-end'}>
                    <p className={'font-bold text-md lg:text-lg mb-5'}>People also buy</p>
                    <div className={'grid grid-cols-3 gap-5 lg:gap-6 mb-xl'}>
                        {
                            artwork.details && artwork.details.recommendations.map(recd => (
                                <div key={`img-${recd.alt}`}
                                     className={`${styles['recommended-image']} relative w-full`}>
                                    <Image src={recd.src} alt={recd.alt} layout={'fill'} objectFit={'cover'}
                                           objectPosition={'center'}/>
                                </div>))
                        }
                    </div>
                    <p className={'font-bold text-md lg:text-lg mb-3'}>Details</p>
                    <div>
                        <p className={'text-gray leading-7 text-md'}>
                            Size: 1020 x 1020 pixel
                        </p>
                        <p className={'text-gray leading-7 text-md'}>
                            Size: 15 mb
                        </p>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default Featured