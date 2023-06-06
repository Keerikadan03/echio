import prisma from "@/prisma/client"


export default async function list_user_campaigns(
  user_id: string
) : Promise<Campaign[]> {
    const campaigns : Campaign[] = await prisma.campaign.findMany({ where: { owner_id: user_id, } })
    return campaigns
}
