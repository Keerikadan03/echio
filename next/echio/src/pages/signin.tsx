"use client"

import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Context } from "@/types"
import { InferGetServerSidePropsType } from "next"
import { getCsrfToken, signIn } from "next-auth/react"
import { getProviders } from "next-auth/react"
import { getServerSession } from "next-auth"


export async function getServerSideProps(ctx : Context) {
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
        session: session,
        csrfToken: csrfToken
      }
  }
}

export default function Page({ providers, csrfToken, ...props } : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <h1>Sign In</h1>
            {providers &&
              Object.values(providers).map(provider => (
                <div key={provider.name} style={{ marginBottom: 0 }}>
                  <button onClick={() => signIn(provider.id)} >
                    Sign in with{' '} {provider.name}
                  </button>
                </div>
              ))}

    </div>
  )
}
