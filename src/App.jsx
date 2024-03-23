import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className='header'>
        <div className='logo'></div>
        <div className='products'>
          <button id='new' className='button-header'>New</button>
          <button id='iphone' className='button-header'>Iphone</button>
          <button id='macbook' className='button-header'>Macbook</button>
          <button id='watch' className='button-header'>Watch</button>
          <button id='ipad' className='button-header'>Ipad</button>
          <button id='vision' className='button-header'>Vision</button>
        </div>
        <div className='products-mobile-background'>
          <div className='menu-logo'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <div className='mobile-products'>
            <button id='new-mob' className='button-header-mob'>New</button>
            <button id='iphone-mob' className='button-header-mob'>Iphone</button>
            <button id='macbook-mob' className='button-header-mob'>Macbook</button>
            <button id='watch-mob' className='button-header-mob'>Watch</button>
            <button id='ipad-mob' className='button-header-mob'>Ipad</button>
            <button id='vision-mob' className='button-header-mob'>Vision</button>
          </div>
        </div>

      </header>
      <main>
        <div className='vision-pro'>
          <div className='image-background'>
            <div className='new-background-text'>New</div>
            <img className='vision-image' src="src/public/images/apple-vision-pro.png" alt="" />

          </div>
        </div>
      </main>
    </div>
  )
}

export default App
