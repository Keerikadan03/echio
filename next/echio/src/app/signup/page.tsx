import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import LoginPage from "./login-page"
import { redirect } from "next/navigation"

const Page = async () => {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect("/")
  }

  return (
    <LoginPage />
  )
}

export default Page
