import { useState, useMemo } from 'react';
import {
  EVENT_TYPES,
  ICONS,
  MONTHS,
  UPCOMING_EVENTS,
} from '~/const/constants.jsx';
import EventCard from './EventCard';
import Layout from '~/wrapper/Layout';
import EventTop from './EventTop';
import { motion } from 'framer-motion';

// eslint-disable-next-line no-unused-vars
const scaleVariants = {
  animate: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

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

const EventList = () => {
  const [monthFilter, setMonthFilter] = useState('All Months');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredEvents = useMemo(() => {
    return UPCOMING_EVENTS.filter(event => {
      const monthMatch =
        monthFilter === 'All Months' || event.month === monthFilter;
      const typeMatch =
        typeFilter === 'All Types' || event.category === typeFilter;
      return monthMatch && typeMatch;
    });
  }, [monthFilter, typeFilter]);

  return (
    <Layout>
      <motion.div
        initial={{ x: -40 }}
        // animate={{ x: 0 }}
        variants={slideVariants}
        animate={slideVariants.animate}
        // exit={{ x: 50 }}
        // transition={{
        //   duration: 0.8,
        //   ease: [0.6, -0.05, 0.01, 0.99],
        // }}
      >
        <EventTop />
        <section className='bg-white pt-32 md:pt-64 pb-24 px-4 mt-16'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8'>
              <h2 className='text-4xl md:text-6xl font-black text-[#111827] tracking-tighter'>
                Upcoming Events
              </h2>

              <div className='flex flex-wrap items-center gap-3 w-full lg:w-auto'>
                {/* Month Selector Styled to Match Image */}
                <div className='relative flex-grow sm:flex-initial'>
                  <select
                    value={monthFilter}
                    onChange={e => setMonthFilter(e.target.value)}
                    className='appearance-none bg-[#F3F4F6] border-none text-gray-700 text-xs font-bold rounded-2xl px-6 py-4 pr-12 focus:ring-2 focus:ring-orange-500/20 outline-none w-full cursor-pointer transition-all'
                  >
                    <option value='All Months'>Month</option>
                    {MONTHS.map(m => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <ICONS.ChevronDown
                    className='absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none'
                    size={16}
                  />
                </div>

                {/* Event Type Selector Styled to Match Image */}
                <div className='relative flex-grow sm:flex-initial'>
                  <select
                    value={typeFilter}
                    onChange={e => setTypeFilter(e.target.value)}
                    className='appearance-none bg-[#F3F4F6] border-none text-gray-700 text-xs font-bold rounded-2xl px-6 py-4 pr-12 focus:ring-2 focus:ring-orange-500/20 outline-none w-full cursor-pointer transition-all'
                  >
                    <option value='All Types'>Event Type</option>
                    {EVENT_TYPES.map(t => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <ICONS.ChevronDown
                    className='absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none'
                    size={16}
                  />
                </div>
              </div>
            </div>

            {filteredEvents.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {filteredEvents.slice(0, visibleCount).map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className='text-center py-20 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200'>
                <p className='text-gray-500 font-medium'>
                  No events found for the selected filters.
                </p>
                <button
                  onClick={() => {
                    setMonthFilter('All Months');
                    setTypeFilter('All Types');
                  }}
                  className='mt-4 text-[#F97316] font-black tracking-widest hover:underline uppercase text-xs'
                >
                  Clear all filters
                </button>
              </div>
            )}

            {filteredEvents.length > visibleCount && (
              <div className='mt-20 text-center'>
                <button
                  onClick={() => setVisibleCount(prev => prev + 3)}
                  className='bg-white border-2 border-gray-100 text-gray-900 px-16 py-5 rounded-[24px] text-xs font-black tracking-[0.2em] hover:bg-gray-50 transition-all uppercase shadow-sm'
                >
                  LOAD MORE
                </button>
              </div>
            )}
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default EventList;
