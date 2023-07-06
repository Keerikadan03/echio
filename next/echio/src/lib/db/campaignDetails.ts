import prisma from "@/lib/prisma"
import { isValidObjectId } from "mongoose"
import { z } from "zod"

export async function getCampaignDetails(campaign_id: string){
    const campaingDetails = await prisma.campaigns.findMany({
        where: {
                id : campaign_id       
        }
    }
    
    )
    return campaingDetails;
}

console.log(getCampaignDetails("649ac995f56eb1ff734bd54f"));