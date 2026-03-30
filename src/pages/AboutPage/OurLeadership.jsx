import { LEADERSHIP } from '~/const/constants';

const OurLeadership = () => {
  return (
    <section className='py-20 md:py-28 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16'>
          Our Leadership
        </h2>
        <div className='flex flex-wrap justify-center gap-10 lg:gap-16'>
          {LEADERSHIP.map(leader => (
            <div key={leader.id} className='w-full max-w-[280px]'>
              <div className='relative rounded-3xl overflow-hidden shadow-lg group'>
                <img
                  src={leader.image}
                  alt={leader.name}
                  className='w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500'
                />
                {/* Dark gradient overlay at bottom */}
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20'>
                  <h3 className='text-white text-lg font-bold'>
                    {leader.name}
                  </h3>
                  <p className='text-gray-300 text-sm mt-1'>{leader.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
