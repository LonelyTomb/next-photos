import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import PublicLayout from '@/layouts/public'
import Featured from '@/components/Featured'
import Divider from '@/components/Divider'
import Gallery from '@/components/Gallery'
import CartBox from "@/components/Cart";
import {onValue} from 'firebase/database'
import {dbRef} from "@/api";
import {saveProducts} from '@/redux/slices/products'

export default function Home({products}) {
    const dispatch = useDispatch()

    const [artworks, setArtworks] = useState()

    useEffect(() => {
        dispatch(saveProducts(products))
        setArtworks(products)
    }, [dispatch, products])

    return (
        <PublicLayout>
            <div className={'mx-3 lg:mx-2xl relative'}>
                <CartBox/>
                <Divider/>
                <Featured/>
                <Divider/>
                <Gallery />
            </div>
        </PublicLayout>
    )
}

export async function getStaticProps() {
    let products = []
    try {
        await onValue(dbRef('products/'), async (snapshot) => {
            const res = await snapshot.val()
            products = [...res]
        });
    } catch (e) {
        console.log(e)
    }
    return {
        props: {
            products
        }
    }
}
