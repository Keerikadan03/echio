import React from 'react'
import Navbar from '../components/Navbar'
import InfluencerCard from '../components/InfluencerCard'

const page = () => {
    return (
        <>
            <div className='text-xs'>
                <Navbar></Navbar>
                <div className='grid grid-cols-3 my-7 mx-10'>
                    <div>
                        <p className='text-[30px] font-bold'>Influencer List</p>
                    </div>
                    {/* search */}
                    <div className='flex justify-center items-center '>
                        <input className='w-[400px] h-[32px] pl-1.5 text-sm rounded-lg border border-[rgba(0,0,0,0.15)] shadow-[2px_2px_2px_rgba(0,0,0,0.05),inset_4px_4px_4px_rgba(0,0,0,0.02)]' type="search" name="" id="" placeholder='Search' />
                    </div>
                    {/* create campaign  button */}
                    <div className='flex justify-end items-center '>
                        <div className='font-medium'>
                            <button type="submit" className=" w-[90px] h-[32px] mx-3 rounded-lg text-[#6B8DE6] hover:bg-zinc-100 ">SORT WITH AI</button>
                            <button type="submit" className=" w-[70px] h-[32px] mx-3 rounded-lg bg-white border border-[#6B8DE6] text-[#6B8DE6] hover:bg-zinc-100 ">INVITE</button>
                            <a href='/campaignForm' className="px-3 py-[9px]  border border-[#6B8DE6] rounded-lg bg-[#6B8DE6] text-white hover:bg-blue-700 shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_1px_5px_rgba(0,0,0,0.12)]">CAMPAIGN DETAIL</a>
                        </div>
                    </div>

                </div>

                <div className=' grid grid-cols-4 gap-4 mx-10 mt-10'>

                    <div className='mr-5 rounded-xl bg-white text-sm p-5 h-fit'>
                        <div>
                            <p className='text-[rgba(0,0,0,0.7)] font-semibold'>POPULARITY</p>
                            <div className='mt-5 text-xs'>
                                <div className='my-4 flex items-center '>

                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="" className=''>Nano(1k-9k)</label>
                                </div>
                                <div className='my-4 flex items-center'>
                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Micro(100k-999k)</label>
                                </div>
                                <div className='my-4 flex items-center'>
                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Macro(1M-10M)</label>
                                </div>
                                <div className='my-4 flex items-center'>

                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Custom</label>
                                </div>
                            </div>

                            <p className='mt-7 text-[rgba(0,0,0,0.7)] font-semibold '>CAMPAIGN PREFRENCE </p>
                            <div className='mt-5 text-xs'>
                                <div className='my-4 flex items-center'>

                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="" >Barter</label>
                                </div>
                                <div className='my-4 flex items-center'>

                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Paid</label>
                                </div>
                            </div>

                            <p className='mt-7 text-[rgba(0,0,0,0.7)] font-semibold'>PLATFORM</p>
                            <div className='mt-5 text-xs'>
                                <div className='my-4 flex items-center'>

                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">YouTube</label>
                                </div>
                                <div className='my-4 flex items-center'>

                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Instagram</label>
                                </div>
                            </div>

                            <p className='mt-7 text-[rgba(0,0,0,0.7)] font-semibold'>ENGAGEMENT RATE</p>

                            <p className='mt-7 text-[rgba(0,0,0,0.7)] font-semibold'>RATE</p>

                            <p className='mt-7 text-[rgba(0,0,0,0.7)] font-semibold'>CATEGORIES</p>
                            <div className='mt-5 text-xs'>
                                <input type="search" className='mb-3' name="" id="" placeholder='Search Category' />
                                <div className='my-4 flex items-center'>
                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Autos & Vehicles</label>
                                </div >
                                <div className='my-4 flex items-center'>
                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Animation</label>
                                </div>
                                <div className='my-4 flex items-center'>
                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Agriculture & Allied Sectors</label>
                                </div >
                                <div className='my-4 flex items-center'>
                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Arts & Craft</label>
                                </div>
                                <div className='my-4 flex items-center'>
                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Beauty</label>
                                </div>
                                <div className='my-4 flex items-center'>
                                    <input type="checkbox" className='mx-2' name="" id="" />
                                    <label htmlFor="">Blogs & Travel</label>
                                </div>
                                <a href="" className=' mt-2 text-sky-600'>More Category</a>
                            </div>



                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='mb-5'>
                            <p className='font-semibold text-sm'>Sort by</p>
                            <div className='flex flex-row text-xs mt-2'>
                                <div className=' bg-[rgba(0,0,0,0.08)] mr-2 py-1 px-2.5 rounded-2xl '>High to Low</div>
                                <div className=' bg-[rgba(0,0,0,0.08)] mr-2 py-1 px-2.5 rounded-2xl'>Low to High</div>
                                <div className=' bg-[rgba(0,0,0,0.08)] mr-2 py-1 px-2.5 rounded-2xl'>Newest</div>
                                <div className=' bg-[rgba(0,0,0,0.08)] py-1 px-2.5 rounded-2xl'>Popular</div>
                            </div>
                        </div>
                        <InfluencerCard />
                        <InfluencerCard />
                        <InfluencerCard />
                        <InfluencerCard />
                        <InfluencerCard />


                    </div>
                </div>
            </div>
        </>
    )
}

export default page