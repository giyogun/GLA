import background from '~/assets/images/MissionsBg.jpg';

const Hero = () => {
  return (
    <section className='relative h-screen min-h-[600px] flex items-center overflow-hidden'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background})`,
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-6 w-full'>
        <div className='max-w-2xl'>
          <h1 className='text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6'>
            Reaching People.
            <br />
            Sharing Christ.
          </h1>
          <p className='text-lg md:text-xl text-zinc-200 mb-8 max-w-xl font-medium leading-relaxed'>
            We serve real people, meet practical needs, and proclaim the Gospel
            in tangible ways.
          </p>
          <button className='bg-[#FF6B00] hover:bg-[#e65a00] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg'>
            Support a Mission
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
