import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../assets/Icon/user.svg'
import left from '../../assets/Icon/left-arrow.svg'
import right from '../../assets/Icon/right-arrow.svg'
import TransactHistory from '../../Components/TransactHistory/Index'
import down from '../../assets/Icon/arrow-down.svg'
import up from '../../assets/Icon/arrow-up.svg'
import Beneficiaries from '../../Components/Beneficiaries/Index'
import home from '../../assets/Icon/dashboard-home.svg'
import './DashboardMain.scss'

const Index = () => {
  return (
    <div className='h-screen bg-sidebar-gray p-3'>
      <div className='flex justify-between items-center flex-col md:flex-row'>
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
      <div className='flex gap-3 flex-col md:flex-row'>
        <div className='md:w-4/6'>
            <div className='bg-white rounded-md py-3 px-5 mb-3'>
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
            <div className='bg-white rounded-md  py-5 px-5'>
                <div className='flex justify-between mb-3'>
                    <h3 className=' text-lg text-primary font-bold mb-3'>Transaction history</h3>
                    <p className='text-orange underline text-sm'>Download statement</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <TransactHistory src={down} />
                    <TransactHistory src={up} />
                    <TransactHistory src={down} />
                    <TransactHistory src={down} />
                    <TransactHistory src={up} />
                </div>
                <div>

                </div>
            </div>
        </div>
        <div className='md:w-2/6'>
            <div className='bg-white rounded-md py-5 px-3 mb-3'>
                <h3 className=' text-lg text-primary font-bold mb-1'>Frequent beneficiaries</h3>
                <div>
                    <p className='mb-1'>Click on a beneficiary to make a quick transfer</p>
                    <div className='flex flex-col gap-1'>
                        <Beneficiaries />
                        <Beneficiaries />
                        <Beneficiaries />
                    </div>
                    <p className='text-orange underline text-sm text-right pt-1'>See all beneficiaries</p>
                </div>
            </div>
            <div className='bg-white rounded-md px-3 py-5'>
                <h3 className=' text-lg text-primary font-bold'>Create a target savings</h3>
                <div className='bg-sidebar-gray mt-1 mx-5 rounded-md py-3 px-5'>
                    <div className='flex gap-3'>
                        <div>
                            <img src={home} alt='accommodation'></img>
                        </div>
                        <div>
                            <p className='text-sm'>Rent/accommodation </p>
                            <div className='flex justify-between text-xs'>
                                <p className='text-primary'>12% p.a</p>
                                <p className='text-placeholder'>6 months</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-orange underline text-sm text-center pt-1'>Create now</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Index
