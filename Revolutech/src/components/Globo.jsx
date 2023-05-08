import React from 'react'

import GloboImg from '../assets/globo.png'
import globo1 from '../assets/globo1.svg'
import globo2 from '../assets/globo2.svg'
import globo3 from '../assets/globo3.svg'

const Globo = () => {
  return (
    <div className='flex mx-[5%] gap-[5%] pt-[10%]'>
        <div className='w-[50%] h-screen'>
            <h2 className='text-5xl font-semibold tracking-tight leading-[60px]'>
                A maior 
                <span className='mx-4 px-5 pb-1 bg-red2 text-white hover:bg-white hover:scale-110 hover:text-red transition-all duration-150 '>variedade</span> <br/>
                Global de criptomoedas
            
            </h2>

            <p className='text-lg font-medium mt-14 text-gray'>5.500 tomadores de decisão seniores em instituições e 23.000 investidores de varejo entrevistados. Respondemos perguntas como:</p>

            <div className='flex gap-5 items-center mt-12'>
                <div className='w-1/3 mt-7'>
                    <img src={globo1} className='hover:invert transition-all duration-300' alt="" />
                    <p className='text-lg font-semibold mt-5'>Quais são as barrerias que irei enfrentar?</p>
                </div>
                <div className='w-1/3'>
                    <img src={globo2} className='hover:invert transition-all duration-300' alt="" />
                    <p className='text-lg font-semibold mt-3'>Existe confiança em criptomoedas?</p>
                </div>
                <div className='w-1/3'>
                    <img src={globo3} className='hover:invert transition-all duration-300' alt="" />
                    <p className='text-lg font-semibold mt-3'>Como posso começar a investir?</p>
                </div>
            </div>

            <p className='font-bold mt-12'>Mantenha-se informado com o pulso global sobre confiança e adoção de criptografia.</p>

            <button className='px-8 py-2 text-white bg-red  rounded-sm mt-10 hover:bg-[#f2f2f2] hover:scale-110 hover:text-red transition-all duration-150'>Leia a pesquisa completa</button>
        </div>

        <div className='w-[50%] mx-auto flex flex-col mt-10 h-screen'>
            <p className='text-center text-red text-3xl font-bold mb-14 hover:scale-110 transition-all duration-100'>RevoluTech interprice</p>

            <img src={GloboImg} className='w-4/5 rounded-full bg-white mx-auto hover:invert transition-all duration-700' alt="" />
        </div>
    </div>
  )
}

export default Globo