import React from 'react'
import Logo from '../../assets/Icon/TrustBanc-logo2.svg'
import Home from '../../assets/Icon/home.svg'
import Transfer from '../../assets/Icon/transfer.svg'
import Target from '../../assets/Icon/target.svg'
import Airtime from '../../assets/Icon/airtime.svg'
import Cards from '../../assets/Icon/cards.svg'
import Loans from '../../assets/Icon/loans.svg'
import Settings from '../../assets/Icon/settings.svg'
import Logout from '../../assets/Icon/logout.svg'
import SidebarOptions from './SidebarOptions'

const Index = () => {
    const data =[
        {
            src: Home,
            alt: 'home button',
            text: 'Home'
        },
        {
            src: Transfer,
            alt: 'transfer button',
            text: 'Transfers'
        },
        {
            src: Target,
            alt: 'target button',
            text: 'Target savings'
        },
        {
            src: Airtime,
            alt: 'airtime button',
            text: 'Airtime and Bills'
        },
        {
            src: Cards,
            alt: 'card button',
            text: 'Cards'
        },
        {
            src: Loans,
            alt: 'loan button',
            text: 'Loans'
        },
        {
            src: Settings,
            alt: 'settings',
            text: 'Settings'
        }
    ]
  return (
    <div className='p-5 flex flex-col justify-between h-screen'>
        <div>
            <div className='mb-14'><img src={Logo} alt='trustbanc logo'></img></div>
            <div className='flex flex-col gap-3'>
                {data.map((options, index) => (
                    <div key={index}>
                        <SidebarOptions src={options.src} alt={options.alt} text={options.text} />
                    </div>
                ))}
            </div>
        </div>
        <div className='flex gap-6'>
            <div className='text-red'>
                <img src={Logout} alt='logout'></img>
            </div>
            <p>Logout</p>
        </div>
    </div>
  )
}

export default Index
