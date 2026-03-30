import { ArrowRight, ArrowLeft, Phone, Mail } from 'lucide-react';
import locationImage from '~/assets/images/locationFinder1.jpg';
import MotionWrap from '~/wrapper/MotionWrap';

const LocationFinder = () => {
  return (
    <section className='py-24 bg-[#F9F9F9]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-4 pl-4 lg:pl-12'>
            <div>
              <p className='font-script text-3xl md:text-4xl text-primary mb-2'>
                Locate Church
              </p>
              <h2
                className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight '
                style={{
                  fontSize: '62px',
                  lineHeight: '72px',
                  width: '100%',
                }}
              >
                New here? <br />
                <span className='text-primary'>Fellowship</span> with Us
              </h2>
            </div>

            <div className='space-y-6 pt-2'>
              <h3 className='text-xl font-bold text-slate-900'>
                God-Life Assembly Jos
              </h3>
              <p className='text-gray-600 max-w-sm leading-relaxed text-sm'>
                Raising a Pure Breed.
              </p>

              <div className='space-y-3 text-sm font-semibold text-slate-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center'>
                    <Phone className='w-3 h-3' />
                  </div>
                  {/* TODO: Replace placeholder phone number with real contact number */}
                  <span>234 800 000 0000</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center'>
                    <Mail className='w-3 h-3' />
                  </div>
                  {/* TODO: Replace placeholder email with real contact email */}
                  <span>support@godlifeassembly.com</span>
                </div>
              </div>
            </div>

            {/* TODO: Wire up prev/next arrow buttons for location carousel — currently trigger nothing */}
            <div className='flex gap-4 pt-6'>
              <button className='w-12 h-12 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-100 transition-colors'>
                <ArrowLeft className='w-5 h-5 text-slate-900' />
              </button>
              <button className='w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary transition-colors'>
                <ArrowRight className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative flex justify-end'>
            <div className='w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 relative'>
              <img
                src={locationImage}
                alt='Woman Speaking at Podium'
                className='w-full h-full object-cover opacity-60 scale-x-[-1]'
              />
              {/* Dark overlay for atmosphere if needed, but image in screenshot is clear */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(LocationFinder, '');
