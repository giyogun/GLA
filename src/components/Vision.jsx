import { Button } from './Button';
import image from '~/assets/images/worship_0.jpg';
import image2 from '~/assets/images/worship_1.jpg';
import image3 from '~/assets/images/worship_2.jpg';
import MotionWrap from '~/wrapper/MotionWrap';

const Vision = () => {
  const images = [image, image2, image3];
  return (
    <section className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <h2 className='font-script text-4xl md:text-5xl text-primary rotate-[-2deg]'>
            Our Vision
          </h2>
          <h3 className='text-3xl md:text-4xl font-bold text-slate-900'>
            Raising a pure breed
          </h3>
          <p className='text-gray-600 leading-relaxed pt-4'>
            The God-Life Assembly has been called to raise a pure breed of
            believers, a kingdom minded people divergent in assignments, roles
            and functions according to the distribution of grace, but unified in
            destiny pressing onward daily to be conformed to the fullness of the
            image of the Christ, a generation who will weary the Devil
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {[101, 202, 304].map((id, index) => (
            <div
              key={id}
              className={`relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] group ${
                index === 1 ? 'md:mt-16' : ''
              }`}
            >
              <img
                src={images[index]}
                alt='Worship Moment'
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
                <span className='text-white font-medium text-lg'>
                  Join the Experience
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <Button variant='primary' size='lg'>
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Vision, '');
