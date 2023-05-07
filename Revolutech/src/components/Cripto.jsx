import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Cripto = () => {
    
  return (
    <div className='w-4/5 mx-auto mt-[5%]'>
        <div className='w-[25%]'>
            <h2 className='border-b border-gray pb-6 pt-2 text-sm text-gray'>Moeda</h2>
            <p className='border-b border-gray pb-6 pt-2'>Bitcoin</p>
            <p className='border-b border-gray pb-6 pt-2'>Ether</p>
            <p className='border-b border-gray pb-6 pt-2'>XRP</p>
            <p className='border-b border-gray pb-6 pt-2'>Cardano</p>
            <p className='border-b border-gray pb-6 pt-2'>Dogecoin</p>
            <p className='border-b border-gray pb-6 pt-2'>Polygon</p>
            <p className='border-b border-gray pb-6 pt-2'>Solana</p>
        </div>

        <div className='w-[19%] ml-[1%]'>

        </div>
    </div>
  )
}

export default Cripto