import { createCampaign } from "@/lib/campaigns"
import { Context } from "@/types"
import { InferGetServerSidePropsType } from "next"
import { getServerSession } from "next-auth"

import { authOptions } from "../api/auth/[...nextauth]"

export async function getServerSideProps(ctx: Context) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions)

  if (!session || !session.user) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false
      }
    }
  }

  if (ctx.req.method === "POST") {
    const owner_id = session.user.id
    const campaign = await createCampaign({ owner_id, ...ctx.req.body })

    return {
      redirect: {
        destination: `/campaigns/${campaign.id}`,
        permanent: false
      }
    }
  }

  return {
    props: {
      session: session
    }
  }
}

export default function Page({ session }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <p>make form here</p>
}
