import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { Prisma } from '@prisma/client'
import { getCampaignDetails } from '@/lib/db/campaignDetails/campaignDetails'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    // const session = await getServerSession(req, res, authOptions)
    // console.log(session)

    res.status(200).json({ name: 'John toe' })
}

