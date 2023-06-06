import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../../prisma/client'
import { Influencer, Prisma } from '@prisma/client'


type Data = {
  message: string,
  error?: any,
} | {
  message: string,
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

    case 'POST':

      let { followers, avg_likes, avg_comments } = req.body

      followers = parseInt(followers)
      avg_likes = parseInt(avg_likes)
      avg_comments = parseInt(avg_comments)

      if (
        isNaN(followers) ||
        isNaN(avg_likes) ||
        isNaN(avg_comments)
      ) return res.status(400).json({ message: 'Invalid request.' })

      try {
        const influencer = await prisma.influencer.create({
          data: {
            user_id: user.id,
            followers: followers,
            avg_likes: avg_likes,
            avg_comments: avg_comments,
          }
        })

        return res.status(200).json({ message: 'Influencer registered.', influencer: influencer })
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === 'P2002') return res.status(400).json({ message: 'Influencer already registered.' })
        }
        return res.status(500).json({ message: 'Internal server error.', error: error })
      }

    default:
      return res.status(400).json({ message: 'That method is not supported.' })

  }
}
