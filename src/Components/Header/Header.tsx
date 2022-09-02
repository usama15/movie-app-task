import React, {FC} from 'react'
import logo from '../../Assets/logo.png'
import './Header.css'

const Header: FC<any> = (props) => {
  return (
    <div className="header">
      <img className='logo' alt='logo' src={logo}/>
        <span className='main-text'>Home</span>
        <span className='main-text'>IMDB Top</span>
        <span className='main-text'>New Movies</span>
        <input className='search-input' onChange={props.inputValueChanged} placeholder='Search for movies'/>
    </div>
  )
}

export default Header