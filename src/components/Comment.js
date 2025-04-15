import React from 'react'
import CommentsList from './CommentsList'

const Comment = ({data}) => {
  const {name, comment, replies} = data;
  return (
    <div className='flex bg-gray-100 mt-3 rounded-lg border-l border-black'>
      <img className='w-8 h-8' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
      <div className='px-3'>
        <h3 className='font-bold'>{name}</h3>
        <p>{comment}</p>
        <CommentsList comments={replies} />
      </div>
    </div>
  )
}

export default Comment
