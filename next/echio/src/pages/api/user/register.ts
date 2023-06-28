import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { Prisma } from '@prisma/client'
import { createUserByCredentials } from '@/lib/db/user'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getServerSession(req, res, authOptions)
  if (session?.user) return {
    props: {
      redirect: {
        destination: '/',
        permanent: false,
      },
    },
  }

  switch (req.method) {

    case 'POST':
      try {

        const data = {
          ...req.body
        }

        const user = await createUserByCredentials(req.body.email, req.body.password, req.body.name)

        return res.redirect("/login")

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
