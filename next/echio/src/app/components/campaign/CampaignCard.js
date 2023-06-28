import { Context } from "@/types";
import { getServerSession } from "next-auth";
import { getCampaigns } from "@/lib/db/campaigns";
import { InferGetServerSidePropsType } from "next";
import { campaigns } from "@prisma/client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export async function Page() {
    const session = await getSession()
    // if (!session || session.status === "unauthenticated") {
    //     // return <div>Unauthenticated</div>
    // }


    // const campaigns = await getCampaigns(session.user.id)
    
}
const CampaignCard = (campaigns) => {



    return (
        <>


            <div className="mb-4 text-xs ">
                <div className="p-2 flex border-r border-b border-l border-gray-300 lg:border-l-0 rounded-lg lg:border-gray-300 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                    <div className='absolute bg-white rounded-br-md pr-2 pb-1 '>
                        <input type="checkbox" name="" id="" className='rounded-none mt-1 ml-1 ' />
                    </div>
                    <div className="mr-3 w-[180px] h-[110px] rounded-lg bg-cover text-center overflow-hidden" style={{ backgroundImage: 'url(/images/model.jpg)' }} title="campaign-image">
                    </div>
                    <div className="pl-2 w-3/5">
                        <div className='flex'>
                            <p className="text-gray-900 font-semibold text-xl mb-1">{campaigns.name} </p>
                            <p className='text-[rgba(0,0,0,0.55)] font-normal text-md w-max mt-2 ml-2 '>29/April-30/May</p>
                        </div>

                        <p className="text-gray-700">{campaigns.description}</p>
                        <div className='flex flex-row mt-[21px]  '>
                            <div className='flex justify-center items-center mr-2 bg-[rgba(107,141,230,0.1)] rounded-md font-medium px-[8px] py-[4px] '><Image className='inline mr-1  ' src="/images/instagram.png" width={14} height={14} />Instagram</div>

                            <div className='flex justify-center items-center bg-[rgba(107,141,230,0.1)] rounded-md font-medium px-[8px] py-[4px] '><Image className='inline mr-1' src="/images/youtube-icon.png" width={18} height={18} />YouTube</div>
                        </div>
                    </div>
                    <div className=" w-1/3 relative mr-1">
                        <div className='absolute top-0 right-0'>
                            <button type="submit" className="float-right px-3 py-1 font-medium border border-white rounded-lg bg-[rgba(54,179,126,0.1)] text-[#36B37E] hover:bg-green-600 ">Ongoing</button>
                            <div className='text-[rgba(0,0,0,0.55)] font-semibold w-max absolute top-[2rem] right-[0.2rem] mt-1 flex justify-center items-center'><Image className='inline mr-1 ' src="/images/food-icon.png" width={16} height={16} /><p>{campaigns.campaign_type}</p></div>
                        </div>
                        <div className='flex flex-row absolute bottom-0 right-0 '>
                            <button type="submit" className=" w-[70px] h-[30px] mx-3 rounded-lg bg-white border border-[#6B8DE6] text-[#6B8DE6] hover:bg-zinc-100 ">ANALYSE</button>
                            <Link href='/invite' type="submit" className="flex justify-center items-center  w-[63px] h-[30px] border border-[#6B8DE6] rounded-lg text-[#FFFFFF] bg-[#6B8DE6] hover:bg-white hover:text-[#6B8DE6] shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_1px_5px_rgba(0,0,0,0.12)] ">INVITE</Link>
                            {/* <button type="submit" className="ml-2 px-2 py-[5px] rounded-lg bg-[#6B8DE6] text-white shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_1px_5px_rgba(0,0,0,0.12)] hover:bg-blue-700 ">DETAIL</button> */}
                        </div>

                    </div>

                </div>
            </div>

        </>

    )
}

export default CampaignCard