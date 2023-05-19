import prisma from '../../../prisma/client'
import jwt from 'jsonwebtoken'

// return a jwt token
export default async function handler(req: any, res: any) {
  switch (req.method) {

    case 'GET':

      const user = await prisma.user.findUnique({ where: { email: req.query.email, } })

      if (!user || user.password !== req.query.password) {
        return res.status(404).json({ message: 'Email and password not match' })
      }

      // @ts-ignore
      const token = jwt.sign(user.id, process.env.JWT_SECRET)

      return res.status(200).json({ token: token })

    default:
      res.status(400).json({ message: 'That method is not supported.' })

  }
}
