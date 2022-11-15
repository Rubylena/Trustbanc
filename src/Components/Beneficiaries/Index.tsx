import React from 'react'
import benefit from '../../assets/Icon/beneficiaries.svg'
import './beneficiaries.scss'

const Index = () => {
  return (
    <div className='flex gap-3 benefit p-3 rounded-md'>
        <div>
            <img src={benefit} alt='beneficiary'></img>
        </div>
        <div>
            <p>Aminat Oladunni</p>
            <p className='text-sm text-placeholder'>Access Bank - 0021349812</p>
        </div>
    </div>
  )
}

export default Index
