'use client'

import React, {useState} from 'react'
import { Stack, Typography,Tab } from '@mui/material'
import { Searchbar } from '@/app/campaign/campaigndetail/components/Searchbar'
import { TabContext,TabList, TabPanel } from '@mui/lab'

export const CampaignSection = () => {
    const [value, setValue] = useState('0') 
    const handleChange = (event : any , newValue: string)=>{
        setValue(newValue)
    }
  return (
    <div>
        <Stack>
            <Typography>Campaign Groups</Typography>
            <Searchbar />
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="tabs">
                    <Tab label='All' value='0'/>
                    <Tab label='Read' value='1'/>
                    <Tab label='Unread' value='2'/>
                </TabList>
                <TabPanel value='0'>0</TabPanel>
                <TabPanel value='1'>1</TabPanel>
                <TabPanel value='2'>2</TabPanel>
            </TabContext>
        </Stack>
    </div>
  )
}
