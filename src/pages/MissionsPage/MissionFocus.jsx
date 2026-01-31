import { useEffect, useRef, useState } from 'react';

const MissionFocus = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1;
    const scrollInterval = setInterval(() => {
      if (!isHovering) {
        const currentScroll = scrollContainer.scrollLeft;
        const maxScroll =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // Continue scrolling from current position
        if (currentScroll >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = currentScroll + scrollSpeed;
        }
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isHovering]);

  return (
    <section className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16 max-w-4xl mx-auto'>
          <h2 className='text-4xl font-extrabold text-zinc-900 mb-6'>
            Our Mission Focus
          </h2>
          <p className='text-lg text-zinc-600 leading-relaxed font-medium'>
            At The God-Life Assembly International, outreach is not a program —
            it is part of our calling. We believe the church should be present
            where there is need, hope should be visible where there is pain, and
            faith should be practical in everyday life.
          </p>
        </div>

        {/* Horizontal Gallery */}
        <div
          ref={scrollRef}
          className='overflow-x-auto scrollbar-hide'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className='flex gap-6 pb-4'>
            {/* Large Images */}
            <div className='flex-shrink-0 w-[350px] md:w-[500px] h-[300px] md:h-[400px]'>
              <img
                src='https://picsum.photos/id/102/800/600'
                alt='Mission Gathering'
                className='w-full h-full object-cover rounded-3xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer'
              />
            </div>
            <div className='flex-shrink-0 w-[350px] md:w-[500px] h-[300px] md:h-[400px]'>
              <img
                src='https://picsum.photos/id/124/800/600'
                alt='Prayer Meeting'
                className='w-full h-full object-cover rounded-3xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer'
              />
            </div>

            {/* Smaller Images */}
            <div className='flex-shrink-0 w-[280px] md:w-[380px] h-[300px] md:h-[400px]'>
              <img
                src='https://picsum.photos/id/111/400/300'
                alt='Local Outreach'
                className='w-full h-full object-cover rounded-3xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer'
              />
            </div>
            <div className='flex-shrink-0 w-[280px] md:w-[380px] h-[300px] md:h-[400px]'>
              <img
                src='https://picsum.photos/id/158/400/300'
                alt='Community Worship'
                className='w-full h-full object-cover rounded-3xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer'
              />
            </div>
            <div className='flex-shrink-0 w-[280px] md:w-[380px] h-[300px] md:h-[400px]'>
              <img
                src='https://picsum.photos/id/202/400/300'
                alt='Group Photo'
                className='w-full h-full object-cover rounded-3xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionFocus;
