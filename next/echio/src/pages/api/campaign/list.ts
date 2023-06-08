import auth from '@/lib/auth'
import list_user_campaigns from '@/lib/campaigns/list'
import type { NextApiRequest, NextApiResponse } from 'next'


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

  const user = await auth(req)
  if (!user) return res.status(401).json({ message: 'Unauthenticated' })

  switch (req.method) {

    case 'GET':
      const campaigns = await list_user_campaigns(user.id)
      return res.status(200).json({ campaigns: campaigns })

    default:
      res.status(405).json({ message: 'That method is not supported.' })

  }
}
