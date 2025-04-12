import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ['All', 'Gaming', 'Songs', 'Live', 'Soccer', 'Cricket', 'Valentines', 'Cooking'];
  return (
    <div className='flex'>
      {list.map(item => <Button key={item} name={item} />)}
    </div>
  )
}

export default ButtonList
