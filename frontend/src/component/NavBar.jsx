import React from 'react'
import './NavBar.css'
export default function NavBar() {
  return (
    <div className='navbar'>
      <ul className='navItems'>
        <li className='list'><i class="fa-solid fa-house"></i> Techispot</li>
        <li className='list'><i class="fa-solid fa-newspaper"></i> TechNews</li>
        <li className='list'><i class="fa-regular fa-face-laugh-squint"></i> TechMemes</li>
        <li className='list'> <i class="fa-solid fa-note-sticky"></i>TechNotes</li>
      </ul>
    </div>
  )
}
