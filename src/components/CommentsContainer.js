import React from 'react'
import Comment from './Comment'
import CommentsList from './CommentsList'

const comments = [
  {
    name: 'Akshay Saini',
    comment: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Tejas Kharat',
        comment: 'Thank you Akshay!!',
        replies: [
          {
            name: 'Akshay Saini',
            comment: 'Welcome',
            replies: [
              {
                name: 'Tejas Kharat',
                comment: 'Lorem ipsum dolor sit amet, consectetur adip',
                replies: [
                  {
                    name: 'Tejas Kharat',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adip',
                    replies: [
                      {
                        name: 'Tejas Kharat',
                        comment: 'Lorem ipsum dolor sit amet, consectetur adip',
                        replies: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Akshay Saini',
    comment: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Tejas Kharat',
        comment: 'Thank you Akshay!!',
        replies: [
          {
            name: 'Akshay Saini',
            comment: 'Welcome',
            replies: []
          }
        ]
      }
    ]
  },
  {
    name: 'Akshay Saini',
    comment: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Tejas Kharat',
        comment: 'Thank you Akshay!!',
        replies: [
          {
            name: 'Akshay Saini',
            comment: 'Welcome',
            replies: []
          }
        ]
      }
    ]
  },
  {
    name: 'Akshay Saini',
    comment: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Tejas Kharat',
        comment: 'Thank you Akshay!!',
        replies: [
          {
            name: 'Akshay Saini',
            comment: 'Welcome',
            replies: []
          }
        ]
      }
    ]
  },
  {
    name: 'Akshay Saini',
    comment: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Tejas Kharat',
        comment: 'Thank you Akshay!!',
        replies: [
          {
            name: 'Akshay Saini',
            comment: 'Welcome',
            replies: []
          }
        ]
      }
    ]
  }
]

const CommentsContainer = () => {
  return (
    <div className='my-5'>
      <h1 className='text-2xl font-bold'>Comments :</h1>
      <CommentsList comments={comments}/>
    </div>
  )
}

export default CommentsContainer
