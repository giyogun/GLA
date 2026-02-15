import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RESOURCES } from '~/const/constants';
import { Button } from '~/components/Button';
import MotionWrap from '~/wrapper/MotionWrap';

const Resources = () => {
  const navigate = useNavigate();

  return (
    <section className='py-20 bg-slate-50 w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-end mb-12'>
          <div className=''>
            <h2
              className=' font-bold text-slate-900 leading-tight'
              style={{
                fontSize: '62px',
                lineHeight: '72px',
                width: '100%',
              }}
            >
              Faith <span className='text-primary'>Resources</span> for <br />
              Every Season of Life
            </h2>
            <p
              className='font-semi text-gray-600 mt-4 text-sm max-w-xl'
              style={{
                fontSize: '18px',
                lineHeight: '28px',
              }}
            >
              Explore sermons, devotionals, audio guides, and teaching materials
              to support and deepen your relationship with God.
            </p>
          </div>
          {RESOURCES.length > 3 && (
            <div className='hidden md:flex gap-2'>
              <button className='p-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors'>
                <ArrowLeft className='w-5 h-5' />
              </button>
              <button className='p-2 rounded-full bg-black text-white hover:bg-primary transition-colors'>
                <ArrowRight className='w-5 h-5' />
              </button>
            </div>
          )}
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {RESOURCES.map(resource => (
            <div
              key={resource.id}
              className='relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300'
              onClick={() => {
                if (resource.link) {
                  window.open(resource.link, '_blank');
                }
              }}
            >
              <img
                src={resource.image}
                alt={resource.title}
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />

              {/* Overlay styles based on type */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-8
                ${
                  resource.type === 'dark'
                    ? 'bg-gradient-to-t from-red-900/90 to-red-900/40'
                    : ''
                }
                ${resource.type === 'light' ? 'bg-white/90' : ''}
                ${
                  resource.type === 'image'
                    ? 'bg-gradient-to-t from-black/80 via-transparent to-transparent'
                    : ''
                }
              `}
              >
                <div
                  className={`${
                    resource.type === 'light' ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                      resource.type === 'light'
                        ? 'text-primary'
                        : 'text-gray-300'
                    }`}
                  >
                    {resource.subtitle}
                  </p>
                  <h3
                    className={`text-2xl font-bold leading-tight ${
                      resource.type === 'light' ? 'font-serif text-3xl' : ''
                    }`}
                  >
                    {resource.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-10'>
          <Button size='lg' onClick={() => navigate('/resources')}>
            View All Resources <ArrowRight className='w-5 h-5 ml-2' />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Resources, '');
