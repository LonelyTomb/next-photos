import React from "react";

const PriceRange = ({price, priceRange, handlePriceChange}) => {
    return (<div className={'category'}>
        <p className={'mb-6 text-lg font-bold'}>Price range</p>
        <form>
            <div className={'form-group mb-3 flex space-x-3 items-center'}>
                <span>${priceRange.min}</span>
                <input type="range" id={'pricing'} name={'pricing'}
                       onChange={(e) => handlePriceChange(e.target.value)}
                       min={priceRange.min} max={priceRange.max} value={price}/>
                <span>${priceRange.max}</span>
            </div>
            {
                price > 0 && (
                    <div className={'text-lg flex justify-between'}>
                        <p>
                            Lower than ${price}
                        </p>
                        <button type={'button'} onClick={() => handlePriceChange(0)} className={'hidden lg:block'}>Clear
                        </button>
                    </div>
                )
            }
        </form>
    </div>)
}
export default PriceRange