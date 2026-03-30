import yingiImage from '~/assets/images/yingiMissions.jpg';

const WhoWeAre = () => {
  return (
    <section className='py-20 md:py-28 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Text */}
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-8'>
              Who We Are
            </h2>
            <div className='space-y-5 text-gray-600 leading-relaxed'>
              <p>
                The God-Life Assembly International is a Spirit-led Christian
                ministry established to teach the uncompromised Word of God and
                help believers grow into maturity in Christ.
              </p>
              <p>
                We exist to raise men and women who understand their identity in
                Christ, live out their faith boldly, and impact their
                communities through love, service, and obedience to God&apos;s
                calling.
              </p>
              <p>
                From our local congregation in Jos to our growing online
                community around the world, GLA is a place where faith is
                nurtured, purpose is discovered, and lives are transformed by
                the power of God&apos;s Word.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className='flex justify-center md:justify-end'>
            <div className='w-full max-w-md rounded-3xl overflow-hidden shadow-xl'>
              <img
                src={yingiImage}
                alt='Feed Yingi Children initiative'
                className='w-full h-full object-cover aspect-[4/5]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
