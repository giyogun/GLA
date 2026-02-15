import { Button } from './Button';
import pastors from '~/assets/images/daddoMammo.png';
import MotionWrap from '~/wrapper/MotionWrap';

const Pastors = () => {
  return (
    <section className='py-24 bg-[#EFD7C9] w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12 items-center'>
          <div className='order-2 md:order-1 space-y-6'>
            <h2 className='text-3xl md:text-5xl font-bold text-slate-900 leading-tight'>
              A Message from Our <br />
              <span className='relative inline-block'>
                Beloved Pastors
                <svg
                  className='absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40'
                  viewBox='0 0 100 10'
                  preserveAspectRatio='none'
                >
                  <path
                    d='M0 5 Q 50 10 100 5'
                    stroke='currentColor'
                    strokeWidth='8'
                    fill='none'
                  />
                </svg>
              </span>
            </h2>

            <div className='space-y-4 text-gray-700 leading-relaxed'>
              <p>
                Welcome to the God-Life Assembly. Our greatest joy is to see
                lives transformed by the Word of God and the power of the Holy
                Spirit. We believe that everyone has a divine purpose, and it is
                our mission to help you discover, grow, and walk in that
                purpose.
              </p>
              <p>
                No matter where you are in your journey of faith, you are
                welcome here. We look forward to worshipping and growing
                together with you.
              </p>
            </div>

            <div className='pt-4 text-center md:text-left'>
              {/* TODO: Wire up Meet Our Pastors button — navigate to /about or a leadership section */}
              <Button>Meet Our Pastors</Button>
            </div>
          </div>

          <div className='order-1 md:order-2 flex -ml-4'>
            <div className='w-full max-w-xl  overflow-hidden'>
              <img
                src={pastors}
                alt='Pastors'
                className='w-full h-full object-cover object-top aspect-square'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Pastors, '');
