import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoCardResult from './VideoCardResult'
import { Link } from 'react-router-dom'
import { openMenu } from '../utils/appSlice'

const SearchResultsPage = () => {
  const dispatch = useDispatch();
  const results = useSelector(store => store.searchResults);
  dispatch(openMenu());
  return (
    <div>
      {
        results.results.map(result => <Link to={'/watch?v=' + result.id.videoId}> <VideoCardResult key={result.id.videoId} info={result} /></Link>)
      }
    </div>
  )
}

export default SearchResultsPage
