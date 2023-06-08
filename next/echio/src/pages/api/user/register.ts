import prisma from "@/prisma/client"


export default async function handler(req: any, res: any) {
  const { method } = req

  switch (method) {
    case 'POST':

      try {
        await prisma.user.create({
          data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          },
        })

        res.status(200).json({ message: 'User created successfully' })

      } catch (error) {
        res.status(400).json({ message: 'Something went wrong.', error: error })
      }

      break

    default:
      res.status(405).json({ message: 'That method is not supported.' })
  }

}
