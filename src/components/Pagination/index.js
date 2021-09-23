import arrowLeft from '@images/arrow-left.svg'
import arrowRight from '@images/arrow-right.svg'
import Image from 'next/image'

const Pagination = () => {
    return (
        <div className={'flex space-x-4 items-center justify-center'}>
            <button><Image src={arrowLeft} alt={'left arrow'}/></button>
            <button className={'font-normal text-1xl'} style={{color: '#B4B4B4'}}>1</button>
            <button className={'font-bold text-1xl'}>2</button>
            <button className={'font-normal text-1xl'} style={{color: '#B4B4B4'}}>3</button>
            <button><Image src={arrowRight} alt={'right arrow'}/></button>
        </div>
    )
}

export default Pagination