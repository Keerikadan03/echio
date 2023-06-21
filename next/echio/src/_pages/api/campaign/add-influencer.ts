import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { Prisma } from '@prisma/client'
import { z } from 'zod'
import { isValidObjectId } from 'mongoose'
import { addInfluencerToCampaign } from '@/lib/db/influencer'

const input = z.object({
  campaign_id: z.string().refine(isValidObjectId),
  influencer_id: z.string().refine(isValidObjectId)
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getServerSession(req, res, authOptions)
  if (!session || !session.user) return res.status(401).json({ message: 'Unauthorized' })


  switch (req.method) {

    case 'POST':
      try {

        const data = input.parse(req.body)

        await addInfluencerToCampaign(data.influencer_id, data.campaign_id)

        return res.status(200).json({ message: 'Influencer added to campaign.' })

      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2002') {
            return res.status(400).json({ message: 'Something went wrong', error: ''})
          }
        }
        return res.status(500).json({ message: 'Something went wrong.', error: e})
      }

    case 'GET':
      break

    default:
      return res.status(400).json({ message: 'That method is not supported.' })

  }
}
