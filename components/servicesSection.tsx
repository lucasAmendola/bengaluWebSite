import React from 'react'
import ServiceCard from './serviceCard'

export default function servicesSection() {
  return (
    <div id='services' className='pt-[15vh] text-center w-full h-screen bg-white opacity-[0.95] text-[#090909]'>
        <div>
            <h1 className='font-subtitle text-subtitle' >¿Cómo podemos ayudarte?</h1>
            <div className='mt-[4vh] grid grid-cols-3 gap-y-[45px] p-[20px] justify-items-center'>
                <div id='c1' className='moveCarddtu'>                
                    <ServiceCard
                    title='AGILIDAD'
                    desc='Trabajamos con los mejores recursos y herramientas para encontrar soluciones rápidamente.'/></div>
                <div id='c2' className='moveCarddtu'>                
                    <ServiceCard
                    title='COSTOS'
                    desc='Te ayudamos a definir el presupuesto de acuerdo a tus necesidades.'/></div>
                <div id='c3' className='moveCardutd'>                
                    <ServiceCard
                    title='CONFIABILIDAD'
                    desc='Estamos dispuestos a brindar servicios de alta calidad que aseguran el éxito de su proyecto.'/></div>
                <div id='c4' className='moveCarddtu'>                
                    <ServiceCard
                    title='COMPROMISO'
                    desc='Trabajamos un unico objetivo, brindarte soluciones acordes a tus necesidades.'/></div>
                <div id='c5' className='moveCarddtu'>                
                    <ServiceCard
                    title='CALIDAD'
                    desc='Nuestro equipo se dedicará al maximo para desarrollar un producto solido y eficiente.'/></div>
                <div id='c6' className='moveCarddtu'>                
                    <ServiceCard
                    title='COMUNICACION'
                    desc='Siempre estaremos disponibles para responder todas las inquietudes que surjan respecto al producto.'/></div>
            </div>
        </div>
    </div>
  )
}
