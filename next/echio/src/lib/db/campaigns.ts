import prisma from "@/lib/prisma"
import { isValidObjectId } from "mongoose"
import { z } from "zod"

/**
 * Get the campaigns owned by the user.
 * Assumes user_id is clean.
 */
export async function getCampaigns(user_id: string) {
  const campaigns = await prisma.campaigns.findMany({
    where: {
      owner_id: user_id
    }
  })
  return campaigns
}

/**
 * Get the campaign by its id.
 * Validates campaign_id
 */
export async function getCampaignById(campaign_id: string) {
  const _campaign_id = z.string().refine(isValidObjectId).parse(campaign_id)
  const campaign = await prisma.campaigns.findUnique({
    where: {
      id: _campaign_id
    }
  })

  return campaign
}

/** Campaign zod model for input validation */
const Campaign = z.object({
  owner_id: z.string().refine(isValidObjectId),
  name: z.string(),
  description: z.string(),
  image: z.string().url().optional(),
  product_description: z.string(),
  product_media: z.array(z.string().url()).default([]),
  campaign_type: z.enum(["NORMAL", "PAID", "BARTER"]),
  nsfw: z.boolean()
})

/**
 * Create a campaign object.
 * Validates the input using the Campaign zod model.
 */
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

/**
 * Get the influencers in the campaign.
 * Validates campaign_id
 */
export async function getCampaignInfluencers(campaign_id: string) {
  const _campaign_id = z.string().refine(isValidObjectId).parse(campaign_id)

  const influencers = await prisma.campaign_influencers.findMany({
    where: {
      campaign_id: _campaign_id
    }
  })

  return influencers
}
