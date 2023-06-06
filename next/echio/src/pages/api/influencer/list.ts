import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../../prisma/client'


type Data = {
  message: string,
  error?: any,
} | {
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

      const {
        min_followers,
        max_followers,
        min_avg_likes,
        max_avg_likes,
        min_avg_comments,
        max_avg_comments,
      } = req.query

      let _min_followers : number
      let _max_followers : number
      let _min_avg_likes : number
      let _max_avg_likes : number
      let _min_avg_comments : number
      let _max_avg_comments : number

      if (!min_followers) _min_followers = 0
      else _min_followers = parseInt(min_followers as string)

      if (!max_followers) _max_followers = 1000000000000000
      else _max_followers = parseInt(max_followers as string)

      if (!min_avg_likes) _min_avg_likes = 0
      else _min_avg_likes = parseInt(min_avg_likes as string)

      if (!max_avg_likes) _max_avg_likes = 1000000000000000
      else _max_avg_likes = parseInt(max_avg_likes as string)

      if (!min_avg_comments) _min_avg_comments = 0
      else _min_avg_comments = parseInt(min_avg_comments as string)

      if (!max_avg_comments) _max_avg_comments = 1000000000000000
      else _max_avg_comments = parseInt(max_avg_comments as string)

      if (
        isNaN(_min_followers) ||
        isNaN(_max_followers) ||
        isNaN(_min_avg_likes) ||
        isNaN(_max_avg_likes) ||
        isNaN(_min_avg_comments) ||
        isNaN(_max_avg_comments)
      ) return res.status(400).json({ message: 'Invalid request.' })

      const influencers = await prisma.influencer.findMany({
        where: {
          followers: {
            gte: _min_followers,
            lte: _max_followers,
          },
          avg_likes: {
            gte: _min_avg_likes,
            lte: _max_avg_likes,
          },
          avg_comments: {
            gte: _min_avg_comments,
            lte: _max_avg_comments,
          },
        }
      })

      return res.status(200).json({ influencers: influencers })

    default:
      return res.status(400).json({ message: 'That method is not supported.' })

  }
}
