import type { NextApiRequest, NextApiResponse } from 'next'
import create_campaign from '@/lib/campaigns/create'
import auth from '@/lib/auth'


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
      const { name, description, image} = req.body

      try {
        const campaign = await create_campaign(user.id, name, description, image)
        return res.status(201).json({ message: 'Campaign created.', campaign: campaign })

      } catch (error) {
        return res.status(400).json({ message: 'Something went wrong.', error: error })
      }

    default:
      res.status(400).json({ message: 'That method is not supported.' })

  }
}
