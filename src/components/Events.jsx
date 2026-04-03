// import { UPCOMING_EVENTS } from '../constants';
import { useRef } from 'react';
import { Button } from './Button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { UPCOMING_EVENTS } from '~/const/constants';
import { useNavigate } from 'react-router-dom';
import MotionWrap from '~/wrapper/MotionWrap';

const Events = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = direction => {
    if (!scrollRef.current) return;
    const cardWidth =
      scrollRef.current.querySelector('div')?.offsetWidth || 400;
    const gap = 24; // gap-6 = 1.5rem = 24px
    const scrollAmount = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className='py-20 bg-white' id='events'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center mb-10'>
          <h2
            className='text-3xl md:text-4xl font-bold text-slate-900'
            style={{
              fontSize: '62px',
              lineHeight: '72px',
            }}
          >
            Plan your <span className='text-primary'>visit</span> and <br />
            Stay in touch with
          </h2>
          <div className='hidden md:flex gap-2'>
            <button
              onClick={() => scroll('left')}
              className='p-2 rounded md:rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors'
            >
              <ArrowLeft className='w-4 h-4 text-gray-600' />
            </button>
            <button
              onClick={() => scroll('right')}
              className='p-2 rounded md:rounded-lg bg-black text-white hover:bg-slate-800 transition-colors'
            >
              <ArrowRight className='w-4 h-4' />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className='flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {UPCOMING_EVENTS.map(event => (
            <div
              key={event.id}
              className='group relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/5] shadow-lg cursor-pointer flex-shrink-0 w-[85%] sm:w-[45%] md:w-[calc(33.333%-1rem)] snap-start'
              onClick={() => navigate(`/events/${event.id}`)}
            >
              <img
                src={event.image}
                alt={event.title}
                className='w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500'
              />

              {/* Date Badge */}
              <div className='absolute top-4 right-4 bg-white rounded-lg p-2 text-center min-w-[3.5rem] shadow-lg'>
                <span className='block text-xl font-bold text-slate-900 leading-none'>
                  {event.day}
                </span>
                <span className='block text-xs font-bold text-gray-500 uppercase'>
                  {event.month}
                </span>
              </div>

              {/* Bottom Dark Overlay */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-24 pb-8 px-8 text-white'>
                <h3 className='text-xl font-bold mb-2'>{event.title}</h3>
                <p className='text-gray-300 text-xs leading-relaxed max-w-[85%]'>
                  {event.description}
                </p>
                <div className='absolute right-6 bottom-8'>
                  <div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors'>
                    <ArrowRight className='w-4 h-4 text-white' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-10 flex justify-center'>
          <Button
            variant='outline'
            className='px-8 rounded-full border-primary text-primary hover:bg-primary hover:text-white'
            onClick={() => navigate('/events')}
          >
            SEE IT ALL
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Events, '');
