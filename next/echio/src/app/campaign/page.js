import { getCampaigns } from "@/lib/db/campaigns"
import { getServerSession } from "next-auth/next";
import { Context } from "@/types";
import { InferGetServerSidePropsType } from "next";
import { campaigns } from "@prisma/client";
import Link from "next/link"
import React from "react"
import CampaignCard from "../components/campaign/CampaignCard"
import Navbar from "../components/Navbar"
import Filter from "../components/Filter"




export default async function page() {
  const session = await getServerSession()

  // if (!session || session.status === "unauthenticated") {
  //   return <div>Unauthenticated</div>
  // }

  const campaigns = await getCampaigns(session.user.id)
  //const campaigns = await getCampaigns("649ac92bf56eb1ff734bd4b9");

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
              <Filter />
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
