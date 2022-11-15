import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className='flex flex-col justify-center gap-4 p-10'>
        <h2 className='text-2xl text-center font-medium'>Log in to your account</h2>
            <form action='' className='placeholder:text-placeholder placeholder:text-sm flex flex-col gap-2'>
                <input type='text' placeholder='Username' 
                className=' border-2 border-border rounded-md py-2 px-5 w-full'>
                </input>
                <input type='password' placeholder='Password'
                className=' border-2 border-border rounded-md py-2 px-5 w-full'>
                </input>
                <Link to='/dashboard'><button type='submit'
                className='bg-secondary text-white p-2 rounded-md font-medium w-full'>LOGIN</button></Link>
                <span className='text-green text-right text-sm font-medium'>Forgot password?</span>
            </form>
    </div>
  )
}

export default Index
