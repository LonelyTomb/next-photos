import React, {useState, useEffect} from 'react'
import PriceRange from "@/components/PriceRange";

const Filters = ({products, callback, picked, priceLimit, priceCallback}) => {
    const [categories, setCategories] = useState([])
    const [priceRange, setPriceRange] = useState({min: 0, max: 0})
    const [price, setPrice] = useState(priceLimit)

    useEffect(() => {
        const filtered = new Set([...products.map(product => product.category)])
        setCategories([...filtered])
    }, [products])

    useEffect(() => {
        const prices = products.map(product => product.price).sort((a, b) => a - b)
        setPriceRange({min: Math.floor(prices[0] || 0), max: Math.ceil(prices.pop() || 0)})
    }, [products])

    const handleChange = (e) => {
        callback(e.target.value)
    }
    const handlePriceChange = (value) => {
        setPrice(value)
        priceCallback(value)
    }
    return (
        <section className={'w-1/4 pr-6 hidden lg:block'}>
            <div className={'category'}>
                <p className={'mb-6 text-lg font-bold'}>Category</p>
                <form>
                    {
                        categories.map(category => (
                                <div className={'form-group mb-6'} key={category}>
                                    <input type="checkbox" name={'category'} value={category} id={`${category}-box`}
                                           checked={picked[category]}
                                           className={'border-3 border-black'} onChange={(e) => handleChange(e)}/>
                                    <label htmlFor={`${category}-box`} className={'ml-3 text-lg capitalize'}
                                           style={{color: '#1D1D1D'}}>{category}</label>
                                </div>
                            )
                        )
                    }
                </form>
            </div>
            <hr style={{borderColor: '#C2C2C2'}} className={'border-t w-100 mb-6'}/>
            <PriceRange price={price} priceRange={priceRange} handlePriceChange={handlePriceChange}/>
        </section>
    )
}
export default Filters