import React from 'react'
import info1 from '../assets/info1.svg'
import info2 from '../assets/info2.svg'
import info3 from '../assets/info3.svg'

const Informacoes = () => {
  return (
    <div className='bg-red1 mx-auto pb-28 pt-[7%] '>
        <div className='w-[90%] mx-auto h-full flex gap-[5%]'>
            <div className='w-[30%] h-full  pl-[2%] pt-[5.7%] '>
                <img src={info1} alt="" />

                <h2 className='text-white font-bold text-2xl mb-[4.5rem] mt-7'>
                    <span className='bg-white text-black px-2  mr-1'>Fácil</span>
                     de negociar
                </h2>

                <p className='text-white border-b-2 font-medium pt-2 pb-5'>interface intuitiva</p>
                <p className='text-white border-b-2 font-medium pt-2 pb-5'>Opções de depósito variados</p>
                <p className='text-white pt-2 font-medium pb-5'>saque direto para sua conta bancária</p>
            </div>
            <div className='w-[30%] h-full pl-[2%] pt-[5%]'>
                <img src={info2} alt="" />

                <h2 className='text-white font-bold text-2xl mb-10 mt-7'>
                <span className='bg-white text-black px-2  mr-1'>Segurança extrema</span> <br />
                    de serviços
                </h2>

                <p className='text-white border-b-2 font-medium pt-2 pb-5'>ativos armazenados na nuvem</p>
                <p className='text-white border-b-2 font-medium pt-2 pb-5'>Dados altamente Criptografados</p>
                <p className='text-white pt-2 font-medium pb-5'>Confirmação para cada transferência</p>
            </div>

            <div className='w-[30%] h-full  pl-[2%] pt-[5%]'>
                <img src={info3} alt="" />

                <h2 className='text-white font-bold text-2xl mb-10 mt-7'>
                <span className='bg-white text-black px-2  mr-1'>Confiabilidade </span> <br />
                    comprovada
                </h2>

                <p className='text-white border-b-2 font-medium pt-2 pb-5'>Servindo desde 2019</p>
                <p className='text-white border-b-2 font-medium pt-2 pb-5'>Suporte 24h</p>
                <p className='text-white pt-2 font-medium pb-5'>Líder no setor  de criptoativos</p>
            </div>
            
        </div>
    </div>
  )
}

export default Informacoes