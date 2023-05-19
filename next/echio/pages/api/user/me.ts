import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../../prisma/client'

type Data = {
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {

    case 'GET':

      const token = req.headers.authorization?.split(' ')[1]
      if (!token) return res.status(401).json({ message: 'No token provided.' })
      // @ts-ignore
      const id = jwt.verify(token, process.env.JWT_SECRET)

      if (!id) return res.status(401).json({ message: 'Invalid token.' })
      const user = await prisma.user.findUnique({ where: { id: id } })
      if (!user) return res.status(401).json({ message: 'Invalid token' })

      return res.status(200).json({ user: user })

    default:
      res.status(400).json({ message: 'That method is not supported.' })

  }
}
