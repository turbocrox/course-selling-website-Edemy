import React, { useState } from 'react'
import { assets } from '../../assets/assets'  // Import the assets object
import { useNavigate } from 'react-router-dom';

const Searchbar = ({data}) => {



  const  navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')

  const  onSearchHandle = (e) => {
    e.preventDefault()
  navigate('/Course-list/'+input)
  }
    
    
    
    return (
    <div>
      <form onSubmit={onSearchHandle}className='max-w-x1 w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded'>
        <img src={assets.search_icon} alt="search icon" className='md:w-auto w-10 px-3'/> 
        <input  onChange={e  => setInput(e.target.value)} value={input}
        type="text" placeholder='search for course' className='w-full h-full outline-none text-gray-500/80'/>
        <button type='submit' className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1'>Search</button> 
      </form>
    </div>
  )
}

export default Searchbar