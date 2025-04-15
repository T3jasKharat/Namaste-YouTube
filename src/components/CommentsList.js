import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return comments.map((comment, index) => <Comment key={index} data={comment} />);
}

export default CommentsList;
