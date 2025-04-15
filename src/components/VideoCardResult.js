import React from 'react'

const VideoCardResult = ({info}) => {
  const {snippet, statistics} = info;
  const {description, title, thumbnails, channelTitle} = snippet;
  return (
    <div className='my-6 hover:cursor-pointer'>
      <div className='flex'>
        <img className='rounded-xl' src={thumbnails.medium.url} />
        <div>
          <h3 className='m-4'>{title}</h3>
          <h3 className='m-4'>{channelTitle}</h3>
          <p className='m-4'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCardResult
