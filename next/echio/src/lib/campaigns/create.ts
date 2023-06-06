import prisma from "@/prisma/client"


export default async function create_campaign(
  owner_id: string,
  name: string,
  description: string,
  image?: string,
) : Promise<Campaign> {

  const campaign = await prisma.campaign.create({
    data: {
      owner_id: owner_id,
      name: name,
      description: description,
      image: image,
    },
  })

  return campaign
}
