import { Context } from "@/types";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { getCampaigns } from "@/lib/campaigns";
import { InferGetServerSidePropsType } from "next";
import { campaigns } from "@prisma/client";


export async function getServerSideProps(ctx : Context) {

  const session = await getServerSession(ctx.req, ctx.res, authOptions)

  if (!session || !session.user) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  const campaigns = await getCampaigns(session.user.id)

  return {
    props: {
        session: session,
        campaigns: campaigns
      }
  }

}


export default function Page({ session, campaigns }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
      <div>
      Campaigns
      {campaigns.map((campaign: campaigns) => (
            <div key={campaign.id}>
            <h1>{campaign.name}</h1>
            <p>{campaign.description}</p>
            <p>{campaign.campaign_type}</p>
            <p>{campaign.image}</p>
            <p>{campaign.product_media}</p>
            <p>{campaign.product_description}</p>
            <p>{campaign.nsfw}</p>
            </div>
            ))}
      </div>
  )

  }
