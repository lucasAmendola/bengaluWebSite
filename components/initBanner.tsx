import React from 'react'
import Image from 'next/image'
import logo from "../public/images/bengalu_logo.png"

export default function innitBanner() {
  return (
    <div id='inicio' className='text-center w-full h-screen'>
            <div className="relative text-center flex justify-center flex-row">
              <div className='z-[1] items-center h-screen bg-[rgba(0,3,19,0.603)] w-1/2'>
                <div className='pl-[90px] text-left pt-[5%]'>
                  <h1 className="font-sans leading-tight font-extrabold w-2/3 text-[65px] text-white">Donde tus proyectos digitales se hacen realidad.</h1>
                  <h3 className="font-sans z-10 text-white pt-[30px] font-bold max-w-[470px] text-[25px]"> Acá, cada idea se convierte en algo tangible, cada paso es un avance 
                    hacia tu visión, y cada herramienta está diseñada para ayudarte a construir sin límites.</h3>
                </div>
              </div>

              <div className='relative z-0 bg-cover bg-[url("../public/images/brainpattern.jpg")] h-screen w-1/2 opacity-[0.95] flex flex-col items-center justify-center transition-all duration-500 ease-out'>
                <div className="z-10 gap-[10px] flex flex-row p-[20%]">
                  <div className='z-[1] gap-[10px] flex flex-row moveCardutd'>
                    <Image
                        src={logo}
                        alt=""
                        style={{ width: '90px', height: '90px', alignSelf: 'center'}}
                    />
                  </div>
                  <h1 className="font-sans font-semibold text-white text-[80px] moveLogodtu">BenGaLu</h1>
                </div>
              </div>
            </div>
    </div>
  )
}
