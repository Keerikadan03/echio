
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
    // need to apply check whether page and perpage is integer or not and also need to verify that campagin id 

    
    const page = req.query.page || 1;
    const perPage = req.query.perPage || 10 ;
    const {campaignId} = req.query; // getting influencer id
    
    //applying pagination: calculating indexes of data need to pass based on requirements.
    const startIndex = (parseInt(page)-1)*parseInt(perPage);
    const endIndex = startIndex + parseInt(perPage);

    //fetching campaign datails from the database for particular campaignid
    const campaignData = await getCampaignDetails(campaignId);
    
    // to check whether campaign exist or not if no data find out with particular campaign id that means campaign doesn't exists
    if(campaignData.length==0){
      res.status(400).json({ error: "Campaign Doesn't exist"})
    }

    //this command is to check whether page and perpage is integer or not
    if (isNaN(page) || isNaN(perPage)) {
      res.status(400).json({ error: 'Invalid page or perPage parameter' });
      return;
    }
    
    const campaignInfluencers = await getShortlistedInfluencers(campaignId);

    const slicedData = campaignInfluencers.slice(startIndex, endIndex);


    return res.status(200).json({ message: {"page no: ": page, "perpage ": perPage, "data":slicedData}, error: ''});


}
