import * as React from 'react';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material"
import TextField from "@mui/material/TextField"
import { getCsrfToken } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import theme from "../../../theme"

export default async function LoginForm() {
  const csrfToken = await getCsrfToken()

  return (
    <div className="w-1/2 bg-[#FFF] relative items-center justify-center rounded-r-xl">
    <ThemeProvider theme={theme}>
      <form method="POST" action="/api/auth/callback/credentials">
        {/* SIGN IN */}
        <div className="w-1/2 items-center justify-center ml-14">
            <div className="flex">
              <Image src="/images/echio-logo.png"
              className="h-9 w-8 mt-3 mr-3"
              width={28}
              height={27} 
              alt="Echio-logo"
              />
              <h1 className="flex items-center justify-center top-[14px] text-bold text-lg my-4 font-Roboto">Echio</h1>
            </div>
            <div className="mt-5 mb-8">
              <p className="block text-lg mr-14 text-semibold">Sign in</p>
              <p className="block text-gray-600 mr-14">to access Echio Home</p>
            </div>
            {/*Email Text-Field*/}
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div className="">
              <div className="  mr-14 mb-3">
                <TextField
                  className="w-full mr-14"
                  sx={{}}
                  required
                  id="outlined-required"
                  label="Email"
                  // defaultValue="Email"
                  size="small"
                  name="email"
                  // error={email ? '' : error}
                />
              </div>
              <div className="mb-6 ">
                <TextField
                  className="w-full "
                  sx={{}}
                  required
                  id="outlined-required"
                  type="password"
                  label="Password"
                  name="password"
                  size="small"
                />
              </div>
              {/*Field-Ended*/}
              <div className="my-3 flex justify-between items-center ">
                <div className="flex items-center">
                  <input type="checkbox" className="" id="check1" />
                  <label className="mx-1 " htmlFor="check1">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="" className="text-[#1976D2]  ">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className=" my-5 flex items-center">
                <input type="checkbox" className="rounded-none " id="check2" />
                <label className=" mx-1 " htmlFor="check2">
                  Yes, I understand and agree to the <b>ECHIO</b> Services
                </label>
              </div>
              {/*Submit Button */}
              <div className="variant=contained mt-5">
                <input
                  type="submit"
                  value="Sign In"
                  className="w-full flex justify-center items-center py-3 border border-[#1976D2] rounded bg-[#1976D2] text-white hover:bg-transparent hover:text-[#1976D2] hover:border-[#1976D2] shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_1px_5px_rgba(0,0,0,0.12)]"
                  text="Sign In"
                />
              </div>
              {/*Button Ended*/}
              <div className="flex justify-between my-5">
                <p className="">
                  New to <b>ECHIO?</b>{" "}
                  <Link href="/signup" className="text-[#1976D2] ">
                    Create your account
                  </Link>
                </p>
              </div>

              <div className="flex justify-left ">
              </div>
            </div>
          </div>
      </form>
    </ThemeProvider>
    </div>
  )
}
