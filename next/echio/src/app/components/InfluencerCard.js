import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const InfluencerCard = () => {
    return (
        <>
            <div className="mb-5 text-xs ">
                <div className="p-2 flex border-r border-b border-l border-gray-300 lg:border-l-0 rounded-lg lg:border-gray-300 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                    <div className='absolute bg-white rounded-br-md pr-2 pb-1 '>
                        <input type="checkbox" name="" id="" className='rounded-none mt-1 ml-1 ' />
                    </div>
                    <div className="mr-3 w-[180px] h-[132px] rounded-lg bg-cover text-center overflow-hidden" style={{ backgroundImage: 'url(/images/model.jpg)' }} title="campaign-image">
                    </div>
                    <div className=" w-3/5">
                        <div className='flex'>
                            <p className="text-gray-900 font-semibold text-xl mb-1">Name Name </p>
                            <p className='text-[rgba(0,0,0,0.55)] font-normal text-md w-max mt-2 ml-2 '>Place</p>
                        </div>

                        {/* engagement div */}
                        <div className='flex flex-cols mt-1.5 gap-[10px] '>
                            <div className='h-[53px] w-[104px] bg-[rgba(107,141,230,0.1)]  pt-2  rounded-md  '>
                                <p className='text-[rgba(40,40,40,0.55)] text-[18px] flex justify-center items-center '>68M</p>
                                <p className=' text-[14px] text-[rgba(0,0,0,0.80)] flex justify-center items-center mt-1'>Reach</p>
                            </div>
                            <div className='h-[53px] w-[104px] bg-[rgba(107,141,230,0.1)] pt-2 rounded-md'>
                                <p className='text-[rgba(40,40,40,0.55)] text-[18px] flex justify-center items-center'>20.2%</p>
                                <p className=' text-[14px] text-[rgba(0,0,0,0.80)]  flex justify-center items-center mt-1'>Engagement</p>

                            </div>   <div className='h-[53px] w-[104px] bg-[rgba(107,141,230,0.1)] pt-2 rounded-md '>
                                <p className='text-[rgba(40,40,40,0.55)] text-[18px] flex justify-center items-center'>20k</p>
                                <p className=' text-[14px] text-[rgba(0,0,0,0.80)] flex justify-center items-center mt-1'>Avg. Likes</p>

                            </div>   <div className='h-[53px] w-[104px] bg-[rgba(107,141,230,0.1)] pt-2 rounded-md '>
                                <p className='text-[rgba(40,40,40,0.55)] text-[18px] flex justify-center items-center'>1M</p>
                                <p className=' text-[14px] text-[rgba(0,0,0,0.80)] flex justify-center items-center mt-1'>Avg. Views</p>

                            </div>
                        </div>
                        {/* INSTA/youtube div  */}
                        <div className='flex mt-[14px]  '>
                            <div className='flex justify-center items-center mr-2 bg-[rgba(107,141,230,0.1)] rounded-md font-medium px-[10px] py-[6px] order-0 '><Image className='inline mr-1  ' src="/images/instagram.png" width={14} height={14} />
                                <p className='mr-2'>Instagram</p>
                                <p>500k</p>
                            </div>

                            <div className='content-center small-btn bg-[rgba(107,141,230,0.1)] rounded-md order-1'><Image className='inline mr-1' src="/images/youtube-icon.png" width={18} height={18} />
                                <p className='mr-2'>Youtube</p>
                                <p>500k</p></div>
                        </div>
                    </div>

                    <div className=" w-1/3 relative mr-1">
                        <div className='  flex justify-end items-center'>
                            <p className=' order-0 mr-2 text-[rgba(0,0,0,0.55)] font-semibold text-sm'>Rate</p>
                            <p className=" order-1 font-medium text-2xl ">$8.99</p>
                            {/* <div className='text-[rgba(0,0,0,0.55)] font-medium w-max absolute top-[2rem] right-[0.2rem] mt-1'><Image className='inline mr-1 ' src="/images/calendar.png" width={18} height={18} />Food</div> */}
                        </div>
                        <div className='flex flex-row absolute bottom-0 right-0 '>
                            <button type="submit" className=" w-[70px] h-[27px] mx-3 rounded-lg bg-white border border-[#6B8DE6] text-[#6B8DE6] hover:bg-zinc-100 ">ANALYSE</button>
                            <Link href='' type="submit" className="flex justify-center items-center  w-[63px] h-[27px] border border-[#6B8DE6] rounded-lg text-[#FFFFFF] bg-[#6B8DE6] hover:bg-white hover:text-[#6B8DE6] shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_1px_5px_rgba(0,0,0,0.12)] ">INVITE</Link>
                            {/* <button type="submit" className="ml-2 px-2 py-[5px] rounded-lg bg-[#6B8DE6] text-white shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_1px_5px_rgba(0,0,0,0.12)] hover:bg-blue-700 ">DETAIL</button> */}
                        </div>

                    </div>

                </div>
            </div>



        </>
    )
}

export default InfluencerCard