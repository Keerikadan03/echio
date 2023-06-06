

import type { NextApiRequest, NextApiResponse } from 'next'
import auth from '@/lib/auth'
import { serialize } from 'cookie'


type Data = {
  message: string,
  error?: any,
} | {
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const user = await auth(req)
  if (!user) return res.status(401).json({ message: 'Unauthenticated' })

  switch (req.method) {

    case 'POST':
      // invalidate token here
      // but since we're storing user id in jwt, can't invalidate it

      // remove jwt from cookie

      res.setHeader('Set-Cookie', serialize('token', 'deleted', { path: '/', httpOnly: true, sameSite: 'strict'}))
      res.status(200).json({ message: 'Logout success'})


    default:
      return res.status(400).json({ message: 'That method is not supported.' })

  }
}
