import prisma from "@/prisma/client"


export default async function handler(req: any, res: any) {
  const { method } = req

  switch (method) {
    case 'POST':

      try {
        const user = await prisma.user.create({
          data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          },
        })
        res.status(201).json(user)
      } catch (error) {
        res.status(400).json({ message: 'Something went wrong.', error: error })
      }

      break

    default:
      res.status(400).json({ message: 'That method is not supported.' })
  }

}
