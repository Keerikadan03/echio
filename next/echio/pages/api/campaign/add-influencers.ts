import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../../prisma/client'
import { Prisma, Campaign, Influencer } from '@prisma/client'


type Data = {
  message: string,
  error?: any,
} | {
  message: string,
  count: number,
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

    case 'POST':
      try {

        const { influencer_ids, campaign_id } = req.body

        // check influencer_ids

        if (!influencer_ids) throw new Error('No influencer ids were provided.')
        if (!Array.isArray(influencer_ids)) return res.status(400).json({ message: 'Bad request', error: 'Influencer ids must be an array.' })


        let influencers : Influencer[] = []

        for (let i of influencer_ids) {
          const influencer = await prisma.influencer.findUnique({ where: { id: i } })
          if (!influencer) throw new Error('Influencer with id ' + i + ' was not found.')
          influencers.push(influencer)
        }

        console.log(influencer_ids)

        // check campaign_id

        if (!campaign_id) throw new Error('No campaign id was provided.')
        // @ts-ignore : it will raise an error if the id is not a string
        const campaign: Campaign = await prisma.campaign.findUnique({ where: { id: campaign_id } })
        if (!campaign) throw new Error('Campaign with id ' + req.query.id + ' was not found.')

        // add influencers
        let n_added = 0
        for (let i of influencers) {
          const already_exist = await prisma.campaignInfluencerAccepted.findUnique({
            where: {
              campaign_id_influencer_id : {
                campaign_id: campaign_id,
                influencer_id: i.id
              }
            }
          })

          if (already_exist) continue

          try {
              await prisma.campaignInfluencerPending.create({
                data: {
                  campaign_id: campaign_id,
                  influencer_id: i.id
                }
              })
          } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
              if (e.code === 'P2002') {
                // already exists
                continue
              }
            }
          }

          n_added++;
        }

        return res.status(200).json({ message: 'Added ' + n_added + ' influencers.', count: n_added})

      } catch (e) {
        console.log(e)
        return res.status(400).json({ message: 'Bad request', error: e})
      }

      break

    default:
      return res.status(400).json({ message: 'That method is not supported.' })

  }
}
