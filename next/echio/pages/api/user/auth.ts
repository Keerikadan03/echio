import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../../prisma/client'
import { serialize } from 'cookie'


type Data = {
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  switch (req.method) {

    case 'GET':

      if (!(typeof req.query.email === 'string')) return res.status(400).json({ message: 'Invalid query' })
      const user = await prisma.user.findUnique({ where: { email: req.query.email } })

      if (!user || user.password !== req.query.password) {
        return res.status(404).json({ message: 'Email and password not match' })
      }

      // @ts-ignore
      const token = jwt.sign(user.id, process.env.JWT_SECRET)

      res.setHeader('Set-Cookie', serialize('token', token, { path: '/', httpOnly: true, sameSite: 'strict'}))
      res.status(200).json({ message: 'Login success'})

    default:
      res.status(400).json({ message: 'That method is not supported.' })

  }
}
