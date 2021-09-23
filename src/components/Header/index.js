import React, {useSelector, useDispatch} from 'react-redux'
import {toggleCart, clearCart} from "@/redux/slices/cart";

import Image from 'next/image'
import logo from '@images/logo.svg'
import shoppingCart from '@images/shopping-cart.svg'

import styles from '@/styles/Header.module.css'

const AppHeader = () => {
    const dispatch = useDispatch()
    const {items} = useSelector((state) => state.cart)

    const openCart = () => {
        dispatch(toggleCart(true))
    }

    return (<header className={'px-6 py-6 lg:px-2xl lg:py-xl flex justify-between items-center'}>
        <Image src={logo} className={'w-2 lg:w-xl'} alt={'app-logo'}/>
        <button onClick={() => openCart()} className={'flex flex-col items-end'}>
            <div className={'w-6 lg:w-xl h-6 lg:h-xl relative'}>
                <Image src={shoppingCart} alt={'cart-image'} layout={'fill'}/>
            </div>
            {items.length > 0 && (<div className={`${styles['cart-count']} relative`}>
                <span className={'bg-black text-white p-1 text-md'}>{items.length}</span>
            </div>)}

        </button>
    </header>)
}

export default AppHeader