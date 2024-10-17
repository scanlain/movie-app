import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // To navigate to the search results page

  // Handle the search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`); // Navigate to the search results page
    }
  };
  
  return (
    <header>
        <nav className="border-gray-200 m-6 bg-gray-500">
                <div className="flex flex-wrap justify-center items-center">
                    <div
                        className="flex gap-4 items-center w-90% mx-auto my-0 mb-4"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-row mt-4 font-medium space-x-8">
                            
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50  hover:text-orange-700 `
                                    }
                                >
                                    Popular Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/upcoming"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50   hover:text-orange-700 `
                                    }
                                >
                                    Upcoming Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/toprated"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50  hover:text-orange-700 `
                                    }
                                >
                                    Top-rated movies
                                </NavLink>
                            </li>
                        
                        </ul>

                        <form onSubmit={handleSearchSubmit} className="mt-4">
                            <input
                                style={{outline:'none', color:'black'}}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search Movies..."
                                className="px-4 py-2 rounded-md"
                            />
                            <button type="submit" className="ml-2 px-4 py-2 bg-orange-700 text-white rounded-md">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                
        </nav>
    </header>
  )
}

export default Header