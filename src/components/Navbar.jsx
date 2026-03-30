import { useState, useEffect } from 'react';
import { Menu, X, Globe, Play } from 'lucide-react';
import { Button } from './Button';
import { NAV_ITEMS } from '~/const/constants';
import logo from '~/assets/images/logo.png';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getPath = item => {
    if (item) return item;

    return '/';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900 shadow-md`}
    >
      {/* Top Utility Bar */}
      <div
        className={`hidden md:block border-b border-white/10 ${
          isScrolled ? 'bg-slate-900' : 'bg-gray-100/95'
        } transition-colors duration-300`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div
            className={`flex justify-between items-center h-10 text-[10px] font-bold tracking-widest uppercase ${
              isScrolled ? 'text-gray-300' : 'text-slate-600'
            }`}
          >
            {/* TODO: Replace all '#' hrefs below with real routes/URLs */}
            <div className='flex gap-6'>
              <a href='#' className='hover:text-primary transition-colors'>
                Find a Church
              </a>
              <a href='#' className='hover:text-primary transition-colors'>
                Music
              </a>
            </div>
            <div className='flex gap-6 items-center'>
              <a href='#' className='hover:text-primary transition-colors'>
                Prayer Request
              </a>
              <a href='#' className='hover:text-primary transition-colors'>
                Schedule
              </a>
              <button className='flex items-center gap-1 hover:text-primary transition-colors'>
                <Globe className='w-3 h-3' />
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <img
            src={logo}
            alt='Church Logo'
            className='w-[108px] h-[60px] cursor-pointer'
            onClick={() => navigate('/')}
          />
          <div className='flex items-center gap-2 text-white font-bold text-xl tracking-tight cursor-pointer shrink-0'>
            {/* <div className='border-2 border-white rounded-full p-1'>
              <Church className='w-5 h-5 text-white' />
            </div>
            <div className='flex flex-col leading-none'>
              <span className='text-[10px] tracking-widest uppercase text-primary'>
                The
              </span>
              <span className='text-sm font-extrabold tracking-wide'>
                GOD-LIFE
              </span>
              <span className='text-[10px] tracking-widest uppercase opacity-80'>
                Assembly
              </span>
            </div> */}
          </div>

          {/* Desktop Nav - Centered & Spaced */}
          <div className='hidden lg:flex items-center justify-center flex-1 px-8'>
            <div className='flex items-center gap-8'>
              {NAV_ITEMS.map(item => (
                <NavLink
                  key={item.label}
                  // href={item.href}
                  className={`${
                    item.link === pathname ? 'text-primary' : 'text-gray-200'
                  } hover:text-primary font-medium text-[15px] transition-colors cursor-pointer`}
                  to={getPath(item.link)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Buttons */}
          <div className='hidden md:flex items-center gap-4 shrink-0'>
            <button className=' px-5 py-2.5 rounded-lg border border-primary text-white text-sm font-bold hover:bg-primary/10 transition-colors'>
              <a
                href='https://www.youtube.com/@theglajos/streams'
                target='blank'
                className='flex items-center gap-2'
              >
                <span>Watch Live</span>
                <div className='w-4 h-4 bg-primary rounded flex items-center justify-center'>
                  <Play className='w-2 h-2 fill-white text-white' />
                </div>
              </a>
            </button>
            <Button
              size='md'
              className='rounded-lg px-6 font-bold text-sm bg-primary hover:bg-orange-600'
              onClick={() => navigate('/contact')}
            >
              Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-white p-2'
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 p-4 flex flex-col gap-4 shadow-xl h-screen'>
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.label}
              to={getPath(item.link)}
              className='text-gray-300 hover:text-primary py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors font-medium'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className='flex flex-col gap-3 mt-4 border-t border-slate-800 pt-4'>
            {/* TODO: Wire up mobile Watch Live button to YouTube live link */}
            <button className='flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-primary text-white font-bold'>
              Watch Live
            </button>
            {/* TODO: Wire up mobile Connect button with onClick navigation to /contact */}
            <Button className='w-full justify-center rounded-lg'>
              Connect
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
