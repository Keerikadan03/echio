import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import LoginPage from "./login-page"

const Page = async () => {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect("/")
  }

  return <LoginPage />
}

export default Page
