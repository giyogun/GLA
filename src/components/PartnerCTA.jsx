import { Button } from './Button';
import MotionWrap from '~/wrapper/MotionWrap';

const PartnerCTA = () => {
  return (
    <section className='relative h-[80vh] flex items-center justify-center overflow-hidden w-full'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        {/* TODO: Replace placeholder image with real worship/church photo */}
        <img
          src='https://picsum.photos/id/441/1920/1080'
          alt='Hands raised in worship'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/70' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center'>
        <div className='text-center max-w-3xl'>
          <h2
            className='text-3xl md:text-5xl font-bold text-white mb-6'
            style={{
              fontSize: '62px',
              lineHeight: '72px',
            }}
          >
            Partner with us in <br />
            <span className='text-gray-200'>Kingdom Impact</span>
          </h2>
          <p className='text-gray-300 mb-8 leading-relaxed'>
            Giving is an act of worship and obedience. Every seed you sow helps
            advance God’s work, meet needs, and bring hope to lives near and
            far.
          </p>
          {/* TODO: Wire up GIVE NOW button — navigate to /give or open giving form */}
          <Button size='lg' className='px-10'>
            GIVE NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(PartnerCTA, '');
