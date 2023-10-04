import React, {useSelector, useDispatch} from 'react-redux'
import Image from 'next/image'

import close from '@images/close.svg'
import {toggleCart, clearCart} from "@/redux/slices/cart";

const CartBox = () => {
    const dispatch = useDispatch()
    const {show, items} = useSelector(state => state.cart)

    const closeCart = () => {
        dispatch(toggleCart(false))
    }

    const emptyCart = () => {
        dispatch(clearCart())
        dispatch(toggleCart(false))

    }

    return (
        <div className={`absolute right-0 top-0 w-full lg:w-1/3 z-10 ${show ? 'block' : 'hidden'}`}>
            <section className={'border-4 border-gray p-5 bg-white'}>
                <div className={'flex justify-end mb-5'}>
                    <button onClick={() => closeCart()}><Image src={close} alt={'close'}/></button>
                </div>
                {
                    items.map(item=>(<div className={'cart-item flex justify-between items-center mb-5'} key={item.name}>
                        <div className={'w-3/5'}>
                            <p className={'font-bold text-md'}>{item.name}</p>
                            <p className={'text-gray text-lg'}>${item.price}</p>
                        </div>
                        <div className={'w-2/5 relative'} style={{height: '86px'}}>
                            <Image src={item.image.src} alt={item.image.alt} layout={'fill'} objectFit={'cover'} objectPosition={'center'}/>
                        </div>
                    </div>))
                }

                <hr className={'border-t'} style={{borderColor: '#C2C2C2'}}/>
                <div className={'mt-5'}>
                    <button onClick={() => emptyCart()}
                            className={'border-3 border-black w-full py-4 px-6 text-md font-medium'}>CLEAR
                    </button>

                </div>
            </section>
        </div>
    )
}

export default CartBox