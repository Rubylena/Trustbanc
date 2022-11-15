import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../assets/Icon/user.svg'
import left from '../../assets/Icon/left-arrow.svg'
import right from '../../assets/Icon/right-arrow.svg'
import TransactHistory from '../../Components/TransactHistory/Index'
import down from '../../assets/Icon/arrow-down.svg'
import up from '../../assets/Icon/arrow-up.svg'
import Beneficiaries from '../../Components/Beneficiaries/Index'
import './DashboardMain.scss'

const Index = () => {
  return (
    <div className='h-screen bg-sidebar-gray p-5'>
      <div className='flex justify-between items-center'>
        <div>
            <p className='bg-primary p-2 px-8 rounded-md text-white'>MAKE A TRANSFER</p>
        </div>
        <div className='flex items-center text-right'>
            <div>
                <p>Abati Olawale</p>
                <Link to='/dashboard' className='text-primary text-sm'>Click to view profile</Link>
            </div>
            <div><img src={User} alt='profile'></img></div>
        </div>
      </div>
      <div className='flex gap-5'>
        <div className='w-4/6'>
            <div className='bg-white rounded-md p-5 mb-5'>
                <h3 className=' text-lg text-primary font-bold mb-3'>My Account(s)</h3>
                <div className='flex justify-between items-center'>
                    <div className='w-1/4'><img src={left} alt='left arrow'></img></div>
                    <div className='card-background w-2/4 text-white rounded-md p-3'>
                        <div>
                            <p>Savings Account</p>
                            <p>0061789943</p>
                        </div>
                        <div className='text-right'>
                            <p>Available balance</p>
                            <p>&#8358; 400,000.56</p>
                            <p>Book balance: &#8358; 400,000.56</p>
                        </div>
                    </div>
                    <div className='w-1/4 flex justify-end'><img src={right} alt='right arrow'></img></div>
                </div>
            </div>
            <div className='bg-white rounded-md  p-5'>
                <div className='flex justify-between mb-5'>
                    <h3 className=' text-lg text-primary font-bold mb-3'>Transaction history</h3>
                    <p className='text-orange underline text-sm'>Download statement</p>
                </div>
                <div>
                    <TransactHistory src={down} />
                    <TransactHistory src={up} />
                    <TransactHistory src={down} />
                    <TransactHistory src={down} />
                </div>
                <div>

                </div>
            </div>
        </div>
        <div className='w-2/6'>
            <div className='bg-white rounded-md p-5'>
                <h3 className=' text-lg text-primary font-bold mb-3'>Frequent beneficiaries</h3>
                <div>
                    <p>Click on a beneficiary to make a quick transfer</p>
                    <div>
                        <Beneficiaries />
                        <Beneficiaries />
                        <Beneficiaries />
                    </div>
                    <p className='text-orange underline text-sm text-right pt-1'>See all beneficiaries</p>
                </div>
            </div>
            <div className='bg-white rounded-md'>
                <h3 className=' text-lg text-primary font-bold mb-3'></h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Index
