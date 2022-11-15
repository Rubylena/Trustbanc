import React from 'react'
import Logo from '../../assets/Icon/TrustBanc_Logo.svg'
import LoginForm from '../../Components/LoginForm/Index'
import LeftLanding from '../../Components/LeftLanding/Index'
import './Landing.scss'

const Index = () => {
  return (
    <div className='Landing flex justify-center items-center'>
      <div className='Landing-background'></div>
      <div className='Landing-overlay'></div>
      <div className='Landing-dialogue flex flex-col md:flex-row justify-center items-center bg-white'>
        <div className='Landing-dialogue__left'>
          <LeftLanding />
        </div>

        <div className='Landing-dialogue__right'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Index
