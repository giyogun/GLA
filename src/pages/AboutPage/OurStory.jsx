import worship from '~/assets/images/worship_1.jpg';

const OurStory = () => {
  return (
    <section className='py-20 md:py-28 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Text */}
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-8'>
              Our Story
            </h2>
            <div className='space-y-5 text-gray-600 leading-relaxed'>
              <p>
                The God-Life Assembly International began with a simple yet
                powerful vision — to teach God&apos;s Word clearly and raise
                believers who live out their faith with purpose.
              </p>
              <p>
                What started as a small gathering of believers has grown into a
                thriving church community committed to worship, discipleship,
                and outreach. Over the years, GLA has become a place where
                people encounter God, experience spiritual growth, and build
                meaningful relationships within a supportive faith family.
              </p>
              <p>
                Through consistent teaching, prayer, worship, and community
                service, the church continues to expand its impact both locally
                and globally.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className='flex justify-center md:justify-end'>
            <div className='w-full max-w-md rounded-3xl overflow-hidden shadow-xl'>
              <img
                src={worship}
                alt='Pastor preaching'
                className='w-full h-full object-cover aspect-[4/5]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
