import React, {useSelector} from 'react-redux'
import Image from 'next/image'
import logo from '@images/logo.svg'
import shoppingCart from '@images/shopping-cart.svg'
import styles from '@/styles/Header.module.css'

const AppHeader = () => {

    const {cart} = useSelector((state) => state.products)

    return (<header className={'px-6 py-6 lg:px-2xl lg:py-xl flex justify-between items-center'}>
        <Image src={logo} className={'w-2 lg:w-xl'} alt={'app-logo'}/>
        <div className={'flex flex-col items-end'}>
            <div className={'w-6 lg:w-xl h-6 lg:h-xl relative'}>
                <Image src={shoppingCart} alt={'cart-image'} layout={'fill'}/>
            </div>
            {cart.length > 0 && (<div className={`${styles['cart-count']} relative`}>
                <span className={'bg-black text-white p-1 text-md'}>{cart.length}</span>
            </div>)}

        </div>
    </header>)
}

export default AppHeader