import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../../prisma/client'
import { Campaign } from '@prisma/client'


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

  if (!req.cookies.token) return res.status(401).json({ message: 'Not authenticated.' })
  const token = req.cookies.token
  // @ts-ignore
  const id = jwt.verify(token, process.env.JWT_SECRET)

  if (!id) return res.status(401).json({ message: 'Not authenticated.' })
  const user = await prisma.user.findUnique({ where: { id: id } })
  if (!user) return res.status(401).json({ message: 'Not authenticated.' })

  switch (req.method) {

    case 'POST':
      const { name, description, image} = req.body

      try {
        const campaign = await prisma.campaign.create({
          data: {
            owner_id: user.id,
            name: name,
            description: description,
            image: image,
          },
        })

        return res.status(201).json({ message: 'Campaign created.', campaign: campaign })

      } catch (error) {
        return res.status(400).json({ message: 'Something went wrong.', error: error })
      }

    default:
      res.status(400).json({ message: 'That method is not supported.' })

  }
}
