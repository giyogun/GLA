import { useState } from 'react';
import { Play, Search, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '~/wrapper/Layout';
import heroImage from '~/assets/images/man_with_headphones_laughing.jpg';
import { SERMONS, RESOURCE_PAGE } from '~/const/constants';
import ResourceCard from './ResourceCard';
import podcast from '~/assets/images/podcast.png';
import { Button } from '~/components/Button';

const slideVariants = {
  animate: {
    x: [-100, 0],
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSermon, setActiveSermon] = useState(SERMONS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <Layout>
      <motion.div
        initial={{ x: -40 }}
        variants={slideVariants}
        animate={slideVariants.animate}
        className='bg-white pt-12 md:pt-32 '
      >
        {/* Hero Section */}
        <section className='relative h-[760px] flex items-center overflow-hidden'>
          <div className='absolute inset-0 flex'>
            <div className='w-[60%] bg-[#E6E6E6]'></div>
            <div className='w-[40%] bg-[#F5F5F5]'></div>
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10'>
            <div className='flex flex-col lg:flex-row items-center gap-12'>
              <div className='flex-1 text-center lg:text-left'>
                <h1 className='text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight'>
                  Resources For
                  <br />
                  Your Faith
                </h1>
                <p className='text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0'>
                  Access sermons, books, music, podcasts, and teaching materials
                  designed to help you grow spiritually.
                </p>
                {/* TODO: Wire up Browse All Resources button — currently triggers nothing */}
                <button className='bg-primary text-white px-10 py-4 rounded-lg font-bold hover-bg-primary transition-all shadow-lg shadow-orange-200'>
                  Browse All Resources
                </button>
              </div>
              <div className='flex-1 flex justify-center lg:justify-end'>
                <div className='relative w-full max-w-[500px] aspect-[1/1.1] rounded-[3rem] overflow-hidden shadow-2xl'>
                  <img
                    src={heroImage}
                    alt='Young person with headphones'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Sermon Section */}
        <section className='py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl font-extrabold mb-12'>Featured Sermon</h2>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Main Video Player */}
            <div className='flex-[2] bg-white rounded-3xl overflow-hidden'>
              <div className='relative aspect-video rounded-[2.5rem] overflow-hidden shadow-xl bg-black'>
                {isPlaying ? (
                  <iframe
                    className='w-full h-full'
                    src={`https://www.youtube.com/embed/${activeSermon.videoId}?autoplay=1`}
                    title={activeSermon.title}
                    style={{ border: 0 }}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                ) : (
                  <button
                    type='button'
                    className='group cursor-pointer relative w-full h-full block'
                    onClick={handlePlayClick}
                  >
                    <img
                      src={activeSermon.thumbnail}
                      alt={activeSermon.title}
                      className='w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300'
                    />
                    <div className='absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black via-black/40 to-transparent'>
                      <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                        <div className='flex items-center gap-4 text-white/80 text-sm font-medium mb-3'>
                          <span className='flex items-center gap-1'>
                            <Calendar className='w-4 h-4' /> {activeSermon.date}
                          </span>
                          <span className='flex items-center gap-1'>
                            <Clock className='w-4 h-4' />{' '}
                            {activeSermon.duration}
                          </span>
                        </div>
                        <h3 className='text-2xl md:text-3xl font-bold text-white mb-4 text-left'>
                          {activeSermon.title}
                        </h3>
                      </div>
                    </div>
                    {/* Center Play Button Overlay */}
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                      <div className='w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300'>
                        <Play className='w-8 h-8 text-white fill-white ml-1' />
                      </div>
                    </div>
                  </button>
                )}
              </div>
              <div className='py-8'>
                <h3 className='text-3xl font-bold mb-2 text-zinc-800'>
                  {activeSermon.title}
                </h3>
                <p className='text-sm text-gray-400 mb-4'>
                  {activeSermon.date} &bull; {activeSermon.duration}
                </p>
                <button
                  onClick={handlePlayClick}
                  className='bg-primary text-white px-10 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-600 transition-colors'
                >
                  <Play className='w-4 h-4 fill-white' /> WATCH
                </button>
              </div>
            </div>

            {/* Recent Messages Sidebar */}
            <div className='flex-1 bg-gray-50 rounded-[2.5rem] p-8 h-fit'>
              <div className='space-y-6'>
                {SERMONS.map(sermon => (
                  <button
                    key={sermon.id}
                    type='button'
                    onClick={() => {
                      setActiveSermon(sermon);
                      setIsPlaying(false);
                    }}
                    className={`flex gap-4 group cursor-pointer w-full text-left transition-all duration-200 rounded-xl p-2 -ml-2 ${
                      activeSermon.id === sermon.id
                        ? 'bg-white shadow-sm'
                        : 'hover:bg-white/60'
                    }`}
                  >
                    <div className='w-28 h-18 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm relative'>
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className='w-full h-full object-cover'
                      />
                      {activeSermon.id === sermon.id && (
                        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                          <div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                            <Play className='w-3 h-3 text-white fill-white' />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col justify-center'>
                      <h4 className='font-bold text-md text-zinc-800 leading-tight group-hover:text-primary transition-colors line-clamp-2'>
                        {sermon.title}
                      </h4>
                      <p className='text-xs text-gray-400 mt-1 font-semibold'>
                        {sermon.duration}
                      </p>
                      <p className='text-primary text-[11px] font-black mt-1 uppercase tracking-wider'>
                        WATCH NOW
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section className='py-24 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
              <div>
                <h2 className='text-4xl font-extrabold text-slate-900 mb-2'>
                  Explore Teachings & Resources
                </h2>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='relative group min-w-[300px]'>
                  <input
                    type='text'
                    placeholder='Search sermons, books, music...'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    // onKeyDown={e => e.key === 'Enter' && handleSearch()}
                    className='w-full pl-12 pr-24 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all'
                  />
                  <div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                    <Search />
                  </div>
                  {/* TODO: Wire up Search button — onClick handler is commented out */}
                  <button
                    // onClick={handleSearch}
                    className='absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-lg font-bold text-sm'
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Filters */}
            {/* TODO: Wire up filter dropdowns (Subject, Speaker, Resource Type) — currently trigger nothing */}
            <div className='flex flex-wrap gap-4 mb-12'>
              {['Subject', 'Speaker', 'Resource Type'].map(filter => (
                <div key={filter} className='relative group'>
                  <button className='flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors'>
                    {filter}
                    <svg
                      className='w-4 h-4 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Resources Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
              {RESOURCE_PAGE.map(res => (
                <ResourceCard key={res.id} resource={res} />
              ))}
            </div>

            <div className='mt-16 text-center'>
              {/* TODO: Wire up Load More button — currently triggers nothing */}
              <button className='border border-gray-200 px-12 py-4 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors'>
                Load More
              </button>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section className='bg-[#F5F5F5] pt-24 pb-0 relative overflow-hidden lg:h-[700px]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full'>
            <div className='flex flex-col lg:flex-row items-end h-full'>
              <div className='flex-1 lg:pr-12 text-left pb-24 lg:pb-32'>
                <span className='bg-[#5EB3B3] text-white px-5 py-2 rounded-lg text-[11px] font-bold uppercase tracking-[0.2em] mb-10 inline-block'>
                  GLA PODCAST
                </span>
                <h2 className='text-6xl lg:text-7xl font-black text-zinc-800 mb-8 leading-[1.1] tracking-tighter'>
                  Listen. Grow.
                  <br />
                  Live the God-Life.
                </h2>
                <p className='text-zinc-700 mb-12 text-xl font-medium max-w-lg leading-relaxed'>
                  Join thousands of listeners explore God&apos;s Word through
                  practical teaching, faith conversations, and Spirit-led
                  insights designed for daily living on the go.
                </p>
                {/* TODO: Wire up LISTEN TO PODCAST button — link to Spotify or podcast page */}
                <Button className='bg-primary text-white px-14 py-5  font-bold text-sm hover:bg-orange-600 shadow-xl shadow-orange-500/10 uppercase tracking-widest'>
                  LISTEN TO PODCAST
                </Button>
              </div>

              <div className='flex-1 w-full lg:w-auto flex justify-center lg:justify-end items-end h-full overflow-hidden'>
                <div className='relative w-full max-w-[600px] flex items-end'>
                  <img
                    src={podcast}
                    alt='Smiling man with headphones'
                    className='w-full h-auto grayscale block'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default ResourcesPage;
