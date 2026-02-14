import { Icons } from '~/const/constants';

const ResourceCard = ({ resource }) => {
  return (
    <div className='group cursor-pointer'>
      <div className='relative overflow-hidden rounded-2xl aspect-square'>
        <img
          src={resource.image}
          alt={resource.title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6'>
          <div className='mb-2'>
            {/* TODO: Replace placeholder logo with real ministry/resource logo */}
            <img
              src='https://picsum.photos/seed/logo/40/40'
              className='w-8 h-8 rounded-full border border-white/50 mb-2'
              alt='ministry logo'
            />
          </div>
          {/* TODO: Replace hardcoded text with dynamic resource data */}
          <h4 className='text-white font-bold text-lg leading-tight uppercase tracking-tight'>
            BY FAITH!
          </h4>
          <p className='text-white/80 text-xs mt-1 mb-4'>
            AND WILL SAY OF THE LORD
          </p>

          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-white font-bold text-sm'>{resource.title}</h3>
              <p className='text-white/60 text-[10px] mt-0.5'>
                {resource.category} • {resource.speaker}
              </p>
            </div>
            <div className='bg-primary p-2 rounded-full text-white'>
              <Icons.SmallPlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
