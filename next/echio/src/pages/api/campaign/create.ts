import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { Prisma } from '@prisma/client'




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getServerSession(req, res, authOptions)
  if (!session || !session.user) return res.status(401).json({ message: 'Unauthorized' })


  switch (req.method) {

    case 'POST':
      try {

        console.log(res)

      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2002') {
            return res.status(400).json({ message: 'Something went wrong', error: ''})
          }
        }
        return res.status(500).json({ message: 'Something went wrong.', error: e})
      }

    case 'GET':
      break

    default:
      return res.status(400).json({ message: 'That method is not supported.' })

  }
}
