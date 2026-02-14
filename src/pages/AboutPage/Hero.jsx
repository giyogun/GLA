import { Button } from '~/components/Button';
import background from '~/assets/images/aboutUsHero.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className='relative  sm:min-h-[250px]
            md:min-h-[550px]
            lg:min-h-[740px] flex items-center bg-black overflow-hidden pt-20'
    >
      {/* Background Image */}
      <div className='absolute inset-x-0 top-0 bottom-0 z-0'>
        <img
          src={background}
          alt='Church gathering'
          className='w-full h-full object-cover object-center'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10' />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-24'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6'>
            About The God-Life
            <br />
            Assembly International
          </h1>
          <p className='text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mb-10'>
            A Christ-centered church committed to teaching God&apos;s Word,
            transforming lives, and raising believers to walk in the fullness of
            the God-life.
          </p>
          <Button
            size='lg'
            className='rounded-xl text-sm md:text-base font-bold uppercase tracking-wider'
            onClick={() => navigate('/outreach')}
          >
            Support a Mission
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
