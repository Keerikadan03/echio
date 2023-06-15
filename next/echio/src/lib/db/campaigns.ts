import prisma from "@/lib/prisma"
import { z } from "zod"
import { isValidObjectId } from "mongoose"
import { ObjectId } from "mongodb"

export async function getCampaigns(user_id: string) {
  const campaigns = await prisma.campaigns.findMany({
    where: {
      owner_id: user_id
    }
  })

  return campaigns
}

export async function getCampaignById(campaign_id: string) {
  const _campaign_id = z.string().refine(isValidObjectId).parse(campaign_id)
  const campaign = await prisma.campaigns.findUnique({
    where: {
      id: _campaign_id
    }})

  return campaign
}


const Campaign = z.object({
  owner_id: z.string().refine(isValidObjectId),
  name: z.string(),
  description: z.string(),
  image: z.string().url(),
  product_description: z.string(),
  product_media: z.array(z.string().url()),
  campaign_type: z.enum(['NORMAL', 'PAID', 'BARTER']),
  nsfw: z.boolean()
})

export async function createCampaign(params: z.infer<typeof Campaign>) {
  const { owner_id, name, description, image, product_description, campaign_type, nsfw } = Campaign.parse(params)
  const campaign = await prisma.campaigns.create({
    data: {
      owner_id: owner_id,
      name: name,
      description: description,
      image: image,
      product_description: product_description,
      campaign_type: campaign_type,
      nsfw: nsfw
    }
  })

  return campaign
}

export async function getCampaignInfluencers(campaign_id: string) {
  const _campaign_id = z.string().refine(isValidObjectId).parse(campaign_id)
  console.log(_campaign_id)

  const influencers = await prisma.campaign_influencers.findMany({
    where: {
      campaign_id: _campaign_id
    }
  })

  return influencers
}

