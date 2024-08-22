import React from 'react'
import Image from 'next/image'
import logo from '../public/images/bengalu_logo.png'

export default function headerPage() {
  
  return (
        <header  className="z-[111] h-[3vw] fixed justify-end w-full bg-[rgba(0,3,19,0)] text-black flex enhanceHeader"> 
            <div className='absolute flex flex-row items-center gap-[10px] m-[10px] left-0 self-center justify-center'>
              <Image 
                src={logo} 
                alt={''}
                style={{marginLeft: '20px', maxWidth: '30px',  maxHeight: '30px', opacity: 0}}
                className='enhanceHeaderLogo'          
              />
              <a className='no-underline text-white opacity-0 enhanceHeaderLogo' href="#inicio"><h1 className="font-sans font-semibold text-[24px] text-white">BenGaLu</h1></a>
            </div>

            <div className='pr-[4vw] flex flex-row items-center gap-[50px]'>
                <a href="#contactSect" className='font-sans font-bold no-underline text-white '><h4>Contacto</h4></a>
                <a href="#productSect" className='font-sans font-bold no-underline text-white '><h4>Productos</h4></a>
                <a href="#nosotros" className='font-sans font-bold no-underline text-white '><h4>Nosotros</h4></a>
                <a href="#productSect" className='font-sans font-bold no-underline text-white '><h4>Servicios</h4></a>
            </div>
        </header>
  )
}
