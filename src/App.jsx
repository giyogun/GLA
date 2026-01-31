import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import EventList from './pages/EventList';
import Contact from './pages/Contact';
import MissionsPage from './pages/MissionsPage/MissionsPage';

function App() {
  return (
    <div className='min-h-screen flex flex-col w-full overflow-x-hidden'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<EventList />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/outreach' element={<MissionsPage />} />
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
