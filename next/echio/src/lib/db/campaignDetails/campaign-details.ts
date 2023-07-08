import prisma from "@/lib/prisma"
import { isValidObjectId } from "mongoose"
import { z } from "zod"

export async function getCampaignDetails(campaign_id: string){
    console.log(campaign_id);
    const campaingDetails = await prisma.campaigns.findMany({
        where: {
                id : campaign_id      
        }
    }
    )
    return campaingDetails;
}

export async function getShortlistedInfluencers(campaign_id: string){
    const influencers = await prisma.campaign_influencers.findMany({
        where:{
            campaign_id: campaign_id
        }
    })
    return influencers;
}


// console.log(getCampaignDetails("649ac995f56eb1ff734bd54f"));