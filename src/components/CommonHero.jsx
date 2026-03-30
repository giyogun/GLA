import background from '~/assets/images/heroBg.jpg';
import PropTypes from 'prop-types';

const CommonHero = ({ title, subtitle }) => {
  return (
    <>
      <div className='absolute inset-x-0 top-[-61px] bottom-0 z-0'>
        <img
          src={background}
          alt='Pastor Preaching'
          className='w-full h-full object-top object-cover '
          style={{ height: '800px' }}
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
          style={{ marginTop: '15rem' }}
        >
          <div className='mb-8'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight'>
              {title}
            </h1>
          </div>
          <p className='text-gray-300 text-md md:text-lg leading-relaxed max-w-xl mb-10 text-center'>
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

CommonHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default CommonHero;
