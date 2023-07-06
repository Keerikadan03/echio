'use client'
import React from 'react'
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Filter = () => {


    const jsonData = '[{"id":"1","filterName":"Campaign Status","types":["Active Campaign","Upcoming Campaign","Past Campaign"]},{"id":"2","filterName":"Campaign Preference","types":["Barter","Paid"]},{"id":"3","filterName":"Platform","types":["Youtube","Instagram","Both"]},{"id":"4","filterName":"Categories","types":["Autos & Vehical","Beauty","Blogs And Travel"]}]';

    const filters = JSON.parse(jsonData);

    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

    const handleCheckboxChange = (filterName, type, isChecked) => {
        setSelectedCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [filterName]: {
                ...(prevCheckboxes[filterName] || {}),
                [type]: isChecked,
            },
        }));

        if (isChecked) {
            console.log(` ${type}`);
        }
    };

    return (

        <>
            <FormGroup>
                <div className="">
                    {filters.map((filter) => (
                        <div key={filter.id}>
                            <p className="font-semibold text-[rgba(0,0,0,0.7)] text-[16px]">{filter.filterName}</p>
                            <div className="mt-3 text-xs ">
                                <div className="my-3 items-center ">
                                    {filter.types.map((type) => (
                                        <div key={filter.type} className=" items-center ">

                                            <FormControlLabel
                                                className='m-[5p] text-[blue] '
                                                sx={{

                                                    '& .MuiFormControlLabel-label': {
                                                        fontSize: 14,
                                                        color: "rgba(0,0,0,0.70)" // Change the font size to your desired value
                                                    },
                                                }}
                                                control={

                                                    <Checkbox
                                                        className=''
                                                        sx={{

                                                            '& .MuiSvgIcon-root': {
                                                                fontSize: 20,
                                                            }
                                                        }}
                                                        checked={selectedCheckboxes[filter.filterName]?.[type] || false}
                                                        onChange={(e) =>
                                                            handleCheckboxChange(
                                                                filter.filterName,
                                                                type,
                                                                e.target.checked
                                                            )}
                                                        value={type}
                                                        id='checkbox'
                                                    />
                                                }
                                                label={type}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </FormGroup>
        </>
    )
}

export default Filter
