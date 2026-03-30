import { Button } from '~/components/Button';
import { useNavigate } from 'react-router-dom';

const WelcomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className='py-20 md:py-24 bg-gray-100'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-black rounded-[2.5rem] py-16 md:py-20 px-6 md:px-12 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            You&apos;re Welcome Here
          </h2>
          <p className='text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto'>
            Whether you are exploring faith, seeking a church home, or looking
            to grow spiritually, we invite you to join us at The God-Life
            Assembly International.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            {/* TODO: Wire up Plan Your Visit button — currently triggers nothing */}
            <Button
              size='lg'
              className='rounded-xl text-sm font-bold uppercase tracking-wider'
            >
              Plan Your Visit
            </Button>
            <button
              className='px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white border-2 border-white/40 hover:bg-white hover:text-black transition-all duration-300'
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCTA;
