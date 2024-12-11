import React from 'react'
import "../style/NavHeader.css"

function NavHeader(){
  return(
    <div className='cont'>
        <div className='div1'><img src="https://ovio.am/storage/uploads/logo/WR6F8UuyxCBldK0hgnfigpx72VT9YAQLfzWamCdI.svg" /></div>
        <div className='div1'>Հատուկ առաջարկներ</div>
        <div className='div1'>Տան համար</div>
        <div className='div1'>Բիզնեսի համար</div>
        <div className='div1'>Մեր մասին</div>
        <div className='div1'>վճարել</div>
        <div className='div1'>Օգնություն</div>
        <div className='div1'>Մուտք</div>
        <button>Միացի՛ր հիմա</button>
    </div>
  )
}

export default NavHeader
