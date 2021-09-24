import React, {useState, useEffect} from 'react'

const Filters = ({products, callback, picked}) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const filtered = new Set([...products.map(product => product.category)])
        setCategories([...filtered])
    }, [products])

    const handleChange = (e) => {
        callback(e.target.value)
    }
    return (
        <section className={'w-1/4 pr-6 hidden lg:block'}>
            <div className={'category'}>
                <p className={'mb-6 text-lg font-bold'}>Category</p>
                <form>
                    {
                        categories.map(category => (
                                <div className={'form-group mb-6'} key={category}>
                                    <input type="checkbox" name={category} value={category} id={`${category}-box`}
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
            <div className={'category'}>
                <p className={'mb-6 text-lg font-bold'}>Price range</p>
                <form>
                    <div className={'form-group mb-xl'}>
                        <input type="checkbox" name="category" value={'People'} id={'price-box'}
                               className={'border-3 border-black'}/>
                        <label htmlFor={'price-box'} className={'ml-3 text-lg'}>Lower than $20</label>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Filters