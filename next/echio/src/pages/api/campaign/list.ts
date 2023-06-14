import list_user_campaigns from '@/lib/campaigns/list'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getServerSession(req, res, authOptions)
  if (!session || !session.user) return res.status(401).json({ message: 'Unauthenticated' })



  switch (req.method) {

    case 'GET':
      const campaigns = await list_user_campaigns(session.user.id)
      return res.status(200).json({ campaigns: campaigns })

    default:
      res.status(405).json({ message: 'That method is not supported.' })

  }
}
