import { Context } from "@/types";
import { InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react";

export async function getServerSideProps(ctx: Context) {

  const csrfToken = await getCsrfToken(ctx)

  return {
    props: {
      csrfToken: csrfToken,

}}
  }


export default function Page({csrfToken}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <div>
      Register
      <form method="post" action="/api/user/register">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Name
          <input name="name" type="text" />
        </label>
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
