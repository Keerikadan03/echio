"use client"

import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Context } from "@/types"
import { InferGetServerSidePropsType } from "next"
import { getServerSession } from "next-auth"
import { getCsrfToken, signIn } from "next-auth/react"
import { getProviders } from "next-auth/react"
import { useRouter } from "next/router"

export async function getServerSideProps(ctx: Context) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions)

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  const providers = await getProviders()
  const csrfToken = await getCsrfToken(ctx)

  return {
    props: {
      providers: providers,
      csrfToken: csrfToken,
    }
  }
}

export default function Page({
  providers,
  csrfToken,
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const router = useRouter()
  let register = false
  if (router.query.register == 'true') register = true


    return (
      <div>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <h1>Sign In</h1>
        {providers &&
          Object.values(providers)
            .filter((provider) => provider.id != "credentials")
            .map((provider) => (
              <div key={provider.name} style={{ marginBottom: 0 }}>
                <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
              </div>
            ))}

        <form method="post" action="/api/auth/callback/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            Email
            <input name="email" type="text" />
          </label>
          <label>
            Password
            <input name="password" type="password" />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </div>
    )
}
