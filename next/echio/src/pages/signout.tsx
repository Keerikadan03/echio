import { Context } from "@/types"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"
import { authOptions } from "./api/auth/[...nextauth]"

export async function getServerSideProps(ctx: Context) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions)
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }
  return {
    props: {
      session: session
    }
  }
}

export default function Page() {
  return <button onClick={() => signOut()}>Sign out</button>
}
