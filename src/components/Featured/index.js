import Image from 'next/image'
import styles from '@/styles/Featured.module.css'
import dummy from '@images/dummy.png'
import details from '@images/details.png'

const Featured = ({artwork}) => {
    return (
        <section className={'py-6 lg:py-xl'}>
            <div className={'flex justify-between items-center mb-6'}>
                <span className={'font-bold text-1xl'}>Samurai King Resting</span>
                <button
                    className={'bg-black font-medium text-white uppercase py-4 px-6 tracking-wide text-xl hidden lg:inline'}>Add
                    to
                    cart
                </button>
            </div>
            <div className={`relative w-100 ${styles['featured-image']} mb-6`}>
                <Image src={dummy} layout={'fill'} alt={'featured'} objectFit={'cover'} objectPosition={'center'}/>
                <span className={'absolute bottom-0 left-0 bg-white font-bold py-5 px-xl text-base lg:text-lg'}>Photo of the Day</span>
            </div>
            <section className={'grid grid-cols-1 lg:grid-cols-2'}>
                <button
                    className={'bg-black font-medium text-white uppercase py-4 px-6 tracking-wide text-xl block lg:hidden mb-6'}>Add
                    to
                    cart
                </button>
                <div className={''}>
                    <p className={'font-bold text-md lg:text-lg mb-3'}><span className={'mr-1'}>About the</span><span>Samurai King Resting</span>
                    </p>
                    <p className={'text-gray font-bold text-md lg:text-lg'}>Pets</p>
                    <p className={'text-gray leading-7 text-md lg:text-lg font-normal'}>
                        So how did the classical Latin become so incoherent? According to McClintock, a 15th century
                        typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to
                        mockup various fonts for a type specimen book.So how did the classical Latin become so
                        incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's
                        De Finibus in order to provide placeholder

                        text to mockup various fonts for a type specimen book.So how did the classical Latin become so
                        incoherent? According to McClintock.
                    </p>
                </div>
                <div className={'flex flex-col lg:items-end'}>
                    <p className={'font-bold text-md lg:text-lg mb-5'}>People also buy</p>
                    <div className={'grid grid-cols-3 gap-5 lg:gap-6 mb-xl'}>
                        <div>
                            <Image src={details} alt={'others'} />
                        </div>
                        <div>
                            <Image src={details} alt={'others'} />
                        </div>
                        <div>
                            <Image src={details} alt={'others'} />
                        </div>
                    </div>
                    <p className={'font-bold text-md lg:text-lg mb-3'}>Details</p>
                    <div>
                        <p className={'text-gray leading-7 text-md'}>
                            Size: 1020 x 1020 pixel
                        </p>
                        <p className={'text-gray leading-7 text-md'}>
                            Size: 15 mb
                        </p>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default Featured