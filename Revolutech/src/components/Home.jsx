import React from 'react'
import Apple from '../assets/apple-down.png'
import Play from '../assets/playG.png'
import Celular from '../assets/celular2.png'
import Celular1 from '../assets/celular1.png'
import video from '../assets/videoCelular.mp4'


const Home = () => {
  return (
    <div className='w-full bg-red2 flex pt-[5%] '>
        <div className='ml-[10%] w-2/5'>
            <div className='pt-[22%]'>
                <h2 className='bg-white pb-2 px-4 text-black text-5xl w-fit font-bold'>Compre & negocie</h2>
                <p className=' text-4xl text-white font-semibold'> com a plataforma  de investimentos mais confiavel e segura do mercado</p>
            </div>
            <div className='mt-[5%]'>
                <button className='bg-white text-black font-semibold px-10 py-2 rounded-md hover:bg-red hover:drop-shadow-md hover:text-white transition-all duration-200'>Comece já</button>

                <div className='flex gap-5 mt-[3%]'>
                    <img className='w-[25%] hover:scale-105 transition-all duration-150' src={Apple} alt="" />
                    <img className='w-[25%] hover:scale-105 transition-all duration-150' src={Play} alt="" />
                </div>
            </div>
        </div>
        <div className='w-2/5 ml-[10%] mb-[10%]'>
                <img className='w-1/6 absolute z-10' src={Celular} alt="" />
                <video src={video} className='w-[38.2%] ml-2.5 mt-2.5 relative z-0' autoPlay muted loop playsInline></video>        
        </div>
    </div>
  )
}

export default Home