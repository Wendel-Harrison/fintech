import React from 'react'

const Header = () => {
  return (
    <div className='font-inter flex justify-between items-center px-14 py-2 bg-[#f2f2f2]'>
        <div>
            <h1 className=' text-red font-semibold text-xl hover:text-red1 transition-all duration-200 hover:scale-110 active:translate-y-2'>
              
              RevoluTech
            </h1>
        </div>
        <div className='flex gap-5'>
            <h2 className='text-gray text-sm hover:text-black transition-all duration-150 hover:scale-110 hover:font-medium'>Aplicativo Mobile</h2>
            <h2 className='text-gray text-sm hover:text-black transition-all duration-150 hover:scale-110 hover:font-medium'>Mercado</h2>
            <h2 className='text-gray text-sm hover:text-black transition-all duration-150 hover:scale-110 hover:font-medium'>Criptomoedas</h2>
        </div>
        <div className='flex items-center gap-5 '>
            <h2 className='text-gray underline-offset-4 font-medium hover:underline hover:text-black transition-all duration-200'>Login</h2>
            <h2 className='hover:text-red1 hover:bg-white transition-all duration-100 bg-red py-1 px-4 rounded-sm text-white font-medium'>Começar</h2>
        </div>
    </div>
  )
}

export default Header