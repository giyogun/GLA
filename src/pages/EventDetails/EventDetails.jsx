import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '~/wrapper/Layout';
import { UPCOMING_EVENTS } from '~/const/constants';
import { Button } from '~/components/Button';
import LocationFinder from '~/components/LocationFinder';

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

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = UPCOMING_EVENTS.find(e => e.id === id);

  if (!event) {
    return (
      <Layout>
        <div className='min-h-screen flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-slate-900 mb-4'>
              Event Not Found
            </h1>
            <p className='text-gray-500 mb-8'>
              The event you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button onClick={() => navigate('/events')}>Back to Events</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div
        initial={{ x: -40 }}
        variants={slideVariants}
        animate={slideVariants.animate}
      >
        {/* Hero Banner */}
        <section className='bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <button
              onClick={() => navigate('/events')}
              className='flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group'
            >
              <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
              <span className='font-medium'>Back</span>
            </button>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight text-center'>
              {event.title}
            </h1>
          </div>
        </section>

        {/* Event Info Section */}
        <section className='py-16 md:py-24 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row gap-10 items-start'>
              {/* Event Image */}
              <div className='flex-1 w-full'>
                <div className='rounded-3xl overflow-hidden shadow-lg aspect-[4/3]'>
                  <img
                    src={event.image}
                    alt={event.title}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              {/* Event Details Card */}
              <div className='flex-1 w-full bg-gray-50 rounded-3xl p-8 md:p-10'>
                <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight'>
                  {event.title}
                </h2>
                <p className='text-gray-500 text-base leading-relaxed mb-8'>
                  {event.description}
                </p>

                <div className='space-y-5 mb-10'>
                  <div className='flex items-start gap-4'>
                    <span className='font-bold text-slate-900 text-sm min-w-[70px]'>
                      Date:
                    </span>
                    <div className='text-sm text-gray-600'>
                      <p>{event.startDate}</p>
                      <p>{event.endDate}</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <span className='font-bold text-slate-900 text-sm min-w-[70px]'>
                      Location
                    </span>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                      {event.location ? (
                        <>
                          <MapPin className='w-4 h-4 text-gray-400' />
                          <span>{event.location}</span>
                        </>
                      ) : (
                        <span>-</span>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  size='lg'
                  className='uppercase text-xs tracking-[0.15em] font-black'
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        {event.speakers && event.speakers.length > 0 && (
          <section className='py-16 md:py-24 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight'>
                Speakers
              </h2>
              <div className='flex flex-wrap gap-8'>
                {event.speakers.map((speaker, index) => (
                  <div
                    key={`${speaker.name}-${index}`}
                    className='w-full sm:w-[260px]'
                  >
                    <div className='relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg group'>
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
                      <div className='absolute bottom-0 left-0 right-0 p-5'>
                        <h3 className='text-white font-bold text-lg leading-tight'>
                          {speaker.name}
                        </h3>
                        <p className='text-white/70 text-xs mt-1 leading-snug'>
                          {speaker.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Location / Fellowship Section */}
        <LocationFinder />
      </motion.div>
    </Layout>
  );
};

export default EventDetails;
