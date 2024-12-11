import React from 'react'

export const UpHeader = () => {
  return (
    <div className='text-[13px] font-sans flex border-b-[1px] border border-[#e9e9e9] h-[52px] items-center gap-4 pl-12'>
        <div>
          <p className="hover:text-[#53079d]">+ 374 60 46 46 46</p>
        </div>
        <div> 
          <a  href="mailto:info@ovio.am">
            <p className='hover:text-[#53079d]'>info@ovio.am</p>
          </a> 
        </div>
        <div className='flex gap-4'>
          <p className='hover:text-[#53079d]'>Գրասենյակներ և ծածկույթ</p>
        </div>
    </div>
  )
}
