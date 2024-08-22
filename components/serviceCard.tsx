import React from 'react'

interface Props {
    title: string
    desc: string
}

export default function serviceCard(props: Props) {
  const {title, desc} = props
  return (
    <div className='flex flex-col rounded-tl-[15%] rounded-br-[15%] w-[20vw] h-[22vh] bg-[url("../public/images/bcw.jpg")] bg-cover border-2 border-[#090909] items-center transition-all duration-500 ease-out hover:scale-110 hover:bg-[url("../public/images/bc2.jpg")] hover:text-white hover:cursor-pointer'>
        <h3>{title}</h3>
        <p className='text-base p-[20px]'>{desc}</p>
    </div>
  )
}
