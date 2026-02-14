import { ICONS } from '~/const/constants.jsx';
import background from '~/assets/images/heroBg.jpg';
import eventPic from '~/assets/images/eventPic.jpg';

const EventTop = () => {
  console.log(background, 'back');
  return (
    <section
      className='relative bg-neutral-900 pt-20 mb-32 min-h-[800px]
            sm:min-h-[150px]
            md:min-h-[250px]
            lg:min-h-[640px]
           '
    >
      {/* Main Background Image - Speaker */}
      <div className='absolute inset-x-0 top-[-61px] bottom-0 z-0'>
        <img
          src={background}
          alt='Pastor Preaching'
          className='w-full h-full object-top object-cover '
        />
        {/* Gradient Overlay - Dark on left, transparent on right to show the man */}
        <div className='absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10' />
      </div>
      <div
        className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'
        // style={{ marginTop: '10rem' }}
      >
        <div
          className=' flex flex-col items-center justify-center'
          style={{ marginTop: '3rem' }}
        >
          {/* Typography */}
          <div className='mb-8'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight'>
              Stay Connected
            </h1>
          </div>

          <p className='text-gray-300 text-md md:text-lg leading-relaxed max-w-xl mb-10 text-center'>
            Discover upcoming conferences, worship nights, and community
            outreach events
          </p>
        </div>
      </div>

      {/* Hero Text Content */}
      {/* <div className='relative z-20 text-center text-white max-w-4xl mx-auto mb-20'>
        <h1 className='text-5xl md:text-7xl font-black mb-6 tracking-tight'>
          Stay Connected
        </h1>
        <p className='text-sm md:text-base text-neutral-300 font-medium tracking-wide uppercase max-w-xl mx-auto'>
          Discover upcoming conferences, worship nights, and community outreach
          events
        </p>
      </div> */}

      {/* The Large Overlapping Card Container */}
      <div
        className='absolute left-1/2 -bottom-24 md:-bottom-40 -translate-x-1/2 w-full max-w-7xl px-4 '
        style={{ top: '21rem' }}
      >
        <div className='relative rounded-[40px] overflow-hidden shadow-2xl aspect-[16/10] md:aspect-[21/9]'>
          {/* Main Background for the Card (Church Service) */}
          <img src={eventPic} className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-black/40'></div>

          {/* The Orange Featured Overlay Card */}
          <div className='absolute left-4 top-1/2 -translate-y-1/2 md:left-8 w-[75%] md:w-[260px] bg-[#F97316] p-5 md:p-6 rounded-2xl text-white shadow-xl'>
            <span className='text-[9px] md:text-[10px] font-bold opacity-90 uppercase tracking-[0.15em] block mb-2'>
              COMING NEXT ...
            </span>

            <h2 className='text-lg md:text-2xl font-black mb-3 leading-tight'>
              Faith in the faith of God
            </h2>

            <div className='flex items-center gap-2 text-[11px] md:text-xs mb-4 font-semibold'>
              <ICONS.Calendar size={14} />
              <span>November 24th 2025</span>
            </div>

            <button className='bg-white text-gray-900 px-6 py-2.5 rounded-xl text-[10px] font-black hover:bg-neutral-100 transition-all uppercase tracking-wider shadow'>
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTop;
