import { getCampaigns } from "@/lib/db/campaigns"

import { getSession } from "next-auth/next"
import { getServerSession } from "next-auth/next";
import { Context } from "@/types";
import { InferGetServerSidePropsType } from "next";
import { campaigns } from "@prisma/client";
import Link from "next/link"
import React from "react"
import CampaignCard from "../components/CampaignCard"
import Navbar from "../components/Navbar"



// export async function getServerSideProps(ctx) {

//   const session = await getServerSession(ctx.req, ctx.res, authOptions)

//   if (!session || !session.user) {
//     return {
//       redirect: {
//         destination: '/auth/signin',
//         permanent: false,
//       },
//     }
//   }

//   const campaigns = await getCampaigns(session.user.id)

//   return {
//     props: {
//       session: session,
//       campaigns: campaigns
//     }
//   }

// }

export default async function page() {
  const session = await getServerSession()

  // if (!session || session.status === "unauthenticated") {
  //   return <div>Unauthenticated</div>
  // }

  const campaigns = await getCampaigns(session.user.id)

  return (
    <>
      <div className="">
        <Navbar></Navbar>

        <div className="mx-14">
          <div className="grid grid-cols-3 my-7">
            <div>
              <p className="text-[30px] font-bold">Campaign List</p>
            </div>
            {/* search */}
            <div className="flex justify-center items-center ">
              <input
                className="w-[400px] p-1 rounded-lg border border-[rgba(0,0,0,0.15)] shadow-[2px_2px_2px_rgba(0,0,0,0.05),inset_4px_4px_4px_rgba(0,0,0,0.02)]"
                type="search"
                name=""
                id=""
                placeholder="Search"
              />
            </div>
            {/* create campaign  button */}
            <div className="flex justify-end items-center ">
              <Link
                href="/campaignForm"
                className="px-3 py-[7px] text-sm border border-white rounded-lg bg-[#0288D1] text-white hover:bg-blue-700 "
              >
                CREATE CAMPAIGN
              </Link>
            </div>
          </div>

          {/* card and filter */}
          <div className=" grid grid-cols-4 gap-[10px] mt-10">
            <div className="mr-5 rounded-xl bg-white text-sm p-5 h-fit shadow-[0_1px_4px_rgba(149,149,149,0.25)]">
              <div className="">
                <p className="font-semibold text-[rgba(0,0,0,0.7)]">Campaign Status</p>
                <div className="mt-3 text-xs ">
                  <div className="my-3 flex items-center ">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="" className="">
                      Active Campaign
                    </label>
                  </div>
                  <div className="my-3 flex items-center">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="">Upcoming Campaign</label>
                  </div>
                  <div className="my-3 flex items-center">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="">Past Campaign</label>
                  </div>
                </div>

                <p className="font-semibold text-[rgba(0,0,0,0.7)] mt-5">Campaign Prefrence</p>

                <div className="mt-3 text-xs">
                  <div className="my-3 flex items-center">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="">Barter</label>
                  </div>
                  <div className="my-3 flex items-center">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="">Paid</label>
                  </div>
                </div>

                <p className="font-semibold text-[rgba(0,0,0,0.7)] mt-5">Platform</p>

                <div className="mt-3 text-xs">
                  <div className="my-3 flex items-center">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="">YouTube</label>
                  </div>
                  <div className="my-3 flex items-center">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="">Instagram</label>
                  </div>
                  <div className="my-3 flex items-center">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="">Both</label>
                  </div>
                </div>
                <div className="mt-5 ">
                  <label className=" font-semibold text-[rgba(0,0,0,0.7)]">LOCATION</label>
                  <input
                    type="text"
                    className="w-full p-1 mt-3 text-xs border border-gray-300 rounded-sm"
                    name=""
                    id=""
                    placeholder="City"
                  />
                </div>
                <div className="mt-5">
                  <label className="mt-5 font-semibold text-[rgba(0,0,0,0.7)]">DATE</label>
                  <input
                    type="text"
                    className="w-full p-1 mt-3 text-xs border border-gray-300 rounded-sm"
                    name=""
                    id=""
                    placeholder="City"
                  />
                </div>

                <div className="mt-5 text-xs">
                  <label className="font-semibold text-[rgba(0,0,0,0.7)] text-sm">CATEGORIES</label>
                  <input
                    type="search"
                    className="mb-3 mt-3 p-1 w-full text-xs border border-gray-300 rounded-sm"
                    name=""
                    id=""
                    placeholder="Search Category"
                  />
                  <div className="my-3 flex items-center">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="">Autos & Vehicles</label>
                  </div>

                  <div className="my-3 flex items-center">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="">Beauty</label>
                  </div>
                  <div className="my-3 flex items-center">
                    <input type="checkbox" className="mx-2" name="" id="" />
                    <label htmlFor="">Blogs & Travel</label>
                  </div>
                  <a href="" className=" mt-2 text-sky-600">
                    More Category
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-3">

              {campaigns.map((campaign) => (
                <div key={campaign.id}>

                  <CampaignCard name={campaign.name} description={campaign.description} campaign_type={campaign.campaign_type} image={campaign.image} />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
