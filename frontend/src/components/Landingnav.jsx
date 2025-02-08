import React from 'react'
import Button from './Button'
// import "./Landing.css"
const Landingnav = () => {
    return (
        <div class="w-[75%] mx-auto  bg-[#111111] backdrop-blur-2xl px-2 rounded-lg py-2 flex items-center justify-between">
    <div class="flex items-center  gap-3">
        <div class="text-white font-bold text-4xl flex items-center gap-2">
            <div class="bg-white p-1 rounded">
                <img src="erase.png" alt="Logo" class="w-5 h-5" />
            </div>
            <span className='text-3xl'>Zenith</span>
        </div>

        {/* <nav class="hidden sm:flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white">Features</a>
            <a href="#" class="text-gray-300 hover:text-white">Dark Mode</a>
            <a href="#" class="text-gray-300 hover:text-white">Pricing</a>
            <a href="#" class="text-gray-300 hover:text-white">Affiliate program</a>
        </nav> */}
    </div>

    <div class="flex items-center gap-2">
        <div class="bg-red-600 text-white px-3 py-1 rounded-lg text-sm">
            #1 Product of the day
        </div>
        <Button/>
    </div>
</div>

    )
}

export default Landingnav
