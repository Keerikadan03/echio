import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../../prisma/client'
import { Influencer, Prisma } from '@prisma/client'


type Data = {
  message: string,
  error?: any,
} | {
  influencers: Influencer[],
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (!req.cookies.token) return res.status(401).json({ message: 'Not authenticated.' })
  const token = req.cookies.token
  // @ts-ignore
  const id = jwt.verify(token, process.env.JWT_SECRET)

  if (!id) return res.status(401).json({ message: 'Not authenticated.' })
  const user = await prisma.user.findUnique({ where: { id: id } })
  if (!user) return res.status(401).json({ message: 'Not authenticated.' })

  switch (req.method) {

    case 'GET':

      const { campaign_id } = req.query


      try {

        if (!campaign_id) throw new Error('No campaign id was provided.')
        if (typeof campaign_id !== 'string') throw new Error('Campaign id must be a string.')

        const influencer_ids = await prisma.campaignInfluencerAccepted.findMany({
          where: {
            // @ts-ignore
            campaign_id: campaign_id,
          },
          select: {
            influencer_id: true,
          }
        })

        let influencers: Influencer[] = []
        for (let i of influencer_ids) {
          const influencer = await prisma.influencer.findUnique({ where: { id: i.influencer_id } })
          if (!influencer) throw new Error('Influencer with id ' + i.influencer_id + ' was not found.')
          influencers.push(influencer)
        }

        return res.status(200).json({ influencers: influencers })

      } catch (e) {
        if (e instanceof Error)
          return res.status(400).json({ message: 'Bad request', error: e.message })
        return res.status(400).json({ message: 'Bad request' })
      }

      break

    default:
      return res.status(400).json({ message: 'That method is not supported.' })

  }
}
