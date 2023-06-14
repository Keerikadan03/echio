import { createUserByCredentials } from '@/lib/db/user'
import prisma from '../../../lib/prisma'


export default async function handler(req: any, res: any) {
  const { method } = req

  switch (method) {
    case 'POST':

      try {
        await createUserByCredentials(req.body.email, req.body.password, req.body.name)
        res.status(200).json({ message: 'User created successfully.' })

      } catch (error) {
        res.status(400).json({ message: 'Something went wrong.', error: error })
      }

      break

    default:
      res.status(405).json({ message: 'That method is not supported.' })
  }

}
