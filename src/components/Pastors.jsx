import { Button } from './Button';
import pastors from '~/assets/images/daddoMammo.png';
import MotionWrap from '~/wrapper/MotionWrap';

const Pastors = () => {
  return (
    <section className='pt-4 pb-0 bg-[#EFD7C9] w-full relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row gap-8 lg:gap-12 items-end'>
          <div className='order-2 md:order-1 space-y-4 flex-1 pb-6 md:pb-10 lg:pb-14'>
            <h2 className='text-3xl md:text-5xl font-bold text-slate-900 leading-tight'>
              A Message from Our <br />
              <span className='relative inline-block'>Beloved Pastors</span>
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

          <div className='order-1 md:order-2 flex-1 w-full md:w-auto flex justify-center md:justify-end items-end overflow-hidden'>
            <div className='relative w-full max-w-[420px] overflow-hidden'>
              <img
                src={pastors}
                alt='Pastors'
                className='w-full h-auto block scale-[1.35] origin-top'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Pastors, '');
