import type { NextApiRequest, NextApiResponse } from 'next'
import create_campaign from '@/lib/campaigns/create'
import auth from '@/lib/auth'
import { parseBool } from '@/lib/utils'


type Data = {
  message: string,
  error?: any,
} | {
  message: string,
  campaign: Campaign,
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const user = await auth(req)
  if (!user) return res.status(401).json({ message: 'Unauthenticated' })

  switch (req.method) {

    case 'POST':
      let { name, description, image, product_media, product_description, campaign_type, nsfw } = req.body

      try {
        nsfw = parseBool(nsfw)
        product_media = product_media.split(',')
        switch (campaign_type) {
          case 'PAID':
          case 'BARTER':
          case 'NORMAL':
            break
          case undefined:
            campaign_type = 'NORMAL'
          default:
            throw 'Invalid campaign type.'
        }
        const campaign = await create_campaign({
          owner_id: user.id,
          name: name,
          description: description,
          image: image,
          campaign_type: campaign_type,
          nsfw: nsfw,
          product_media: product_media,
          product_description: product_description
        })
        return res.status(201).json({ message: 'Campaign created.', campaign: campaign })

      } catch (error) {
        return res.status(400).json({ message: 'Something went wrong.', error: error })
      }

    default:
      res.status(400).json({ message: 'That method is not supported.' })

  }
}
