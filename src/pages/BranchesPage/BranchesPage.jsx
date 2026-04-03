import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import Layout from '~/wrapper/Layout';
import CommonHero from '~/components/CommonHero';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Search,
  Navigation,
  Church,
  X,
  User,
} from 'lucide-react';
import { BRANCHES } from '~/const/constants';

const slideVariants = {
  animate: {
    x: [-100, 0],
    opacity: [0, 1],
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const cardVariants = {
  enter: direction => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: direction => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: 'easeIn' },
  }),
};

const BranchesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const activeBranch = BRANCHES[activeIndex];

  // Filtered branches for search results
  const filteredBranches = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return BRANCHES.filter(
      b =>
        b.name.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        b.state.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const goTo = useCallback(
    index => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
      setSearchQuery('');
      setIsSearchOpen(false);
    },
    [activeIndex],
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % BRANCHES.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex(prev => (prev - 1 + BRANCHES.length) % BRANCHES.length);
  }, []);

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClick = e => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Google Maps embed URL for the active branch
  const mapEmbedUrl = `https://www.google.com/maps?q=${activeBranch.lat},${activeBranch.lng}&z=16&output=embed`;

  return (
    <Layout>
      <motion.div
        initial={{ x: -40 }}
        variants={slideVariants}
        animate={slideVariants.animate}
      >
        {/* Hero */}
        <section className='relative bg-neutral-900 pt-20 min-h-[55vh]'>
          <CommonHero
            title='Our Branches'
            subtitle='Find a God-Life Assembly near you. We are spread across Nigeria, bringing the Gospel to every community.'
          />
        </section>

        {/* Main Content */}
        <section className='relative bg-white py-16 md:py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Section Header with Search */}
            <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12'>
              <div>
                <p className='font-script text-3xl md:text-4xl text-primary mb-1'>
                  Find Us
                </p>
                <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight'>
                  Worship With Us <span className='text-primary'>Anywhere</span>
                </h2>
                <p className='text-gray-500 mt-3 max-w-lg'>
                  Browse through all our branches across Nigeria or search for
                  one near you.
                </p>
              </div>

              {/* Search Bar */}
              <div className='relative w-full md:w-80' ref={searchRef}>
                <div className='relative'>
                  <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                  <input
                    ref={inputRef}
                    type='text'
                    placeholder='Search by city, state, or name…'
                    value={searchQuery}
                    onChange={e => {
                      setSearchQuery(e.target.value);
                      setIsSearchOpen(true);
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    className='w-full pl-11 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all'
                  />
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setIsSearchOpen(false);
                      }}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                    >
                      <X className='w-4 h-4' />
                    </button>
                  )}
                </div>

                {/* Search Results Dropdown */}
                <AnimatePresence>
                  {isSearchOpen && searchQuery.trim() && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className='absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden'
                    >
                      {filteredBranches.length > 0 ? (
                        <ul className='py-2 max-h-64 overflow-y-auto'>
                          {filteredBranches.map(branch => {
                            const idx = BRANCHES.findIndex(
                              b => b.id === branch.id,
                            );
                            return (
                              <li key={branch.id}>
                                <button
                                  onClick={() => goTo(idx)}
                                  className='w-full flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors text-left'
                                >
                                  <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
                                    <MapPin className='w-4 h-4 text-primary' />
                                  </div>
                                  <div>
                                    <p className='text-sm font-semibold text-slate-800'>
                                      {branch.name}
                                      {branch.isHQ && (
                                        <span className='ml-2 text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full uppercase'>
                                          HQ
                                        </span>
                                      )}
                                    </p>
                                    <p className='text-xs text-gray-400'>
                                      {branch.city}, {branch.state}
                                    </p>
                                  </div>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <div className='px-4 py-6 text-center'>
                          <p className='text-sm text-gray-400'>
                            No branches found for &ldquo;{searchQuery}&rdquo;
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Branch Indicator Pills */}
            <div className='flex flex-wrap gap-2 mb-10'>
              {BRANCHES.map((branch, idx) => (
                <button
                  key={branch.id}
                  onClick={() => goTo(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    idx === activeIndex
                      ? 'bg-primary text-white shadow-lg shadow-orange-500/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {branch.city}
                  {branch.isHQ && idx === activeIndex && ' ★'}
                </button>
              ))}
            </div>

            {/* Main Card: Info + Map */}
            <div className='grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100'>
              {/* Left — Branch Details */}
              <div className='relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 flex flex-col justify-between min-h-[480px]'>
                {/* Decorative element */}
                <div className='absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full' />
                <div className='absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-tr-full' />

                <AnimatePresence mode='wait' custom={direction}>
                  <motion.div
                    key={activeBranch.id}
                    custom={direction}
                    variants={cardVariants}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    className='relative z-10 flex flex-col h-full'
                  >
                    {/* Top badge */}
                    <div className='flex items-center gap-2 mb-6'>
                      <div className='w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center'>
                        <Church className='w-5 h-5 text-primary' />
                      </div>
                      {activeBranch.isHQ && (
                        <span className='text-[11px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                          Headquarters
                        </span>
                      )}
                    </div>

                    {/* Branch Name */}
                    <h3 className='text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2'>
                      God-Life Assembly
                    </h3>
                    <p className='text-primary text-xl font-bold mb-6'>
                      {activeBranch.city}
                    </p>

                    {/* Address */}
                    <div className='flex items-start gap-3 mb-8'>
                      <div className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <MapPin className='w-4 h-4 text-primary' />
                      </div>
                      <p className='text-gray-300 leading-relaxed text-sm md:text-base'>
                        {activeBranch.address}
                      </p>
                    </div>

                    {/* State Badge */}
                    <div className='flex items-center gap-2 mb-4'>
                      <div className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center'>
                        <Navigation className='w-4 h-4 text-primary' />
                      </div>
                      <span className='text-gray-400 text-sm'>
                        {activeBranch.state}
                      </span>
                    </div>

                    {/* Senior Pastor */}
                    {activeBranch.pastor && (
                      <div className='flex items-center gap-3 mb-8'>
                        <div className='w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center'>
                          <User className='w-4 h-4 text-primary' />
                        </div>
                        <div>
                          <p className='text-[10px] uppercase tracking-wider text-gray-500 font-semibold'>
                            Senior Pastor
                          </p>
                          <p className='text-white text-sm font-bold'>
                            {activeBranch.pastor}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Spacer */}
                    <div className='flex-1' />

                    {/* Get Directions Link */}
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${activeBranch.lat},${activeBranch.lng}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 w-fit group'
                    >
                      <Navigation className='w-4 h-4 transition-transform group-hover:translate-x-0.5' />
                      Get Directions
                    </a>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className='relative z-10 flex items-center gap-3 mt-8'>
                  <button
                    onClick={goPrev}
                    className='w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95'
                    aria-label='Previous branch'
                  >
                    <ChevronLeft className='w-5 h-5' />
                  </button>
                  <span className='text-gray-400 text-sm font-medium tabular-nums'>
                    {activeIndex + 1}{' '}
                    <span className='text-gray-600'>/ {BRANCHES.length}</span>
                  </span>
                  <button
                    onClick={goNext}
                    className='w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95'
                    aria-label='Next branch'
                  >
                    <ChevronRight className='w-5 h-5' />
                  </button>
                </div>
              </div>

              {/* Right — Map */}
              <div className='relative min-h-[400px] lg:min-h-[480px] bg-gray-100'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={activeBranch.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className='absolute inset-0'
                  >
                    <iframe
                      title={`Map - ${activeBranch.name}`}
                      src={mapEmbedUrl}
                      className='w-full h-full border-0'
                      allowFullScreen
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Branch Grid Overview */}
            <div className='mt-20'>
              <h3 className='text-2xl md:text-3xl font-extrabold text-slate-900 mb-8'>
                All Locations
              </h3>
              <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {BRANCHES.map((branch, idx) => (
                  <motion.button
                    key={branch.id}
                    onClick={() => {
                      goTo(idx);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative text-left p-6 rounded-2xl border transition-all duration-300 group ${
                      idx === activeIndex
                        ? 'bg-primary/5 border-primary shadow-lg shadow-orange-500/10'
                        : 'bg-white border-gray-100 hover:border-primary/30 hover:shadow-md'
                    }`}
                  >
                    <div className='flex items-center gap-3 mb-3'>
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          idx === activeIndex
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'
                        }`}
                      >
                        <Church className='w-4 h-4' />
                      </div>
                      {branch.isHQ && (
                        <span className='text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase'>
                          HQ
                        </span>
                      )}
                    </div>
                    <h4 className='text-sm font-bold text-slate-900 mb-1'>
                      {branch.city}
                    </h4>
                    {branch.pastor && (
                      <p className='text-xs text-primary font-semibold mb-1'>
                        {branch.pastor}
                      </p>
                    )}
                    <p className='text-xs text-gray-400 line-clamp-2 leading-relaxed'>
                      {branch.address}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default BranchesPage;
