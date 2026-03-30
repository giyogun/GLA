import { useState } from 'react';
import { Button } from './Button';
import { Play, Clock, Calendar } from 'lucide-react';
import { SERMONS } from '~/const/constants';
import MotionWrap from '~/wrapper/MotionWrap';

const Teachings = () => {
  const [activeSermon, setActiveSermon] = useState(SERMONS[0]);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className='py-24 bg-white' id='sermons'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-6'>
          <div className='max-w-2xl'>
            <h2
              className='text-3xl md:text-4xl font-bold text-slate-900 mb-2'
              style={{
                fontSize: '62px',
                lineHeight: '72px',
              }}
            >
              Receive Practical teachings <br /> rooted in{' '}
              <span className='text-primary'>God&apos;s Word</span>
            </h2>
          </div>
          <a href='https://www.youtube.com/@theglajos' target='blank'>
            <Button variant='outline' className='shrink-0' size='lg'>
              BROWSE ALL
            </Button>
          </a>
        </div>

        {/* Featured Video Player */}
        <div className='mb-12 relative rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl'>
          {isPlaying ? (
            <iframe
              className='w-full h-full'
              src={`https://www.youtube.com/embed/${activeSermon.videoId}?autoplay=1`}
              title={activeSermon.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          ) : (
            <div className='group cursor-pointer' onClick={handlePlayClick}>
              <img
                src={activeSermon.thumbnail}
                alt={activeSermon.title}
                className='w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300'
              />
              <div className='absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-black via-black/40 to-transparent'>
                <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                  <div className='flex items-center gap-4 text-white/80 text-sm font-medium mb-3'>
                    <span className='flex items-center gap-1'>
                      <Calendar className='w-4 h-4' /> {activeSermon.date}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Clock className='w-4 h-4' /> {activeSermon.duration}
                    </span>
                  </div>
                  <h3 className='text-3xl md:text-5xl font-bold text-white mb-6'>
                    {activeSermon.title}
                  </h3>
                  <button className='flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors'>
                    <Play className='w-5 h-5 fill-current' /> Watch Now
                  </button>
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className='absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                  <Play className='w-8 h-8 text-white fill-current ml-1' />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {SERMONS.map(sermon => (
            <button
              key={sermon.id}
              onClick={() => {
                setActiveSermon(sermon);
                setIsPlaying(false);
              }}
              className={`group relative rounded-xl overflow-hidden aspect-video text-left transition-all duration-300 ${
                activeSermon.id === sermon.id
                  ? 'ring-2 ring-blue-600 ring-offset-2'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={sermon.thumbnail}
                alt={sermon.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center'>
                {activeSermon.id === sermon.id && (
                  <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center'>
                    <Play className='w-4 h-4 text-white fill-current' />
                  </div>
                )}
              </div>
              <div className='absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent'>
                <p className='text-white text-xs font-medium truncate'>
                  {sermon.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <a href='https://www.youtube.com/@theglajos/streams' target='blank'>
            <Button size='lg' className='w-full md:w-auto'>
              Watch Live Service
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Teachings, '');
