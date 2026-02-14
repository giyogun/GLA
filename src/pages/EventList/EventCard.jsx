import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventCard = ({ event }) => {
  return (
    <Link
      to={`/events/${event.id}`}
      className='bg-neutral-900 rounded-3xl overflow-hidden flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
    >
      <div className='relative h-56 md:h-64 overflow-hidden'>
        <img
          src={event.image}
          alt={event.title}
          className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
        />
        <div className='absolute top-4 right-4 bg-white rounded-lg p-2 text-center min-w-[3.5rem] shadow-lg'>
          <span className='block text-xl font-bold text-slate-900 leading-none'>
            {event.day}
          </span>
          <span className='block text-xs font-bold text-gray-500 uppercase'>
            {event.month}
          </span>
        </div>
      </div>

      <div className='p-6 md:p-8 flex flex-col flex-grow text-white'>
        <h3 className='text-xl font-bold mb-1 line-clamp-1'>{event.title}</h3>
        <p className='text-xs text-orange-400 font-medium mb-4'>
          {event.location}
        </p>
        <p className='text-sm text-neutral-400 leading-relaxed mb-8 flex-grow line-clamp-3'>
          {event.description}
        </p>

        <span className='self-start text-[10px] font-black tracking-[0.2em] text-white/90 hover:text-orange-500 transition-colors flex items-center gap-2 group/btn border-2 border-orange-500 p-2 rounded-2xl'>
          Register to attend
          <span className='group-hover/btn:translate-x-1 transition-transform'>
            →
          </span>
        </span>
      </div>
    </Link>
  );
};

export default EventCard;

// props validation
EventCard.propTypes = {
  event: PropTypes.object.isRequired,
};
