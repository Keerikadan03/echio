import prisma from "@/prisma/client"



export default async function handler(req: any, res: any) {
  switch (req.method) {

    case 'GET':

      const user = await prisma.user.findUnique({ where: {
          // id: req.query.id,
          email: req.query.email,
        }
      })

      console.log(user)
      if (!user) {
        return res.status(404).json({ message: 'User not found.' })
      }

      return res.status(200).json(user)

    default:
      return res.status(400).json({ message: 'That method is not supported.' })

  }
}
