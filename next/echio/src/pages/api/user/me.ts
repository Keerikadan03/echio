import type { NextApiRequest, NextApiResponse } from 'next'
import auth from '@/lib/auth'


type Data = {
  user: User
} | {
  message: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const user = await auth(req)
  if (!user) return res.status(401).json({ message: 'Unauthenticated' })

  switch (req.method) {

    case 'GET':
      return res.status(200).json({ user: user })

    default:
      res.status(405).json({ message: 'That method is not supported.' })

  }
}
