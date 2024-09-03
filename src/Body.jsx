import React from 'react'

export default function Body() {
  return (
    <>
    <div className='flex mx-20 mt-2 bg-bg-3'>
        <div className='flex flex-col items-center w-1/2 left place-content-center '>
        <div className='flex'>
         <div className='w-32 text-4xl font-bold text-nav1'>BABIES </div>
         <div className='text-4xl font-bold text-col-4'>  GROW FAST</div>
        </div>
        <div className='mt-5'>Simplify Your Life with Our </div>
        <button className='w-64 h-10 mt-6 text-xl font-semibold text-white rounded-lg bg-nav1'>TinyClo Subscription</button>
        <div className='flex w-3/4 mt-20 justify-evenly'>
            <button className='h-12 font-semibold rounded-md w-52 bg-nav-2 text-col-4'>How it works?</button>
            <button className='h-12 font-semibold text-white rounded-md w-52 bg-col-1'>Start Membership</button>
        </div>
        </div>
        <div className='flex flex-col ml-32 items-cente right place-content-center'>
            <div className='bg-cover w-100 h-96 bg-body'></div>
        </div>
        
    </div>
    <div className='flex justify-end px-52'>
    <div className='w-20 h-20 bg-contain cursor-pointer bg-cart'></div>
    </div>
    </>
  )
}
