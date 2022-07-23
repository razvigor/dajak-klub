import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import About from './pages/About';
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
import Singlegallery from './pages/Singlegallery';
import Novosti from './pages/Novosti'



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=':id' element={<BlogSingle />} />
          <Route path='o-klubu' element={<About />} />
          <Route path='novosti' element={<Novosti />} />
          <Route path='iznajmlivanje-camaca' element={<BoatRental />} />
          <Route path='kontakt' element={<Contact />} />
          <Route path='dajak-camac' element={<DajakBoath />} />
          <Route path='galerija' >
            <Route index element={<Gallery />} />
            <Route path=':galleryId' element={<Singlegallery />} />
          </Route>
          <Route path='raft-tim'>
            <Route index element={<RaftTeam />} />
            <Route path=':id' element={<BlogSingle />} />
          </Route>
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
