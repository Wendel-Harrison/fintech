import React from 'react'
import mobile from '../assets/mobile1.png'
import { FaGlobeEurope } from 'react-icons/fa'

const Negocie = () => {
  return (
    <div className='flex  gap-[5%] bg-[#f2f2f2] pt-[7%] pb-14'>
        <div className='w-[45%] ml-[5%]'>
            <img src={mobile} className='w-4/5 hover:animate-bounce' alt="" />
        </div>
        <div className='w-[45%] mr-[5%]'>
            <h2 className='text-4xl font-semibold mt-14'>
                <span className='bg-red text-white px-3 pb-1 mr-2 leading-[55px] hover:bg-[#f2f2f2] hover:scale-110 hover:text-red transition-all duration-150'>Negocie</span>
                pelo seu celular! <br />
                e tenha facilidade com seus <br /> Trades
            </h2>

            <p className='text-lg font-medium mt-5'>Assuma o controle de sua criptografia a qualquer momento com o aplicativo que se adapta à sua experiência</p>

            <p className='font-light mt-10 flex gap-1 items-center'>
                <FaGlobeEurope />
                Avaliado em todos os países</p>
            <button className='text-white bg-red2 px-7 py-2 rounded mt-10 hover:bg-white hover:scale-110 hover:text-red2 transition-all duration-150'>Explore nosso App</button>
        </div>
    </div>
  )
}

export default Negocie