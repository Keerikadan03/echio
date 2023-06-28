"use client"

import Design from "./design"
import LoginForm from "./login-form"

export default function LoginPage() {
  return (
    <>
      <div className=" font-normal flex flex-col items-center w-full flex-1 p-20 text-xs ">
        <div className="flex flex-row w-full h-3/4 rounded-2xl">
          <Design />

          <LoginForm />
        </div>
      </div>
    </>
  )
}
