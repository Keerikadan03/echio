import prisma from "@/prisma/client";
import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";


/**
 * Try to authenticate the user from the request, handle unauthenticated on your own.
 */
export default async function auth(
  req: NextApiRequest
) : Promise<User | null> {

  if (!req.cookies.token) return null
  const token = req.cookies.token
  // @ts-ignore
  const id = jwt.verify(token, process.env.JWT_SECRET)

  if (!id) return null
  const user : User = await prisma.user.findUnique({ where: { id: id } })
  if (!user) return null

  return user

}
