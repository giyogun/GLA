const FinalCTA = () => {
  return (
    <section className='py-24 bg-zinc-50'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='bg-black rounded-[40px] p-12 md:p-20 text-center text-white shadow-2xl overflow-hidden relative'>
          {/* Subtle background glow effect */}
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FF6B00]/10 blur-[120px] pointer-events-none' />

          <div className='relative z-10'>
            <h2 className='text-3xl md:text-5xl font-extrabold mb-8 leading-tight'>
              Together, We Can
              <br />
              Make a Difference
            </h2>
            <p className='text-zinc-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed font-medium'>
              Missions and outreach are not the work of a few. When we come
              together, we extend God&apos;s love further than we could alone.
            </p>
            {/* TODO: Wire up Get Involved Today button — currently triggers nothing */}
            <button className='bg-[#FF6B00] hover:bg-[#e65a00] text-white px-10 py-4 rounded-lg font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#FF6B00]/20'>
              Get Involved Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
