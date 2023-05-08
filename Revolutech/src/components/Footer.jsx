import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { RiLinkedinFill } from 'react-icons/ri'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

import visa from '../assets/visa.png'
import master from '../assets/master.png'
import master2 from '../assets/master2.png'
import apay from '../assets/apay.png'
import gpay from '../assets/gpay.png'
import paypal from '../assets/paypal.png'

const Footer = () => {
  return (
    <div className='bg-[#5C0000]'>
        <h1 className='text-center text-2xl text-white font-semibold pt-20 animate-bounce'>RevoluTech</h1>

        <div className='flex gap-3 mt-3 justify-center '>
            <AiFillInstagram className='py-1 px-1 text-2xl text-[#5c0000] bg-white rounded-full hover:scale-150 hover:bg-[#5c0000] hover:text-white transition-all duration-200'/>
            <BsTwitter className='py-1 px-1 text-2xl text-[#5c0000] bg-white rounded-full hover:scale-150 hover:bg-[#5c0000] hover:text-white transition-all duration-200'/>
            <RiLinkedinFill className='py-1 px-1 text-2xl text-[#5c0000] bg-white rounded-full hover:scale-150 hover:bg-[#5c0000] hover:text-white transition-all duration-200'/>
            <FaFacebookF className='py-1 px-1 text-2xl text-[#5c0000] bg-white rounded-full hover:scale-150 hover:bg-[#5c0000] hover:text-white transition-all duration-200'/>
            <FaTelegramPlane className='py-1 px-1 text-2xl text-[#5c0000] bg-white rounded-full hover:scale-150 hover:bg-[#5c0000] hover:text-white transition-all duration-200'/>
        </div>

        <div className='flex gap-5 mt-8 justify-center'>
            <img src={visa} alt=""  className='hover:translate-y-2 transition-all duration-100'/>
            <img src={master} alt=""  className='hover:translate-y-2 transition-all duration-100'/>
            <img src={master2} alt=""  className='hover:translate-y-2 transition-all duration-100'/>
            <img src={apay} alt="" className='hover:translate-y-2 transition-all duration-100' />
            <img src={gpay} alt=""  className='hover:translate-y-2 transition-all duration-100'/>
            <img src={paypal} alt=""  className='hover:translate-y-2 transition-all duration-100'/>
        </div>

        <p className='text-center text-white font-thin mt-10 pb-2 text-sm'>All rights reserved © 2023 Bitstamp. NMLS #1905429</p>
    </div>
  )
}

export default Footer