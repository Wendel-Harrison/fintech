import React from 'react'
import icone1 from '../assets/icone1.png'
import icone2 from '../assets/icone2.png'
import icone3 from '../assets/icone3.png'

const Investir = () => {
  return (
    <div className='bg-[#f2f2f2] pl-[5%] pr-5 flex gap-10 py-20'>
        <div className='w-2/5 mt-14'>
            <h2 className='text-3xl font-bold'>
                <span className='bg-red2 px-3 mr-1 pb-1 text-white hover:bg-[#f2f2f2] hover:scale-110 hover:text-red2 transition-all duration-150'>3 passos</span>
                para começar a investir!
            </h2>

            <button className='bg-red px-8 py-1 text-lg text-white font-semibold mt-20 ml-20 rounded hover:bg-[#f2f2f2] hover:scale-110 hover:text-red transition-all duration-150'>Começar!</button>
        </div>
        <div className='w-3/5 flex gap-5'>
            <div className='w-1/3'>
                <h2 className='text-2xl font-semibold mb-5'>1°</h2>
                <img src={icone1} className='hover:invert transition-all duration-100' alt="" />
                <h2 className='text-2xl font-bold mt-5 mb-3 hover:text-red transition-all duration-300'>Registro</h2>
                <p>Escolha o tipo de conta certo e verifique sua identidade.</p>
            </div>
            <div className='w-1/3'>
                <h2 className='text-2xl font-semibold mb-5'>2°</h2>
                <img src={icone2} className='hover:invert transition-all duration-100' alt="" />
                <h2 className='text-2xl font-bold mt-5 mb-3 hover:text-red transition-all duration-300'>Fundos</h2>
                <p>Adicione fundos a sua carteira com as diversas formas de pagamento.</p>
            </div>
            <div className='w-1/3'>
                <h2 className='text-2xl font-semibold mb-5'>3°</h2>
                <img src={icone3} className='hover:invert transition-all duration-100' alt="" />
                <h2 className='text-2xl font-bold mt-5 mb-3 hover:text-red transition-all duration-300'>Trades</h2>
                <p>Compre, venda e transfira as principais criptomoedas.</p>
            </div>
        </div>
    </div>
  )
}

export default Investir