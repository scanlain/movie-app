import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Popular from './components/Popular/Popular.jsx'
import TopRated from './components/TopRated/TopRated.jsx'
import Upcoming from './components/Upcoming/Upcoming.jsx'
import MovieDetails from './components/MovieDetails/MovieDetails.jsx'
import SearchResults from './components/SearchResults/SearchResults.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Popular />} />
      <Route path='upcoming' element={<Upcoming />} />
      <Route path='toprated' element={<TopRated />} />

      <Route path='movie/:id' element={<MovieDetails />} />
      <Route path="/search/:query" element={<SearchResults />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
