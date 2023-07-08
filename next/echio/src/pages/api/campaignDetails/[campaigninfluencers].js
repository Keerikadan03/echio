
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { Prisma } from '@prisma/client'
import { z } from 'zod'
import { isValidObjectId } from 'mongoose'
import { addInfluencerToCampaign } from '@/lib/db/influencer'
import {getCampaignDetails, getShortlistedInfluencers } from "@/lib/db/campaignDetails/campaign-details"

// this api is to fetching shortlisted influencer data only

export default async function handler(
  req,
  res
){
    // var { page, perPage } = 
    const page = req.query.page;
    const perPage = req.query.perPage;
    const campaigninfluencers = req.query; // getting influencer id
    
    const startIndex = (parseInt(page)-1)*parseInt(perPage) || 0;
    const endIndex = startIndex + parseInt(perPage) || 10;

    const campaignData = await getShortlistedInfluencers(campaigninfluencers['campaigninfluencers']);
    
    // console.log(data);
    const slicedData = campaignData.slice(startIndex, endIndex);

    return res.status(200).json({ message: {"page no: ": page, "perpage ": perPage, "data":slicedData}, error: ''});




}
