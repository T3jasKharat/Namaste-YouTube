import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'
import { searchResults } from '../utils/searchResultsSlice'
import { Link } from 'react-router-dom'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchCache = useSelector(store => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions();
      }
    }, 200);
    
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({[searchQuery]: json[1]}))
  }

  const handleSearchResults = async (suggestion) => {
    const data = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=' + suggestion + '&type=video&key=' + process.env.REACT_APP_GOOGLE_API_KEY);
    const json = await data.json();
    dispatch(searchResults(json.items));
  }

  return (
    <div className='grid grid-flow-col shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={toggleMenuHandler} className='h-16 cursor-pointer' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png' alt='menu' />

        <img className='h-16' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' alt='youtube-logo' />
      </div>
      <div className='col-span-10 self-center relative'>
        <div className='flex items-center'>
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='w-1/2 border border-gray-400 p-2 px-5 rounded-l-full' type='text' onFocus={() => setShowSuggestions(true)} onBlur={() => setTimeout(() => setShowSuggestions(false), 1000)}/>
          <button onClick={() => handleSearchResults(searchQuery)} className='border border-gray-400 p-2 rounded-r-full'>
          <Link to='/results'><img className='h-6' src='https://static.vecteezy.com/system/resources/previews/009/652/218/non_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg' /></Link>
          </button>
        </div>
        {showSuggestions && <div className='absolute bg-white p-2 w-[36rem] shadow-lg rounded-lg border-gray-100'>
          <ul>
            {suggestions && suggestions.map(suggestion => <Link key={suggestion} to='/results'><li onMouseDown={() => handleSearchResults(suggestion)} className='py-2 px-3 hover:bg-gray-100'>🔍 {suggestion}</li></Link>)}
          </ul>
        </div>}
      </div>
      <div className='col-span-1 py-6'>
        <img className='h-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
      </div>
    </div>
  )
}

export default Head
