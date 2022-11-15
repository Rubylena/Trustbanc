import React from 'react'
import Sidebar from '../../Components/Sidebar/Index'
import DashboardMain from '../../Components/DashboardMain/Index'

const Index = () => {
  return (
    <div className='flex gap-3'>
      <div className='w-1/6'>
        <Sidebar />
      </div>
      <div className='w-5/6'>
        <DashboardMain />
      </div>
    </div>
  )
}

export default Index
