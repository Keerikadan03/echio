'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from 'next/link';




const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidEmail = (value) => {
            // A simple email validation regex pattern
            const emailPattern = /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+(?:[A-Za-z]{2,})$/;
            return emailPattern.test(value);
        };

        // Perform validation
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password.length < 8) {
            setError('Password should be at least 8 characters long.');
            return;
        }


        // TODO: Perform login logic
        console.log('Login successful');
    };


    return (
        <>
            <ThemeProvider theme={theme}>
                <Box component="form" noValidate autoComplete="off" >

                    <div className=' font-normal flex flex-col items-center w-full flex-1 p-20 text-xs '>
                        <div className='flex flex-row w-full h-3/4 rounded-2xl'>

                            <div className='w-1/2 bg-[#6B8DE6] rounded-l-xl'>
                                <div className='absolute top-[7.5rem] left-[28rem] bg-white w-max rounded-lg z-40 '>
                                    <Image src="/images/model.jpg" className='rounded-xl drop-shadow-[4px_4px_4px_rgba(0,0,0,0.15)] p-1.5 w-[116px] h-[105px] ' width={110} height={12} alt="model" srcset="" />

                                </div>
                                <div className='rounded-lg absolute top-[12rem] left-96 w-[237px] h-[229px] bg-gradient-to-r from-[#ffffff66] to-[#ffffff1a] shadow-[0_4px_20px_-1px_rgba(0,0,0,0.25)] drop-shadow-[rgba(0,0,0,0.25)] z-30 backdrop-blur-[20px]'>
                                    <p className='flex justify-center text-white mt-[55px] text-xl text-bold'>Selena Thomas</p>

                                    <div className='h-[110px] w-[186px] absolute top-[90px] left-7 rounded-xl bg-white'>
                                        <p className='flex justify-center items-center my-3 text-sm text-gray-600 font-semibold'>ENGAGEMENT</p>
                                        <p className='flex justify-center items-center text-3xl text-[#6B8DE6] text-bold'>100%</p>
                                    </div>

                                </div>
                                <div className='rounded-lg absolute top-[9.5rem] left-40 w-[11rem] h-[2.5rem] bg-gradient-to-r from-[#ffffff66] to-[#ffffff1a] shadow-[0_4px_20px_-1px_rgba(0,0,0,0.25)] drop-shadow-[rgba(0,0,0,0.25)] z-20 '>
                                    <p className='text-white flex justify-center items-center mt-3 font-semibold'>MAKES YOU VIRAL</p>
                                </div>
                                <div className='bg-white rounded-2xl absolute top-[12.25rem] left-[7rem] w-[295px] h-[95px] z-40'>
                                    <div className='absolute'>
                                        <Image src="/images/instagram.png" className='absolute top-[1rem] left-[7.25rem]' width={20} height={20} alt="model" srcset="" />
                                        <p className='text-bold text-base relative top-[14px] left-[8.75rem] '>Instagram</p>
                                    </div>
                                    <div className='absolute top-[2.75rem] left-[7.25rem] h-[8px] w-[9rem] bg-[rgba(243,245,250,1)] rounded-lg '></div>
                                    <div className='absolute top-[3.75rem] left-[7.25rem] w-[7rem] h-[8px] bg-[rgba(243,245,250,1)] rounded-lg '></div>
                                    <p className=' text-xs font-semibold relative top-[1.1rem] left-[15rem]'>Follow</p>



                                    <div className='absolute top-[1rem] left-[1rem] w-[90px] h-[60px] bg-[#F3F5FA] rounded-lg text-3xl text-bold flex justify-center items-center'>1M</div>
                                </div>
                                <div className='bg-white rounded-xl absolute top-[20rem] left-[12rem] w-[125px] h-[55px] z-20 flex justify-center items-center'>
                                    <div className='flex gap-1 '>

                                        <Image src="/images/smile.png" className='order-0 w-[30px] h-[30px] mt-[1px]' width={30} height={28} alt="model" srcset="" />
                                        <Image src="/images/wow.png" className='order-1 w-[30px] h-[30px] ml-[2px]' width={30} height={25} alt="model" srcset="" />
                                        <Image src="/images/heart.png" className='order-2 w-[33px] h-[33px]' width={35} height={34} alt="model" srcset="" />
                                    </div>

                                </div>
                                <div className='bg-white rounded-xl absolute top-[25.5rem] left-[9rem] w-[350px] h-[103px] z-20'>
                                    <div>
                                        <Image src="/images/youtube-icon.png" className='absolute top-[1.25rem] left-[9rem] ' width={22} height={22} alt="model" srcset="" />
                                        <p className='text-bold text-base relative top-[1.25rem] left-[10.5rem]'>
                                            <Image src="/images/youtube.png" className='h-[18px] w-[50px]' width={30} height={80} alt="model" srcset="" />

                                        </p>
                                    </div>
                                    <div className='absolute top-[3rem] left-[9rem] h-[8px] w-[190px] bg-[rgba(243,245,250,1)] rounded-lg '></div>
                                    <div className='absolute top-[4rem] left-[9rem] w-[130px] h-[8px] bg-[rgba(243,245,250,1)] rounded-lg '></div>
                                    <p className=' text-xs font-semibold absolute top-[1.35rem] left-[14.5rem]'>SUBSCRIBES</p>


                                    <div className=' flex justify-center items-center relative  left-[1rem] w-[115px] h-[65px] bg-[rgba(243,245,250,1)] rounded-lg text-3xl text-bold'>
                                        <p className=''>800k</p>
                                    </div>

                                </div>

                            </div>

                            {/* SIGN IN */}
                            <div className='w-1/2 '>

                                <div className=' py-5 px-10 bg-white rounded-r-xl shadow-[0_3px_8px_rgba(0,0,0,0.1)] drop-shadow-[rgba(0,0,0,0.1)] '>
                                    {/* <p className='block text-sm text-bold'>Lets get you inside</p> */}
                                    <div className='flex'>

                                        <Image src="/images/echio-logo.png" className='h-8 mt-2 mr-2' width={30} height={5} alt="Echio-logo" srcset="" />
                                        <h1 className='text-xl my-2 font-medium'>Echio</h1>
                                    </div>
                                    <div className='mt-5 mb-8'>
                                        <p className='block text-lg text-semibold'>Sign in</p>
                                        <p className='block text-gray-600 '>to access Echio Home</p>

                                    </div>

                                    <div className=''>

                                        <div className="  mb-3">
                                            <TextField
                                                className='w-full '
                                                sx={{

                                                }}
                                                required
                                                id="outlined-required"
                                                label="Email"
                                                // defaultValue="Email"
                                                size="small"
                                                onChange={(e) => setEmail(e.target.value)}
                                                error={error}
                                            // error={email ? '' : error}
                                            />

                                        </div>
                                        <div className="mb-6 ">
                                            <TextField
                                                className='w-full '
                                                sx={{

                                                }}
                                                required
                                                id="outlined-required"
                                                type="password"
                                                label="Password"
                                                // defaultValue=""
                                                size="small"
                                                onChange={(e) => setPassword(e.target.value)}
                                                // error={password ? '' : error}
                                                error={error}

                                            // helperText={error && 'Invalid email or password'}

                                            />


                                        </div>
                                        <div className="my-3 flex justify-between items-center ">
                                            <div className='flex items-center'>
                                                <input type="checkbox" className="" id="check1" />
                                                <label className="mx-1 " for="check1">Remember me</label>
                                            </div>
                                            <div>
                                                <a href="" className='text-[#1976D2]  '>Forgot Password?</a>
                                            </div>

                                        </div>
                                        <div className=" my-5 flex items-center">
                                            <input type="checkbox" className="rounded-none " id="check2" />
                                            <label className=" mx-1 " for="check2">Yes, I understand and agree to the <b>ECHIO</b> Service</label>

                                        </div>
                                        <div className=' mt-5' >
                                            {error && <p className='text-red-600'>{error}</p>}
                                            <button className="w-full flex justify-center items-center py-2 border border-[#1976D2] rounded bg-[#1976D2] text-white hover:bg-transparent hover:text-[#1976D2] hover:border-[#1976D2] shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_1px_5px_rgba(0,0,0,0.12)]" onClick={handleSubmit}>SIGN IN</button>
                                        </div>
                                        <div className='flex justify-between my-5'>
                                            <p className='text-[rgba(0,0,0,0.4)]'>or Sign in with your mail</p>
                                            <p className="" >New to <b>ECHIO?</b> <a href="/signup" className='text-[#1976D2] '>Create your account</a></p>
                                        </div>
                                        <div className='flex justify-left '>

                                              <Link href="/api/auth/signin/google" className='flex justify-center items-center font-medium px-[14px] text-sm border rounded-lg border-[rgba(0,0,0,0.4)] bg-transparent shadow-[0_4px_4px_rgba(0,0,0,0.1)] '><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48">
                                              <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12  s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20  s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039  l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36  c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571  c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                              </svg><p className='ml-1'> Google</p></Link>
                                            <div className='mx-2'>
                                                <Image src="/images/apple-icon.png" className='' width={36} height={36} alt="" srcset="" />

                                            </div>

                                            <div className='flex justify-center items-center w-[36px] h-[36px] border border-[rgba(0,0,0,0.4)] border-w rounded-full'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                                <path fill="#e65100" d="M36.883,7.341C38.726,7.85,40,9.508,40,11.397v25.162c0,1.906-1.301,3.57-3.168,4.065L25.29,43.863 L29,36V11l-3.148-6.885L36.883,7.341z"></path><path fill="#b71c1c" d="M29,35v3.927c0,3.803-3.824,6.249-7.019,4.491l-6.936-4.445c-0.802-0.466-1.236-1.462-0.964-2.457 C14.334,35.59,15.202,35,16.115,35L29,35z"></path><path fill="#b71c1c" d="M15.456,32.228l-3.4,1.502C10.694,34.532,9,33.518,9,31.901V14.904c0-1.536,0.811-2.95,2.116-3.691 l11.83-6.687C25.669,2.983,29,5.014,29,8.218v3.09l-10.037,3.486C17.78,15.263,17,16.436,17,17.743v11.742 C17,30.618,16.41,31.665,15.456,32.228z"></path>
                                            </svg></div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </Box>
            </ThemeProvider >

        </>
    )
}

export default Page
