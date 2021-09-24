import React, {useState, useEffect} from 'react'
import Image from "next/image";
import close from "@images/close.svg";
import PriceRange from "@/components/PriceRange";

const FiltersMobile = ({products, callback, picked, showFilter, setShowFilter, priceLimit, priceCallback}) => {
    const [categories, setCategories] = useState([])
    const [selected, setSelected] = useState([])
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

    const handleChange = (value) => {
        const filtered = picked.filter(pick => pick !== value)
        if (filtered.length === picked.length) {
            setSelected([...filtered, value])
        } else {
            setSelected([...filtered])
        }
    }


    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const saveSelected = (categories, price) => {
        callback(categories)
        priceCallback(price)
        setShowFilter(false)
    }
    const clearSelected = () => {
        callback([])
        priceCallback(0)
        setShowFilter(false)
        setSelected([])
        setPrice(0)
    }
    return (
        <div
            className={`${showFilter ? '' : 'hidden'} fixed bg-gray lg:hidden z-50 h-full filters-mobile top-0 w-full left-0 pt-xl`}>
            <section className={'w-full pr-6 bg-white h-full pt-5 py-xl px-6'}>
                <div className={'flex justify-between items-center mb-6'}>
                    <p className={'font-bold text-1xl'}>Filter</p>
                    <div className={'flex justify-end mb-5'}>
                        <button onClick={() => setShowFilter(false)}><Image src={close} alt={'close'}/></button>
                    </div>
                </div>
                <div className={'category'}>
                    <form>
                        {
                            categories.map(category => (
                                    <div className={'form-group mb-6'} key={category}>
                                        <input type="checkbox" name={category} value={category} id={`${category}-box-m`}
                                               checked={selected[category]}
                                               className={'border-3 border-black'}
                                               onChange={(e) => handleChange(e.target.value)}/>
                                        <label htmlFor={`${category}-box-m`} className={'ml-3 text-lg capitalize'}
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
            <div className={'fixed bottom-0 w-full'}>
                <div className={'flex justify-between px-4 py-6 border-t-4 border-lightgray space-x-5'}>
                    <button onClick={() => clearSelected()}
                            className={'border-4 border-black py-3 px-5 w-1/2 text-md'}>Clear
                    </button>
                    <button onClick={() => saveSelected(selected, price)}
                            className={'bg-black text-white py-3 px-5 w-1/2 text-md'}>Save
                    </button>
                </div>
            </div>
        </div>
    )
}
export default FiltersMobile