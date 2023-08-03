'use client'

import React from 'react'


const Footer = () => {
    return (
        <div className='flex items-center justify-between bg-gradient-to-r px-10 pb-8'>
            <div>
                <h1 className='text-white text-lg '>Made with love by</h1>
            </div>
            <div>
                <a className='text-white text-lg hover:text-blue-400' href='https://javaid-khan.vercel.app/' target='_blank'>Javaid Khan</a>
            </div>
        </div>
    )
}

export default Footer