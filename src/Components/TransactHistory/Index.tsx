import React from 'react'

interface Transact {
    src: string;
}

const Index = (props: Transact) => {
  return (
    <div className='flex justify-between items-center flex-col md:flex-row'>
        <div className='flex gap-3 items-center'>
            <div>
                <img src={props.src} alt='down'></img>
            </div>
            <div>
                <p>E-CHANNELS</p>
                <p className='text-xs text-placeholder'>0000015262626273663766262673663672</p>
            </div>
        </div>
        <p className='text-red'>NGN -1,400.00</p>
    </div>
  )
}

export default Index
