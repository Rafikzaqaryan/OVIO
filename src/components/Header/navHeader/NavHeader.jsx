import React from 'react'

export const NavHeader = () => {
  return (
 
  <div className='pt-[10px] pl-[60px] flex items-center gap-5'>
    <div className='w-[160px] h-[52px]'><img src="https://ovio.am/storage/uploads/logo/WR6F8UuyxCBldK0hgnfigpx72VT9YAQLfzWamCdI.svg" /></div>
   <strong><div className='text-custom'>Հատուկ առաջարկներ</div></strong>
  <strong>  <div className='text-custom'>Տան համար</div></strong>
   <strong> <div className='text-custom'>Բիզնեսի համար</div></strong>
 <strong>   <div className='text-custom'>Մեր մասին</div></strong>
  <strong> <div className='text-custom'>վճարել</div></strong>
    <strong><div className='text-custom'>Օգնություն</div></strong>
   <strong> <div className='text-custom'>Մուտք</div> </strong>
    <button className='text-white text-[15px] bg-[#53079d] h-[50px] w-[200px] rounded-[10px]'><strong> Միացի՛ր հիմա</strong></button>
  </div>
  )
}
