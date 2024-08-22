import React from 'react'

export default function productSection() {
  return (
    <div id='productSect' className='pt-[8vh] text-center w-full h-[120vh] text-white bg-black'>
        <h1>Nuestros productos</h1>
        <div className='pt-[25px] text-center flex flex-col justify-center'>
            <p className='self-center max-w-[900px] '>POS (Point of sale) o Punto de venta permite a los comercios administrar eficientemente su inventario, 
                ventas y control general de artículos. Ofrece seguimiento en tiempo real del stock, historial de ventas, y herramientas 
                de análisis para optimizar la operación diaria. Con una interfaz intuitiva, facilita la toma de decisiones y asegura un manejo 
                ágil y preciso de todos los productos del negocio.</p>
          
        </div>
        <div className='w-full h-[65vh] flex items-center justify-center text-center'>
            <div className='h-[400px] flex justify-center text-center gap-[150px] pr-[15%]'>
                <div id='crd1' className='cntnt'>
                    <input type="radio" name='slide' id='cc1' checked />
                    <label htmlFor="cc1" className='absolute w-[220px] h-[450px] rounded-[2rem] bg-cover bg-[url("../public/images/ss1.png")] cursor-pointer flex transition-transform duration-1000 ease-in-out hover:z-[1111] hover:scale-[1.15]'>
                        <div className='row'>
                            <div className='description'>
                                
                            </div>
                        </div>
                    </label>
                </div>
                <div id='crd2' className='cntnt'>
                    <input type="radio" name='slide' id='cc2' checked/>
                    <label htmlFor="cc2" className='absolute w-[220px] h-[450px] rounded-[2rem] bg-cover bg-[url("../public/images/ss2.png")] cursor-pointer flex transition-transform duration-1000 ease-in-out hover:z-[1111] hover:scale-[1.15]'>
                        <div className='row'>
                            <div className='description'></div>
                        </div>
                    </label>
                </div>
                <div id='crd3' className='cntnt'>
                    <input type="radio" name='slide' id='cc3' checked/>
                    <label htmlFor="cc3" className='absolute w-[220px] h-[450px] rounded-[2rem] bg-[url("../public/images/ss3.png")] bg-cover cursor-pointer flex transition-transform duration-1000 ease-in-out hover:z-[1111] hover:scale-[1.15]'>
                        <div className='row'>
                            <div className='description'>
                            </div>
                        </div>
                    </label>
                </div>
                <div  id='crd4' className='cntnt'>
                    <input type="radio" name='slide' id='cc4' checked/>
                    <label htmlFor="cc4" className='absolute w-[220px] h-[450px] rounded-[2rem] bg-[url("../public/images/ss4.png")] bg-cover cursor-pointer flex transition-transform duration-1000 ease-in-out hover:z-[1111] hover:scale-[1.15]'>
                        <div className='row'>
                            <div className='description'>
                            </div>
                        </div>
                    </label>
                </div>
                <div id='crd5' className='cntnt'>
                    <input type="radio" name='slide' id='cc5' checked/>
                    <label htmlFor="cc5" className='absolute w-[220px] h-[450px] rounded-[2rem] bg-[url("../public/images/ss5.png")] bg-cover cursor-pointer flex transition-transform duration-1000 ease-in-out hover:z-[1111] hover:scale-[1.15]'>
                        <div className='row'>
                            <div className='description'>
                            </div>
                        </div>
                    </label>
                </div>
                <div id='crd6' className='cntnt'>
                    <input type="radio" name='slide' id='cc6' checked/>
                    <label htmlFor="cc6" className='absolute w-[220px] h-[450px] rounded-[2rem] bg-[url("../public/images/ss6.png")] bg-cover cursor-pointer flex transition-transform duration-1000 ease-in-out hover:z-[1111] hover:scale-[1.15]'>
                        <div className='row'>
                            <div className='description'>
                            </div>
                        </div>
                    </label>
                </div>
                <div id='crd7' className='cntnt'>
                    <input type="radio" name='slide' id='cc7' checked/>
                    <label htmlFor="cc7" className='absolute w-[220px] h-[450px] rounded-[2rem] bg-[url("../public/images/ss7.png")] bg-cover cursor-pointer flex transition-transform duration-1000 ease-in-out hover:z-[1111] hover:scale-[1.15]'>
                        <div className='row'>
                            <div className='description'>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </div>
  )
}
