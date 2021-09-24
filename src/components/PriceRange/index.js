import React from "react";

const PriceRange = ({price, priceRange, handlePriceChange}) => {
    return (<div className={'category'}>
        <p className={'mb-6 text-lg font-bold'}>Price range</p>
        <form>
            <div className={'form-group mb-3 flex space-x-3 items-center'}>
                <span>${priceRange.min}</span>
                <input type="range" id={'pricing'} name={'pricing'}
                       onChange={(e) => handlePriceChange(e)}
                       min={priceRange.min} max={priceRange.max} value={price}/>
                <span>${priceRange.max}</span>
            </div>
            <div className={'text-lg'}>Lower than ${price}</div>
        </form>
    </div>)
}
export default PriceRange