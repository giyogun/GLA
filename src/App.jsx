import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import EventList from './pages/EventList';
import Contact from './pages/Contact';
import MissionsPage from './pages/MissionsPage/MissionsPage';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage';
import AboutPage from './pages/AboutPage';
import EventDetails from './pages/EventDetails';
import GivePage from './pages/GivePage';

function App() {
  return (
    <div className='min-h-screen flex flex-col w-full overflow-x-hidden'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/events' element={<EventList />} />
        <Route path='/events/:id' element={<EventDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/outreach' element={<MissionsPage />} />
        <Route path='/resources' element={<ResourcesPage />} />
        <Route path='/give' element={<GivePage />} />
      </Routes>
    </div>
  );
}

export default App;

function ScrollToTop() {
  const { pathname } = useLocation();
  console.log(pathname, 'pathname');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
