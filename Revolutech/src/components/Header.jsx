import React from 'react'

const Header = () => {
  return (
    <div className='font-inter flex justify-between items-center px-14 py-2 bg-[#f2f2f2]'>
        <div>
            <h1 className=' text-red font-semibold text-xl'>RevoluTech</h1>
        </div>
        <div className='flex gap-5'>
            <h2 className='text-gray text-sm'>Aplicativo Mobile</h2>
            <h2 className='text-gray text-sm'>Mercado</h2>
            <h2 className='text-gray text-sm'>Criptomoedas</h2>
        </div>
        <div className='flex items-center gap-5 '>
            <h2 className='text-gray underline-offset-8 font-medium'>Login</h2>
            <h2 className='bg-red py-1 px-4 rounded-sm text-white font-medium'>Começar</h2>
        </div>
    </div>
  )
}

export default Header