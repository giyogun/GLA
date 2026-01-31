export function PrayerCTA() {
  return (
    <section className='bg-white pt-32 md:pt-64 pb-24 px-4 mt-[24rem]'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8'>
          <div className='max-w-5xl mx-auto rounded-[3rem] overflow-hidden bg-[#121212] relative min-h-[300px] flex items-center px-8 md:px-16 py-12'>
            {/* Background Decorative Element */}
            <div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none'></div>
            <div className='absolute -bottom-24 -left-24 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none'></div>

            <div className='relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-8'>
              <div className='max-w-xl'>
                <h2 className='text-3xl md:text-5xl font-bold text-white mb-4 leading-tight'>
                  Need Someone to <span className='text-orange-500'>Pray</span>{' '}
                  With You?
                </h2>
                <p className='text-gray-400 text-base md:text-lg leading-relaxed'>
                  Our prayer team is available to stand with you in faith when
                  you share your prayer request.
                </p>
              </div>

              <button className='whitespace-nowrap bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-xl shadow-orange-900/20 active:scale-95 text-sm md:text-base tracking-wide'>
                Submit a Prayer Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
