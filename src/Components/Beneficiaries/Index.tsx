import React from 'react'
import benefit from '../../assets/Icon/beneficiaries.svg'
import './beneficiaries.scss'

const Index = () => {
  return (
    <div className='flex gap-3 benefit py-2 px-5 rounded-md'>
        <div className='w-1/6'>
            <img src={benefit} alt='beneficiary' className='w-full'></img>
        </div>
        <div>
            <p className='text-sm font-medium'>Aminat Oladunni</p>
            <p className='text-xs text-placeholder'>Access Bank - 0021349812</p>
        </div>
    </div>
  )
}

export default Index
