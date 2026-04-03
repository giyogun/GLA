import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import testimonial from '~/assets/images/testimonial1.jpg';
import { TESTIMONIALS } from '~/const/constants';
import MotionWrap from '~/wrapper/MotionWrap';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const { quote, name, location } = TESTIMONIALS[current];

  return (
    <section className='relative h-[80vh] bg-slate-900 flex items-center overflow-hidden w-full'>
      {/* Background Image */}
      <img
        src={testimonial}
        alt='Happy Church Member'
        className='absolute inset-0 w-full h-full object-cover opacity-80 scale-x-[-1] mix-blend-overlay'
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
        <div className='max-w-xl'>
          <div className='bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl'>
            <Quote className='w-12 h-12 text-primary mb-6 fill-current' />

            <blockquote className='text-xl md:text-2xl text-white font-medium leading-relaxed mb-8'>
              {quote}
            </blockquote>

            <div className='flex items-center justify-between'>
              <div>
                <cite className='not-italic text-white font-bold block'>
                  {name}
                </cite>
                <span className='text-primary text-sm'>{location}</span>
              </div>

              <div className='flex gap-2'>
                <button
                  onClick={handlePrev}
                  className='p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-colors'
                >
                  <ArrowLeft className='w-5 h-5' />
                </button>
                <button
                  onClick={handleNext}
                  className='p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-colors'
                >
                  <ArrowRight className='w-5 h-5' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Testimonials, '');
// export default Testimonials;
