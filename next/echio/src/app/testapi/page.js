import { getCampaigns } from "@/lib/db/campaigns"
import { getCampaignDetails } from '@/lib/db/campaignDetails'
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

    //   const campaigns = await getCampaigns(session.user.id)
  // const campaigns = await getCampaigns("649ac92bf56eb1ff734bd4b9");
    const campaignDetails = await getCampaignDetails("649ac995f56eb1ff734bd54f");
    console.log("test", campaignDetails)
  return <>
    <header>
        <h1 className="text-2xl">Todos</h1>
        jai mata di
        {/* {campaignDetails} */}
    </header>
    
</>
  
}
