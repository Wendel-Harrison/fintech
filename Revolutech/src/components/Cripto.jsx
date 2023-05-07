import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import graf1 from '../assets/graf1.svg'
import graf2 from '../assets/graf2.svg'
import graf3 from '../assets/graf3.svg'
import graf4 from '../assets/graf4.svg'
import graf5 from '../assets/graf5.svg'
import graf6 from '../assets/graf6.svg'
import graf7 from '../assets/graf7.svg'

const Cripto = () => {
    
  return (
    <div className=' pb-[5%] pt-[5%] bg-[#f2f2f2]'>
        <div className='flex w-4/5 mx-auto'>
            <div className='w-[25%]'>
                <h2 className='border-b border-gray/40 pb-6 pt-2 text-sm text-gray font-medium'>Moeda</h2>
                <p className='border-b border-gray/40 pb-6 pt-2'>Bitcoin</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>Ether</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>XRP</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>Cardano</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>Dogecoin</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>Polygon</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>Solana</p>
            </div>

            <div className='w-[19%] ml-[1%] text-right'>
                <h2 className='border-b border-gray/40 pb-6 pt-2 text-sm text-gray font-medium'>Preço</h2>
                <p className='border-b border-gray/40 pb-6 pt-2'>$28,371</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>$1,856.7</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>$0.45317</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>$0.38208</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>$0.07769</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>$0.98325</p>
                <p className='border-b border-gray/40 pb-6 pt-2'>$21.4483</p>
            </div>

            <div className='w-[19%] ml-[1%] text-right'>
                <h2 className='border-b border-gray/40 pb-6 pt-2 text-sm text-gray font-medium'>Variação 24h</h2>
                <p className='border-b border-gray/40 pb-6 pt-2 text-green'>+1.56%</p>
                <p className='border-b border-gray/40 pb-6 pt-2 text-green'>+1.74%</p>
                <p className='border-b border-gray/40 pb-6 pt-2 text-neg'>-1.45%</p>
                <p className='border-b border-gray/40 pb-6 pt-2 text-green'>+0.08%</p>
                <p className='border-b border-gray/40 pb-6 pt-2 text-neg'>-0.06%</p>
                <p className='border-b border-gray/40 pb-6 pt-2 text-green'>+3.10%</p>
                <p className='border-b border-gray/40 pb-6 pt-2 text-neg'>-1.61%</p>
            </div>

            <div className='w-[19%] ml-[1%] text-center'>
                <h2 className='border-b border-gray/40 pb-6 pt-2 text-sm text-gray font-medium'>Gráfico</h2>
                <div className='border-b border-gray/40 pb-2 pt-2 flex justify-center w-full'>
                    <img className='w-[50%] object-cover' src={graf1} alt="" />
                </div>
                <div className='border-b border-gray/40 pb-2 pt-[8px] flex justify-center w-full'>
                    <img className='w-[50%] object-cover' src={graf2} alt="" />
                </div>
                <div className='border-b border-gray/40 pb-2 pt-[8px] flex justify-center w-full'>
                    <img className='w-[50%] object-cover' src={graf3} alt="" />
                </div>
                <div className='border-b border-gray/40 pb-2 pt-[8px] flex justify-center w-full'>
                    <img className='w-[50%] object-cover' src={graf4} alt="" />
                </div>
                <div className='border-b border-gray/40 pb-2 pt-[8px] flex justify-center w-full'>
                    <img className='w-[50%] object-cover' src={graf5} alt="" />
                </div>
                <div className='border-b border-gray/40 pb-2 pt-[8px] flex justify-center w-full'>
                    <img className='w-[50%] object-cover' src={graf6} alt="" />
                </div>
                <div className='border-b border-gray/40 pb-2 pt-[8px] flex justify-center w-full'>
                    <img className='w-[50%] object-cover' src={graf7} alt="" />
                </div>
            </div>

            <div className='w-[19%] ml-[1%] text-center'>
                <h2 className='border-b border-gray/40 pb-6 pt-2 text-sm text-gray font-medium '>Compre</h2>
                <div className='border-b border-gray/40 pt-2.5 pb-2.5'>
                    <button className=' py-2 rounded-md w-4/5 mx-auto  text-black font-medium bg-white drop-shadow-md text-sm'>Compre BTC</button>
                </div>
                <div className='border-b border-gray/40 pt-2.5 pb-2.5'>
                    <button className=' py-2 rounded-md w-4/5 mx-auto  text-black font-medium bg-white drop-shadow-md text-sm'>Compre ETH</button>
                </div>
                <div className='border-b border-gray/40 pt-2.5 pb-2.5'>
                    <button className=' py-2 rounded-md w-4/5 mx-auto  text-black font-medium bg-white drop-shadow-md text-sm'>Compre XRP</button>
                </div>
                <div className='border-b border-gray/40 pt-2.5 pb-2.5'>
                    <button className=' py-2 rounded-md w-4/5 mx-auto  text-black font-medium bg-white drop-shadow-md text-sm'>Compre ADA</button>
                </div>
                <div className='border-b border-gray/40 pt-2.5 pb-2.5'>
                    <button className=' py-2 rounded-md w-4/5 mx-auto  text-black font-medium bg-white drop-shadow-md text-sm'>Compre DOGE</button>
                </div>
                <div className='border-b border-gray/40 pt-2.5 pb-2.5'>
                    <button className=' py-2 rounded-md w-4/5 mx-auto  text-black font-medium bg-white drop-shadow-md text-sm'>Compre MATIC</button>
                </div>
                <div className='border-b border-gray/40 pt-2.5 pb-2.5'>
                    <button className=' py-2 rounded-md w-4/5 mx-auto  text-black font-medium bg-white drop-shadow-md text-sm'>Compre SOL</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cripto