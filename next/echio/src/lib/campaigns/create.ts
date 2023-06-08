import prisma from "@/prisma/client"

export default async function create_campaign({
  owner_id,
  name,
  description,
  product_media,
  product_description,
  image,
  campaign_type,
  nsfw
}: {
  owner_id: string
  name: string
  description: string
  product_media: string[]
  product_description: string
  image?: string
  campaign_type?: string
  nsfw?: boolean
}): Promise<Campaign> {
  const campaign = await prisma.campaign.create({
    data: {
      owner_id: owner_id,
      name: name,
      description: description,
      image: image,
      campaign_type: campaign_type,
      nsfw: nsfw,
      product_media: product_media,
      product_description: product_description
    }
  })

  return campaign
}
