import React from 'react'
import Logo from '../../assets/Icon/TrustBanc_Logo.svg'

const Index = () => {
  return (
    <div className='flex flex-col justify-center p-10 gap-5 text-white pb-24'>
      <div className='w-4/4 mb-10'>
            <img src={Logo} alt='trustbanc logo' className='w-full' ></img>
          </div>
          <p>Are you a new customer or an existing customer yet to setup your online account?</p>
          <button className='bg-white text-primary rounded-md p-2 text-sm font-medium'>GET STARTED</button>
    </div>
  )
}

export default Index
