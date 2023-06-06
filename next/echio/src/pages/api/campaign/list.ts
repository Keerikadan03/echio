import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../../prisma/client'
import { Campaign } from '@prisma/client'


type Data = {
  campaigns: Campaign[],
} | {
  message: string,
  error?: any,
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
      const campaigns = await prisma.campaign.findMany({ where: {
          owner_id: user.id,
        }
      })

      return res.status(200).json({ campaigns: campaigns })

    default:
      res.status(400).json({ message: 'That method is not supported.' })

  }
}
