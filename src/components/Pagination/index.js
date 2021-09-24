import arrowLeft from '@images/arrow-left.svg'
import arrowRight from '@images/arrow-right.svg'
import Image from 'next/image'
import {useEffect, useState} from "react";

const Pagination = ({paging, callback}) => {

    const pageLimit = 1

    const [pages, setPages] = useState({prev: 0, next: 0, nextLimit: 0, last: 0})

    useEffect(() => {
        const lastPage = Math.ceil(paging.total / paging.perPage)
        const prevPage = paging.currentPage - 1 > pageLimit ? pageLimit : paging.currentPage - 1
        const nextPage = lastPage - paging.currentPage > pageLimit ? lastPage - pageLimit : paging.currentPage
        const nextPagesLimit = lastPage - paging.currentPage ? pageLimit : lastPage - paging.currentPage

        setPages({prev: prevPage, next: nextPage, nextLimit: nextPagesLimit, last: lastPage})
    }, [paging])

    const handlePaging = (e) => {
        console.log(e)
        callback(e)
    }

    const generateLinks = (x, type = 'prev') => {
        let links = []
        let num = 1
        for (let i = 1; i <= x; i++) {
            num = type === 'prev' ? i : i + pages.next
            links.push(<button className={'font-normal text-1xl'} style={{color: '#B4B4B4'}} key={`${type}-${num}`}
                               onClick={() => handlePaging(num)}>{num}</button>)
        }
        return links
    }

    return (
        <div className={'flex space-x-4 items-center justify-center'}>
            <button className={`${paging.currentPage > 2 ? 'block' : 'hidden'}`}
                    onClick={() => handlePaging(paging.currentPage - 1)}>
                <Image src={arrowLeft} alt={'left arrow'}/>
            </button>
            {generateLinks(pages.prev)}
            <p className={`${paging.currentPage - pages.prev > 1 ? '' : 'hidden'}`}>...</p>
            <p className={'font-bold text-1xl'}>{paging.currentPage}</p>
            <p className={`${pages.last - paging.currentPage > pageLimit ? '' : 'hidden'}`}>...</p>
            {generateLinks(pages.nextLimit, 'next')}

            <button className={`${paging.currentPage < pages.last ? 'block' : 'hidden'}`}
                    onClick={() => handlePaging(paging.currentPage + 1)}>
                <Image src={arrowRight}
                       alt={'right arrow'}/>
            </button>
        </div>
    )
}

export default Pagination