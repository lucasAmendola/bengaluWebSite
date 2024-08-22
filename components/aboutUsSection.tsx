import React from 'react'

export default function aboutUsSection() {
  return (
    <div id='nosotros' className='lg:pt-[15vh] text-center w-full h-[80vh] bg-[#171717] moveleftToRightAnim'>
        <div className='lg:absolute bottom-0 left-0 border-r-[500px] border-b-[220px] border-transparent border-b-white'></div>
        <div className='lg:flex flex-col items-center text-center gap-[80px]'>
            <h1 className='font-subtitle text-subtitle'>Sobre Bengalu</h1>
            <p className='font-subtitle text-paragraph self-center max-w-[900px] '>En Bengalu, somos una startup dedicada al desarrollo IT, 
                comprometida con la creación de soluciones tecnológicas 
                innovadoras y de alta calidad. Nuestro equipo de expertos 
                trabaja con diversas tecnologías para ofrecer productos y 
                servicios que transforman ideas en realidades exitosas.
            </p>
            <h3 className='font-bold'>Como profesionales de IT hablamos tu mismo idioma</h3>
        </div>
    </div>
  )
}
