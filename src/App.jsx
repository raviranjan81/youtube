import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from './context/ContextApi'
import Feed from './components/Feed';
import SearchResult from './components/SearchResult';
import Header from './components/Header';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
      <AppContext>
        <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header/>
          <Routes>
              <Route path='/' exact element={<Feed/>} />
              <Route path='/searchResult/:searchQuery' element={<SearchResult/>} />
              <Route path='/video/:id' element={<VideoDetails/>} />
          </Routes>
        </div>
        </BrowserRouter>
      </AppContext>
  )
}

export default App
