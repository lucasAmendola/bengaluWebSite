import React from 'react'
import logoMail from '../assets/icons8-mensaje-64 1.png'
import logoIg from '../assets/instagram-white-icon 1.png'
import logoWsp from '../assets/images 1.png'

export default function contactSection() {
  return (
    <div id='contactSect' className='pt-[15vh] text-center w-full h-[80vh] text-white bg-[#171717]'>
        <div className='flex flex-col justify-center items-center text-center gap-[70px]'>
          <h1 className='font-subtitle text-subtitle'>Contactate directo con nosotros</h1>
          <p className='font-subtitle text-paragraph self-center max-w-[1000px]'>Nos apasiona ayudar a transformar tus ideas en soluciones tecnológicas de éxito. 
            Si tenés alguna pregunta, necesitas más información sobre nuestros servicios, o querés discutir cómo podemos 
            colaborar, no dudes en ponerte en contacto con nosotros. Estamos para ayudarte.
          </p>
            <div  className='flex flex-row justify-center items-center text-center gap-[130px]'>
                <div className='flex flex-row items-center gap-[10px]'>
                    {/* <img src={logoWsp} alt="" /> */}
                    <h4>+ 54 9 249 4245153</h4>
                  </div>
                  <div className='flex flex-row items-center gap-[10px]'>
                    {/* <img src={logoMail} alt="" /> */}
                    <a className='lno-underline text-whiteink' href="mailto:bengaluSoftware@gmail.com"><h4>BengaluSoftware@gmail.com</h4></a>
                  </div>
                  <div className='flex flex-row items-center gap-[10px]'>
                    {/* <img src={logoIg} alt="" /> */}
                    <a href="https://www.instagram.com/bengalusoftware/" className='no-underline text-white'><h4>@bengalu_dev</h4> </a>
                  </div>
                </div>
            </div>
    </div>
  )
}
