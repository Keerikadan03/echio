import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../../prisma/client'
import { User } from '@prisma/client'


type Data = {
  user: User
} | {
  message: string
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
      return res.status(200).json({ user: user })

    default:
      res.status(400).json({ message: 'That method is not supported.' })

  }
}
