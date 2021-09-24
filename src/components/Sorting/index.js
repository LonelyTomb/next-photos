import Image from "next/image";

import sortIcon from "@images/sort.svg";
import downArrow from "@images/down-arrow.svg";
import toolbar from "@images/toolbar.svg";

const Sorting = ({callback, sortBy, setShowFilter}) => {
    const sortTypes = ['Price', 'Name']

    const handleChange = (key, value) => {
        callback(key, value)
    }

    return (
        <section className={'flex justify-between'}>
            <div>
                <p className={'text-md lg:text-1xl space-x-1'}>
                    <span className={'font-bold'}>Photography</span><span className={'font-bold'}>/</span><span
                    className={'text-grey font-normal'}>Premium Photos</span>
                </p>
            </div>
            <div>
                <div className={'hidden lg:flex'}>
                    <div className={'flex items-center space-x-1 text-md lg:text-lg'}>
                        <div className={'text-grey space-x-1 flex'}>
                            <div>
                                <Image src={sortIcon} alt={'sort icon'}/>
                            </div>
                            <span>Sort By</span></div>
                        <select name="" id={'sort-by'} className={'appearance-none cursor-pointer'} value={sortBy.type}
                                onChange={(e) => handleChange('type', e.target.value)}>
                            {
                                sortTypes.map(sortType => (<option value={sortType} key={sortType}
                                                                   className={'capitalize'}>{sortType}</option>))
                            }
                        </select>
                        <button className={`${sortBy.asc ? 'rotate-180' : ''}`}
                                onClick={() => handleChange('asc', !sortBy.asc)}>
                            <Image src={downArrow} alt={'toggle arrow'}/></button>
                    </div>
                </div>
                <div className={'block lg:hidden'}>
                    <button onClick={() => setShowFilter(true)}>
                        <Image src={toolbar} alt={'filter icon'}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Sorting