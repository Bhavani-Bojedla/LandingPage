import React from 'react'

export default function Nabvar() {
  return (
    <div>
      <div class="container">
      <div class="navbar bg-nav1 h-8 flex font-semibold justify-center items-center text-white align-center">
          <p>TRY RENTING WITH 50% OFF YOUR FIRST 2 MONTHS 💚 EASILY SAVE MONEY WHILST CREATING A SUSTAINABLE WARDROBE 🌍</p>
      </div>
     
      <div class="navbar flex justify-between items-center px-20 mt-8 w-full">    
      <div className='flex items-center justify-around px-10'>
        <div class="text-col-1  items-center flex flex-col">
          <div className='bg-cover w-13 h-13.5 bg-logo'></div>
          <div className='text-lg font-bold'>TinyClo</div>
        </div>
        <div class="navbar flex flext-start text-lg items-center ml-36 gap-x-6">
         <div class="bg-nav-2 font-semibold cursor-pointer  text-col-2 rounded-3xl w-24 items-center place-content-center flex flex-col h-11 ">
          <h2>Home</h2>
         </div>
         <div class=" text-col-3 rounded-3xl hover:font-semibold cursor-pointer hover:bg-nav-2 hover:text-col-2 w-28 items-center place-content-center flex flex-col h-11">
          <h2>Why Rent?</h2>
         </div>
         <div class="text-col-3 rounded-3xl hover:font-semibold cursor-pointer hover:bg-nav-2 hover:text-col-2 w-40 items-center place-content-center flex flex-col h-11 ">
          <h2>Clean Out Closest</h2>
         </div>
         <div class="text-col-3 rounded-3xl hover:font-semibold cursor-pointer hover:bg-nav-2 hover:text-col-2 w-24 items-center place-content-center flex flex-col h-11">
          <h2>About Us</h2>
         </div>
         <div class="text-col-3 rounded-3xl hover:font-semibold cursor-pointer hover:bg-nav-2 hover:text-col-2 w-20 items-center place-content-center flex flex-col h-11">
          <h2>Store</h2>
         </div>
         <div class="text-col-3 rounded-3xl hover:font-semibold cursor-pointer hover:bg-nav-2 hover:text-col-2 w-28 items-center place-content-center flex flex-col h-11">
          <h2>Contact Us</h2>
         </div>
        </div>
        </div>
        <div class="login ">
            <p className='flex flex-col items-center w-32 font-bold rounded-lg cursor-pointer bg-nav-2 text-col-2 place-content-center h-11'>Login/Sign Up</p>
        </div>
        </div>
     
    </div>
    </div>
  )
}
