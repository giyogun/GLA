import { ArrowRight } from 'lucide-react';
import projectImage from '~/assets/images/yingiMissions.jpg';

const FeedYingi = () => {
  return (
    <section className='py-24 bg-zinc-50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Content Left */}
          <div className='flex-1 text-left'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-zinc-900 mb-8'>
              Feed Yingi
              <br />
              Children
            </h2>
            <p className='text-lg text-zinc-600 mb-10 leading-relaxed font-medium max-w-lg'>
              Feed Yingi Children is an outreach initiative focused on providing
              consistent nutritional support to vulnerable children in Yingi and
              surrounding communities. Through this project, we respond to
              meeting physical needs while offering spiritual care and hope.
            </p>
            <div className='flex flex-wrap items-center gap-6'>
              <button className='bg-[#FF6B00] hover:bg-[#e65a00] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-md'>
                Support Missions
              </button>
              <button className='flex items-center gap-2 text-zinc-900 font-bold hover:text-[#FF6B00] transition-colors group'>
                More Details
                <ArrowRight
                  size={20}
                  className='group-hover:translate-x-1 transition-transform'
                />
              </button>
            </div>
          </div>

          {/* Visual Right (The donation card/image) */}
          <div className='flex-1 w-full max-w-lg'>
            <div className='relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white border border-zinc-200'>
              {/* Simulating the card design with overlay since we don't have the actual SVG/Image */}
              <img
                src={projectImage}
                alt='Feed Yingi Children'
                className='w-full h-full object-contain filter grayscale-[0.2]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedYingi;
