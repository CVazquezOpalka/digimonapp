import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
/* pages */
import HomePage from '../pages/Home/HomePage';
import DetailPage from '../pages/Detail/DetailPage';
import CreatePage from '../pages/Create/CreatePage';
import SearchPage from '../pages/Search/SearchPage';

function MyRoutes() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/digimon/:id' element={<DetailPage/>}/>
            <Route exact path='/create' element={<CreatePage/>}/>
            <Route exact path='/search' element={<SearchPage/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes