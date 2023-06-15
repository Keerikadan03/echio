import { getCampaignById, getCampaignInfluencers } from "@/lib/db/campaigns"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Context } from "@/types"
import { InferGetServerSidePropsType } from "next"
import { getServerSession } from "next-auth"

export async function getServerSideProps(ctx: Context) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions)
  if (!session || !session.user) return { redirect: { destination: "/auth/signin", permanent: false } }

  const campaign_id = ctx.query.campaign_id

  const campaign = await getCampaignById(campaign_id)

  const influencers = await getCampaignInfluencers(campaign_id)

  return {
    props: {
      campaign: campaign,
      influencers: influencers
    }
  }
}

export default function Page({campaign, influencers} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(campaign)
  console.log(influencers)
  return <div>Campaign
    {JSON.stringify(campaign)}
  </div>
}
