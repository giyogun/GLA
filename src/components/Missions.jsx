import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '~/const/constants';
import MotionWrap from '~/wrapper/MotionWrap';

const Missions = () => {
  return (
    <section className='py-24 bg-[#F8CCB0] rounded-[2.5rem] w-[80vw]'>
      {' '}
      {/* Peach/Orange background */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight'>
            Advancing the Kingdom <br /> and Reaching Nations
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {PROJECTS.map(project => (
            <div
              key={project.id}
              className='group relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl aspect-[4/5] cursor-pointer'
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className='absolute inset-0 w-full h-full object-contain grayscale-[20%] contrast-125'
              />

              {/* Flyer Overlay Content - Simulating the design in screenshot */}
              <div className='absolute inset-0 p-8 flex flex-col'>
                {/* Top Graphics area - simulating the text on image */}
                <div className='mt-8'>
                  <div className='w-12 h-12 bg-orange-100 rounded-full mb-4 flex items-center justify-center'>
                    <span className='text-xs font-bold text-primary'>GLA</span>
                  </div>
                  <h3 className='text-4xl font-bold text-[#8B4513] leading-none mb-1'>
                    {project.title.split(' ')[0]} <br />
                    {project.title.split(' ')[1]} <br />
                    {project.title.split(' ')[2]}
                  </h3>
                </div>
              </div>

              {/* Bottom Dark Overlay */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-24 pb-8 px-8 text-white'>
                <h3 className='text-xl font-bold mb-2'>Feed Yingi Project</h3>
                <p className='text-gray-300 text-xs leading-relaxed max-w-[85%]'>
                  {project.description}
                </p>
                <div className='absolute right-6 bottom-8'>
                  <div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors'>
                    <ArrowRight className='w-4 h-4 text-white' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          {/* TODO: Wire up DONATE button — navigate to /give or open donation form */}
          <Button className='bg-[#EA580C] text-white px-12 py-3 rounded-xl font-bold hover:bg-[#C2410C] shadow-lg shadow-orange-900/20 text-sm tracking-wide'>
            DONATE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Missions, '');
// export default Missions;
