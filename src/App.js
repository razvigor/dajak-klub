import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import BoatRental from './pages/BoatRental';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import DajakBoath from './pages/DajakBoath';
import Gallery from './pages/Gallery';
import RaftTeam from './pages/RaftTeam';
import RiverVrbas from './pages/RiverVrbas';
import TuristTours from './pages/TuristTours';
import BlogSingle from './pages/BlogSingle';
import SchoolOfDajak from './pages/SchoolOfDajak';



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='o-klubu' element={<About />} />
          <Route path='blog' element={<Blog />}>
            <Route path=':blogId' element={<BlogSingle />} />
          </Route>
          <Route path='iznajmlivanje-camaca' element={<BoatRental />} />
          <Route path='kontakt' element={<Contact />} />
          <Route path='dajak-camac' element={<DajakBoath />} />
          <Route path='galerija' element={<Gallery />} />
          <Route path='raft-tim' element={<RaftTeam />} />
          <Route path='rijeka-vrbas' element={<RiverVrbas />} />
          <Route path='turisticke-ture' element={<TuristTours />} />
          <Route path='skola-dajakastva' element={<SchoolOfDajak />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;