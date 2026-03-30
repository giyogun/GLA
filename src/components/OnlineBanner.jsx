import { Button } from './Button';
import MotionWrap from '~/wrapper/MotionWrap';

const OnlineBanner = () => {
  return (
    <section className='py-12 bg-white w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl'>
          {/* Abstract Background Elements */}
          <div className='absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none'></div>
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none'></div>

          <div className='relative z-10 max-w-2xl text-center md:text-left'>
            <h2
              className='text-3xl md:text-4xl font-bold mb-4'
              style={{
                fontSize: '62px',
                lineHeight: '72px',
              }}
            >
              Join the <span className='text-primary'>Online</span> <br />
              Church Family
            </h2>
            <p
              className='text-gray-400'
              style={{
                fontSize: '18px',
                lineHeight: '28px',
              }}
            >
              Grow and connect to a global community of believers walking in
              faith and purpose.
            </p>
          </div>

          <div className='relative z-10 text-center'>
            <a href='https://www.youtube.com/@theglajos/streams' target='blank'>
              <Button className='w-full md:w-auto px-8' size='lg'>
                Watch Live Now
              </Button>
            </a>
            {/* TODO: Wire up JOIN THE ONLINE FAMILY link — currently triggers nothing */}
            <div className='mt-2 text-xs text-gray-500 flex items-center justify-center gap-1 cursor-pointer hover:text-white transition-colors'>
              <span>JOIN THE ONLINE FAMILY</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(OnlineBanner, '');
