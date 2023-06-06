import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../../prisma/client'
import { Influencer } from '@prisma/client'


type Data = {
  message: string,
  error?: any,
} | {
  influencer: Influencer,
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

      if (!req.query.id) return res.status(400).json({ message: 'Bad request.', error: 'Missing influencer id.' })
      if (typeof req.query.id !== 'string') return res.status(400).json({ message: 'Bad request.', error: 'Influencer id must be a string.' })

      try {
        const influencer = await prisma.influencer.findUnique({ where: { id: req.query.id } })
        if (!influencer) return res.status(404).json({ message: 'Influencer not found.' })
        return res.status(200).json({ influencer: influencer })
      } catch (e) {
        return res.status(400).json({ message: 'Bad request.', error: e })
      }

    default:
      return res.status(400).json({ message: 'That method is not supported.' })

  }
}
