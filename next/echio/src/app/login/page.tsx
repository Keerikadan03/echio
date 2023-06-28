import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import LoginPage from "./login-page"

const Page = async () => {
  const session = await getServerSession(authOptions)
  // if (session.session == "authenticated") {
  //   redirect("/")
  // }

  return (
    <LoginPage />
  )
}

export default Page
