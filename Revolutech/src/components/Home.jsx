import React from 'react'
import Apple from '../assets/apple-down.png'
import Celular from '../assets/celular.png'


const Home = () => {
  return (
    <div className='w-full bg-red2 flex pt-[2%] '>
        <div className='ml-[10%] w-2/5'>
            <div className='pt-[30%]'>
                <h2 className='bg-white pb-2 px-4 text-black text-5xl w-fit font-bold'>Compre & negocie</h2>
                <p className=' text-4xl text-white font-semibold'> com a plataforma  de investimentos mais confiavel e segura do mercado</p>
            </div>
            <div className='mt-[5%]'>
                <button className='bg-white text-black font-semibold px-10 py-2 rounded-md'>Comece já</button>

                <div className='flex gap-5 mt-[3%]'>
                    <img className='w-[25%]' src={Apple} alt="" />
                    <img className='w-[25%]' src={Apple} alt="" />
                </div>
            </div>
        </div>
        <div className='w-2/5 ml-[10%]'>
            <img className="w-3/4" src={Celular} alt="" />
        </div>
    </div>
  )
}

export default Home