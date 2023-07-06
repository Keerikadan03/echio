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
              className="l-28 h-8 mt-3 ml-6 mr-3"
              width={28}
              height={27} 
              alt="Echio-logo"
              />
              <h1 className="flex items-center justify-center top-[14px] text-bold text-lg my-3 font-Roboto">Echio</h1>
            </div>
            <div className="mt-5 mb-8">
              <p className="block text-lg mr-14 text-semibold">Sign in</p>
              <p className="block text-gray-600 mr-14">to access Echio Home</p>
            </div>

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
              <div className=" mt-5">
                <input
                  type="submit"
                  className="w-full flex justify-center items-center py-3 border border-[#1976D2] rounded bg-[#1976D2] text-white hover:bg-transparent hover:text-[#1976D2] hover:border-[#1976D2] shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_1px_5px_rgba(0,0,0,0.12)]"
                  text="submit"
                />
              </div>
              <div className="flex justify-between my-5">
                <p className="text-[rgba(0,0,0,0.4)]">or Sign in with your mail</p>
                <p className="">
                  New to <b>ECHIO?</b>{" "}
                  <a href="/signup" className="text-[#1976D2] ">
                    Create your account
                  </a>
                </p>
              </div>
              <div className="flex justify-left ">
                <Link
                  href="/api/auth/signin/google"
                  className="flex justify-center items-center font-medium px-[14px] text-sm border rounded-lg border-[rgba(0,0,0,0.4)] bg-transparent shadow-[0_4px_4px_rgba(0,0,0,0.1)] "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48">
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12  s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20  s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039  l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36  c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571  c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  <p className="ml-1"> Google</p>
                </Link>
                <div className="mx-2">
                  <Image src="/images/apple-icon.png" className="" width={36} height={36} alt="" />
                </div>

                <div className="flex justify-center items-center w-[36px] h-[36px] border border-[rgba(0,0,0,0.4)] border-w rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path
                      fill="#e65100"
                      d="M36.883,7.341C38.726,7.85,40,9.508,40,11.397v25.162c0,1.906-1.301,3.57-3.168,4.065L25.29,43.863 L29,36V11l-3.148-6.885L36.883,7.341z"
                    ></path>
                    <path
                      fill="#b71c1c"
                      d="M29,35v3.927c0,3.803-3.824,6.249-7.019,4.491l-6.936-4.445c-0.802-0.466-1.236-1.462-0.964-2.457 C14.334,35.59,15.202,35,16.115,35L29,35z"
                    ></path>
                    <path
                      fill="#b71c1c"
                      d="M15.456,32.228l-3.4,1.502C10.694,34.532,9,33.518,9,31.901V14.904c0-1.536,0.811-2.95,2.116-3.691 l11.83-6.687C25.669,2.983,29,5.014,29,8.218v3.09l-10.037,3.486C17.78,15.263,17,16.436,17,17.743v11.742 C17,30.618,16.41,31.665,15.456,32.228z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
      </form>
    </ThemeProvider>
    </div>
  )
}
