import React from 'react'

export default function DropDownMenu() {
    return (
        <>
            <div className='flex flex-col dropDownMenu'>
                <ul className='flex flex-col gap-4'>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
        </>
    )
}