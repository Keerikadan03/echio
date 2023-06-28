"use client"

import { signIn } from "next-auth/react"


export default function Page() {
  return (
    <button onClick={() => {
        signIn("credentials", {
          email: "user1@example.com",
          password: "user1",
          })
      }}>

      Force login
      </button>
  )
  }
