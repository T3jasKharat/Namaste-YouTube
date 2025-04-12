import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={toggleMenuHandler} className='h-16 cursor-pointer' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png' alt='menu' />

        <img className='h-16' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' alt='youtube-logo' />
      </div>
      <div className='col-span-10 flex justify-center items-center'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
        <button className='border border-gray-400 p-2 rounded-r-full'>
          <img className='h-6' src='https://static.vecteezy.com/system/resources/previews/009/652/218/non_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg' />
        </button>
      </div>
      <div className='col-span-1 py-6'>
        <img className='h-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
      </div>
    </div>
  )
}

export default Head
