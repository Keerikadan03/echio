'use client'
import React from 'react'
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';
import Image from 'next/image'
import { useState } from 'react'


export default function CampaignForm (props) {
    const [image1, setImage1] = useState(null)
    const [fileName1, setFileName1] = useState("No file selected");
    const [image2, setImage2] = useState(null)
    const [fileName2, setFileName2] = useState("No file selected");


    return (
        <>
            <ThemeProvider theme={theme}>
                <Box component="form" noValidate autoComplete="off" >


                    <div className='text-xs mb-20'>
                        <div className='absolute left-[82px] top-[130px] text-xl font-bold fixed'><p>Create Campaign </p></div>
                        <div className='flex absolute top-[203px] left-[82px]  pb-8'>

                            <div className='relative font-semibold text-gray-500 '>

                                <div className='flex flex-col justify-center items-center w-[230px] h-[205px] bg-white px-6 py-4 rounded-md shadow-[0_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_rgba(0,0,0,0.14),0px_1px_3px_rgba(0,0,0,0.12)] '>
                                    <p className=''>BASIC DETAILS</p>
                                    <p className='my-10'>PRODUCT DETAIL</p>
                                    <p className=''>CAMPAIGN TYPE</p>
                                </div>
                            </div>
                            <div className='relative left-[2rem] top-[0rem] w-[683px] '>

                                <div className='flex flex-col bg-white rounded-md p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] drop-shadow-[rgba(0,0,0,0.25)]'>
                                    <p className='text-gray-500 font-semibold mb-3'>Campaign Image</p>


                                    <div className='bg-[rgba(0,0,0,0.2)] w-40 h-40 rounded-lg mb-2 ' onClick={() => document.querySelector("#upload-img").click()}>
                                        <input className='hidden' type="file" accept="image/*" name="campaign-img" id="upload-img" onChange={({ target: { files } }) => {
                                            files[0] && setFileName1(files[0].name);
                                            if (files) {
                                                setImage1(URL.createObjectURL(files[0]))
                                            }
                                        }} />
                                        {/* <button type="submit" className="relative top-[7rem] left-[2.3rem] ml-2 px-2 py-2 text-xs rounded-lg bg-[#6B8DE6] text-white " >UPLOAD</button> */}
                                        <Image src="/images/upload-icon1.png" className=' flex justify-center items-center relative ' width={20} height={20} alt="upload-icon" />
                                        {image1 ? <Image className='w-40 h-40 rounded-lg mt-0 relative bottom-[2rem]' src={image1} width={150} height={100} alt={fileName1} /> : <p className='text-gray-500'> </p>}

                                    </div>

                                    <div className='text-gray-500 font-semibold w-44 mb-4'>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB </div>


                                    <TextField
                                        className='w-full mb-[25px]'
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                // Customize border size here
                                                // border: '1px solid',

                                            },
                                        }}
                                        required
                                        id="outlined-required"
                                        label="Campaign Name"
                                        // defaultValue="Campaign Name"
                                        size="small"
                                    />
                                    <TextField
                                        className='w-full mb-[25px]'
                                        sx={{
                                        }}
                                        required
                                        id="outlined-multiline-flexible"
                                        label="Campaign Description"
                                        // defaultValue="Campaign Description"
                                        size="small"
                                        multiline
                                        maxRows={5}

                                    />


                                    <div className='mb-[25px]'>
                                        <p className='text-gray-500 font-semibold mb-3'>Product image or video</p>

                                        <div onClick={() => document.querySelector("#upload-file").click()} className='w-full border border-dashed h-32 rounded border-[rgba(0,0,0,0.12)] hover:border-[#1976D2] focus:border-[#1976D2] mb-[25px]'>
                                            <div className='rounded-full bg-sky-100 w-[35px] h-[35px] flex justify-center items-center ml-[17rem] mt-[1.5rem]'>
                                                <Image className='ml-[5px] ' src="/images/upload-icon2.png" width={16} height={16} alt="" />
                                            </div>
                                            <label htmlFor="upload-file" className='flex justify-center items-center mt-3 '>
                                                <p className=' text-[#1976D2] underline mr-1'>Click to upload image or video </p> <p> or drag and drop</p>
                                            </label>
                                            <p className='flex justify-center text-[rgba(0,0,0,0.54)] font-medium mt-[8px]'>SVG, PNG, JPG or GIF (max. 3MB)</p>
                                            <input type="file" className='hidden' accept="image/* , video/*" name="" id="upload-file" onChange={({ target: { files } }) => {
                                                files[0] && setFileName2(files[0].name);
                                                if (files) {
                                                    setImage2(URL.createObjectURL(files[0]))
                                                }
                                            }} />
                                        </div>
                                        <div className=''>
                                            <p className='text-gray-500 font-semibold mb-3'>Image Preview</p>
                                            {image2 ? <div className='flex items-center justify-center'><Image className=' h-[150px] w-auto' src={image2} width={150} height={100} alt={fileName2} /> </div> : <p className='text-gray-500'>No file selected </p>}
                                        </div>

                                    </div>
                                    <TextField
                                        className='w-full mb-[25px] '
                                        sx={{
                                        }}
                                        required
                                        id="outlined-multiline-flexible"
                                        label="Product Description"
                                        // defaultValue="Product Description"
                                        size="small"
                                        multiline
                                        maxRows={5}

                                    />
                                    <div className='mb-[25px] '>
                                        <p className='text-gray-500 font-semibold '>Campaign Type</p>
                                        <div className='mt-4 flex items-center'>
                                            <input type="radio" name="" id="" />
                                            <label htmlFor="" className=' ml-2 mr-8'>Barter</label>
                                            <input type="radio" name="" id="" />
                                            <label htmlFor="" className=' ml-2 mr-8'>Normal</label>
                                            <input type="radio" name="" id="" />
                                            <label htmlFor="" className=' ml-2 mr-8'>Bid</label>
                                        </div>

                                    </div>
                                    <div className='mb-[25px]'>
                                        <p className='text-gray-500 font-semibold '>Campaign Duration</p>
                                        <div className=' mt-3 w-full' >

                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    className=' w-[]'

                                                    label="Start Date"
                                                    value={null}
                                                    onChange={() => { }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                                <DatePicker
                                                    className='ml-4 w-[]'
                                                    label="End Date"
                                                    value={null}
                                                    onChange={() => { }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                        </div>


                                    </div>
                                    <div className='mb-10'>
                                        <p className='text-gray-500 font-semibold '>NSFW Content</p>
                                        <div className='flex items-center mt-4'>
                                            <input type="radio" name="" id="" />
                                            <label htmlFor="" className=' ml-2 mr-8'>Yes</label>
                                            <input type="radio" name="" id="" />
                                            <label htmlFor="" className=' ml-2 mr-8'>No</label>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className=" float-right ml-2 px-3 py-2 text-xs rounded-lg bg-[#6B8DE6] text-white  ">SAVE</button>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div >
                </Box>
            </ThemeProvider >

        </>
    )
}

