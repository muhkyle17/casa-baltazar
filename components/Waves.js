import React from 'react'
import waves from '../public/waves.png'
import Image from 'next/image'

const Waves = () => {
  return (
    <div className=''>
      <Image src={waves} alt='Waves Image' />
    </div>
  )
}

export default Waves
