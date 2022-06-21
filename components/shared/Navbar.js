import React from 'react'
import Image from 'next/image'
import logoFacebook from '../../public/iconmonstr-facebook-3-240.png'
import logoPhone from '../../public/iconmonstr-phone-1-240.png'
import logoEmail from '../../public/iconmonstr-email-1-240.png'

const Navbar = () => {
  return (
    <>
      <div className='relative h-16 bg-blue text-white'>
        <div className='flex w-full h-16 px-6 justify-between items-center'>
          <div className='text-base flex gap-14'>
            <a href='#about' className='uppercase'>
              About
            </a>
            <a href='#gallery' className='uppercase'>
              Gallery
            </a>
            <a href='#rates' className='uppercase'>
              Rates
            </a>
            <a href='#reviews' className='uppercase'>
              Reviews
            </a>
          </div>

          <div className='flex items-center gap-8 justify-self-end'>
            <Image
              src={logoFacebook}
              alt='Facebook Logo'
              width={35}
              height={35}
            />
            <Image src={logoEmail} alt='Email Logo' width={35} height={35} />
            <Image src={logoPhone} alt='Phone Logo' width={35} height={35} />
            <p className='uppercase bg-teal rounded-3xl px-5 py-2'>Book Now</p>
          </div>
        </div>

        {/* Logo */}
        <div className='absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-10 h-10 rounded-full bg-teal justify-self-center' />

        {/* <a target="_blank" href="https://icons8.com/icon/118495/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
      </div>
    </>
  )
}

export default Navbar
