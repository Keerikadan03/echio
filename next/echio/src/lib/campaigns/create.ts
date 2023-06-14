import z from "zod"
import { Campaigns } from "../db/models"
import { ObjectId } from "mongodb"
import { isValidObjectId } from "mongoose"

const CampaignZodSchema = z.object({
  owner_id: z.any().refine(isValidObjectId).transform((val) => new ObjectId(val)),
  name: z.string(),
  description: z.string(),
  image: z.string().url(),
  product_description: z.string(),
  product_media: z.array(z.string().url()),
  campaign_type: z.enum(["NORMAL", "PAID", "BARTER"]).default("NORMAL"),
  nsfw: z.boolean().default(false)
})

export default async function create_campaign(props: any) {

  const campaign_input = CampaignZodSchema.parse(props)
  const campaign = new Campaigns(campaign_input)
  await campaign.save()

  return campaign

}
