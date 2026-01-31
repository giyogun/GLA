import pray from '~/assets/images/pray.jpg';
import give from '~/assets/images/give.jpg';
import serve from '~/assets/images/serve.jpg';
import PropTypes from 'prop-types';

const MissionCard = ({ title, description, imageUrl }) => (
  <div className='relative h-[400px] group overflow-hidden rounded-3xl shadow-md'>
    <div
      className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url('${imageUrl}')`,
      }}
    />
    <div className='absolute inset-0 flex flex-col justify-end p-8 text-white'>
      <h3 className='text-2xl font-bold mb-3'>{title}</h3>
      <p className='text-sm text-zinc-200 leading-relaxed font-medium'>
        {description}
      </p>
    </div>
  </div>
);
MissionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const BePart = () => {
  const cards = [
    {
      title: 'Pray',
      description:
        'Stand with us in prayer for the people we serve, our mission partners, and our volunteers.',
      imageUrl: pray,
    },
    {
      title: 'Give',
      description:
        'Your financial support helps fund outreach programs, missions, and emergency relief efforts.',
      imageUrl: give,
    },
    {
      title: 'Serve',
      description:
        'Join an outreach team and participate in community visits, food distribution, or mission trips.',
      imageUrl: serve,
    },
  ];

  return (
    <section className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <h2 className='text-4xl font-extrabold text-zinc-900 mb-6'>
          Be Part of the Mission
        </h2>
        <p className='text-lg text-zinc-600 mb-16 max-w-2xl mx-auto font-medium'>
          There are many ways to participate in what God is doing through our
          missions and outreach.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {cards.map((card, idx) => (
            <MissionCard key={idx} {...card} />
          ))}
        </div>

        <button className='bg-[#FF6B00] hover:bg-[#e65a00] text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg'>
          Support Missions
        </button>
      </div>
    </section>
  );
};

export default BePart;
