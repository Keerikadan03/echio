import { campaigns } from "@prisma/client"
import prisma from "./prisma"
import { z } from "zod"
import { isValidObjectId } from "mongoose"

export async function getCampaigns(user_id: string) {
  const campaigns = await prisma.campaigns.findMany({
    where: {
      owner_id: user_id
    }
  })

  return campaigns
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

export async function createCampaign(params: any) {
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
