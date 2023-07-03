'use client'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-screen bg-gray-300 grid grid-flow-row'>
        <div className='container flex items-center justify-center w-full p-7 space-x-5'>
            <div className='space-x-3'> 
            <button className='bg-teal-700 hover:bg-teal-600 hover:shadow-lg text-white rounded-full shadow-md py-2 px-3 transition-all active:scale-95'>
                Merge Sort
            </button>
            <button className='bg-teal-700 hover:bg-teal-600 hover:shadow-lg text-white rounded-full shadow-md py-2 px-3 transition-all active:scale-95'>
                Insertion Sort
            </button>
            </div>
            <button className='border-b-2 border border-teal-700 text-black hover:border-teal-600 hover:shadow-lg  rounded-full shadow-md py-2 px-5 transition-all active:scale-95'>
            Sort
             </button>
        </div>
        <div className='flex flex-col items-center w-full pb-3'>
            <label htmlFor="items_amount">Array Length: 25</label>
            <input 
                type='range'
                name="items_amount"
                id="items_amount"
                className='w-full max-w-2xl'
                defaultValue={25}
                min={1}

/>
                        <label htmlFor="items_amount">Delay: 15</label>

            <input 
                type='range'
                name="delay"
                id="delay"
                className='w-full max-w-2xl'
                min={3}
                defaultValue={15}
            />

        </div>
     
    </nav>
  )
}

export default Navbar