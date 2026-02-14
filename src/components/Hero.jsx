import { Button } from './Button';
import background from '~/assets/images/heroBg.jpg';

export const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center bg-black overflow-hidden pt-20'>
      {/* Background Image */}
      <div className='absolute inset-x-0 top-[66px] bottom-0 z-0'>
        <img
          src={background}
          alt='Pastor Preaching'
          className='w-full h-full object-cover object-center'
        />
        {/* Gradient Overlay - Dark on left, transparent on right to show the man */}
        <div className='absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10' />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full'>
        <div className='max-w-3xl'>
          {/* Typography */}
          <div className='mb-8'>
            <span className='font-script text-primary text-4.5xl md:text-4xl block mb-4 rotate-[-3deg]'>
              Welcome to church
            </span>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight'>
              Worship, Love, and <br />
              Transforming Word
            </h1>
          </div>

          <p className='text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mb-10'>
            Join God Life Assembly every Sunday as we grow together in faith,
            power, and the fullness of God&apos;s Word
          </p>

          {/* Buttons */}
          <div className='flex flex-wrap gap-5'>
            <a href='https://www.youtube.com/@theglajos/streams' target='blank'>
              <Button
                size='lg'
                className='px-10 py-4 rounded-xl text-sm md:text-base font-bold uppercase tracking-wider bg-[#F97316] hover:bg-[#EA580C] border-none shadow-none'
              >
                WATCH LIVE
              </Button>
            </a>
            {/* TODO: Wire up VISIT US button — currently triggers nothing */}
            <button className='px-10 py-4 rounded-xl text-sm md:text-base font-bold uppercase tracking-wider text-white border-2 border-white/30 hover:bg-white hover:text-black transition-all duration-300'>
              VISIT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
