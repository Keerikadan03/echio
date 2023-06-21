import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className='my-5 mx-10 text-sm font-medium'>

                <div className='h-14 bg-white justify-center items-center rounded-full grid grid-cols-3 shadow-[0_1px_7px_rgba(149,149,149,0.25)] '>

                    <div className=' ml-10'>
                        <Image src="/images/echio-logo.png" alt="Echio Logo" className="" width={40} height={10} priority />
                    </div>
                    <div className=' flex justify-center '>
                        <div className=''>
                            <Link href="/home" className='mx-4 flex justify-center items-center rounded-md '>
                                <Image src="/images/home-icon.png" alt=" " className="mx-2 mb-[3px] w-[16px] h-[16px]" width={20} height={16} priority ></Image>
                                <p className='text-[rgba(0,0,0,0.55)]'>Home</p>
                            </Link>
                        </div>
                        <Link href="/campaign" className='mx-4 flex justify-center items-center'>
                            <Image src="/images/campaign-icon.png" alt=" " className="mx-2 w-[19px] h-[19px]" width={16} height={16} priority ></Image>
                            <p className='text-[rgba(0,0,0,0.55)] focus:text-black'>Campaign</p>
                        </Link>
                    </div>
                    <div className='flex justify-end items-center pr-10'>
                        <Image src="/images/bell-icon.png" alt=" " className="mx-2 w-[24px] h-[24px]" width={20} height={6} priority ></Image>
                        <Image src="/images/user-icon.png" alt=" " className="mx-2 w-[30px] h-[30px]" width={20} height={8} priority ></Image>

                        {/* <svg className='inline' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M 12 2 C 11.172 2 10.5 2.672 10.5 3.5 L 10.5 4.1953125 C 7.9131836 4.862095 6 7.2048001 6 10 L 6 16 L 4.4648438 17.15625 L 4.4628906 17.15625 A 1 1 0 0 0 4 18 A 1 1 0 0 0 5 19 L 12 19 L 19 19 A 1 1 0 0 0 20 18 A 1 1 0 0 0 19.537109 17.15625 L 18 16 L 18 10 C 18 7.2048001 16.086816 4.862095 13.5 4.1953125 L 13.5 3.5 C 13.5 2.672 12.828 2 12 2 z M 10 20 C 10 21.1 10.9 22 12 22 C 13.1 22 14 21.1 14 20 L 10 20 z"></path>
                        </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="user"><path fill="#000" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z" clip-rule="evenodd"></path></svg> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar