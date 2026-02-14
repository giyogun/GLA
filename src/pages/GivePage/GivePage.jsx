import { useState } from 'react';
import {
  Heart,
  Globe,
  Users,
  BookOpen,
  ChevronDown,
  Gift,
  Repeat,
  Shield,
  CreditCard,
  Landmark,
  Smartphone,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '~/wrapper/Layout';
import MotionWrap from '~/wrapper/MotionWrap';
import { Button } from '~/components/Button';
import giveHero from '~/assets/images/give.jpg';
import worship from '~/assets/images/worship_6.jpg';

const slideVariants = {
  animate: {
    x: [-100, 0],
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// ─── Preset Amounts ───
const AMOUNTS = [1000, 5000, 10000, 25000, 50000, 100000];

const GIVING_TYPES = [
  { label: 'Tithe', value: 'tithe' },
  { label: 'Offering', value: 'offering' },
  { label: 'Missions', value: 'missions' },
  { label: 'Building Fund', value: 'building' },
  { label: 'Welfare', value: 'welfare' },
  { label: 'Special Seed', value: 'seed' },
];

// ─── Impact Data ───
// TODO: Replace placeholder impact stats with real/verified numbers
const IMPACT_STATS = [
  {
    icon: Users,
    value: '2,500+',
    label: 'Lives Impacted Monthly',
    color: 'bg-orange-50 text-primary',
  },
  {
    icon: Globe,
    value: '12',
    label: 'Mission Fields Supported',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: BookOpen,
    value: '800+',
    label: 'Students Sponsored',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Heart,
    value: '50+',
    label: 'Families Fed Weekly',
    color: 'bg-rose-50 text-rose-600',
  },
];

// ─── Where Your Giving Goes ───
const GIVING_AREAS = [
  {
    icon: Globe,
    title: 'Global Missions',
    description:
      'Supporting missionaries and church plants across Africa and beyond, reaching the unreached with the Gospel.',
    percentage: '30%',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    description:
      "Feeding programs, welfare support, and community development initiatives that demonstrate God's love in practical ways.",
    percentage: '25%',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BookOpen,
    title: 'Discipleship & Education',
    description:
      'Bible school scholarships, leadership training, and youth development programs raising the next generation.',
    percentage: '25%',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Church Operations',
    description:
      'Maintaining our worship spaces, technology, media, and administration so the ministry runs with excellence.',
    percentage: '20%',
    color: 'from-purple-500 to-violet-500',
  },
];

// ─── FAQ Data ───
const FAQ_DATA = [
  {
    question: 'Can I set up recurring giving?',
    answer:
      'Absolutely! You can set up weekly, bi-weekly, or monthly recurring donations through our online giving portal. This helps us plan effectively and ensures consistent support for our programs.',
  },
  {
    question: 'Can I give towards a specific cause?',
    answer:
      'Yes! You can designate your gift towards Missions, Building Fund, Welfare, or any specific project. Simply select the giving type when making your donation.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, card payments (Visa, Mastercard), and mobile money. You can also give in person during any of our services.',
  },
];

// ─── Sub-components ───

const HeroSection = () => (
  <section className='relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden'>
    <div className='absolute inset-0'>
      <img
        src={giveHero}
        alt='Generosity'
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40' />
    </div>
    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32'>
      <div className='max-w-2xl'>
        <span className='inline-block bg-primary/20 text-primary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm border border-primary/30'>
          Generosity Changes Everything
        </span>
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6'>
          Give Towards
          <br />
          <span className='text-primary'>God&apos;s Work</span>
        </h1>
        <p className='text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg'>
          Every act of generosity plants a seed of hope. Your giving empowers
          lives, builds communities, and advances the Kingdom.
        </p>
        <div className='flex flex-wrap gap-4'>
          <a href='#give-now'>
            <Button
              size='lg'
              className='text-sm font-bold uppercase tracking-wider shadow-xl shadow-orange-500/20'
            >
              <Gift className='w-5 h-5 mr-2' />
              Give Now
            </Button>
          </a>
          <a href='#impact'>
            <Button
              variant='ghost'
              size='lg'
              className='text-sm font-bold uppercase tracking-wider border border-white/30 hover:bg-white/10'
            >
              See Your Impact
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ImpactSection = () => (
  <section id='impact' className='py-20 md:py-28 bg-white'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center mb-16'>
        <p className='font-script text-3xl text-primary mb-2'>
          Generosity in Action
        </p>
        <h2 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
          Your Giving Makes an Impact
        </h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
        {IMPACT_STATS.map(stat => (
          <div
            key={stat.label}
            className='text-center p-6 md:p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition-all duration-300 group'
          >
            <div
              className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}
            >
              <stat.icon className='w-7 h-7' />
            </div>
            <p className='text-3xl md:text-4xl font-black text-slate-900 mb-2'>
              {stat.value}
            </p>
            <p className='text-sm text-gray-500 font-medium'>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GiveFormSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [givingType, setGivingType] = useState('tithe');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleAmountClick = amount => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = e => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const displayAmount = customAmount || selectedAmount || 0;

  return (
    <section id='give-now' className='py-20 md:py-28 bg-[#F9F9F9]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-12 items-start'>
          {/* Left — Inspiration */}
          <div className='flex-1'>
            <p className='font-script text-3xl text-primary mb-2'>Sow a Seed</p>
            <h2 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]'>
              Give With a<br />
              <span className='text-primary'>Cheerful Heart</span>
            </h2>
            <p className='text-gray-500 text-lg leading-relaxed mb-8 max-w-md'>
              &ldquo;Each of you should give what you have decided in your heart
              to give, not reluctantly or under compulsion, for God loves a
              cheerful giver.&rdquo;
            </p>
            <p className='text-sm font-bold text-slate-900 mb-10'>
              — 2 Corinthians 9:7
            </p>

            <div className='relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl hidden lg:block'>
              <img
                src={worship}
                alt='Worship'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
              <div className='absolute bottom-6 left-6 right-6'>
                <p className='text-white font-bold text-lg'>
                  Thank you for your faithfulness
                </p>
                <p className='text-white/70 text-sm mt-1'>
                  Every gift, big or small, makes an eternal difference.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Give Form */}
          <div className='flex-1 w-full'>
            <div className='bg-white rounded-[2rem] shadow-xl p-8 md:p-10 border border-gray-100'>
              {/* Giving Type */}
              <div className='mb-8'>
                <label
                  htmlFor='giving-type'
                  className='block text-sm font-bold text-slate-900 mb-3'
                >
                  What are you giving towards?
                </label>
                <div id='giving-type' className='flex flex-wrap gap-2'>
                  {GIVING_TYPES.map(type => (
                    <button
                      key={type.value}
                      onClick={() => setGivingType(type.value)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        givingType === type.value
                          ? 'bg-primary text-white shadow-md shadow-orange-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className='mb-8'>
                <label
                  htmlFor='give-amount'
                  className='block text-sm font-bold text-slate-900 mb-3'
                >
                  Select Amount (₦)
                </label>
                <div id='give-amount' className='grid grid-cols-3 gap-3 mb-4'>
                  {AMOUNTS.map(amount => (
                    <button
                      key={amount}
                      onClick={() => handleAmountClick(amount)}
                      className={`py-4 rounded-xl font-bold text-sm transition-all ${
                        selectedAmount === amount
                          ? 'bg-slate-900 text-white shadow-lg'
                          : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                      }`}
                    >
                      ₦{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className='relative'>
                  <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold'>
                    ₦
                  </span>
                  <input
                    type='number'
                    placeholder='Enter custom amount'
                    value={customAmount}
                    onChange={handleCustomChange}
                    className='w-full pl-10 pr-4 py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-primary focus:ring-0 outline-none text-lg font-semibold transition-colors'
                  />
                </div>
              </div>

              {/* Recurring Toggle */}
              <div className='flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-8'>
                <div className='flex items-center gap-3'>
                  <Repeat className='w-5 h-5 text-primary' />
                  <div>
                    <p className='text-sm font-bold text-slate-900'>
                      Make this recurring
                    </p>
                    <p className='text-xs text-gray-400'>
                      Give automatically every month
                    </p>
                  </div>
                </div>
                <label className='relative inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    checked={isRecurring}
                    onChange={() => setIsRecurring(!isRecurring)}
                    className='sr-only peer'
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:shadow-md after:transition-all after:duration-200 peer-checked:after:translate-x-5" />
                </label>
              </div>

              {/* Summary */}
              {displayAmount > 0 && (
                <div className='bg-orange-50 border border-orange-100 rounded-xl p-4 mb-8'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>
                      {isRecurring ? 'Monthly' : 'One-time'} gift —{' '}
                      {GIVING_TYPES.find(t => t.value === givingType)?.label}
                    </span>
                    <span className='text-2xl font-black text-slate-900'>
                      ₦{Number(displayAmount).toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              {/* Give Button */}
              {/* TODO: Wire up Give button to a real payment gateway — currently triggers nothing */}
              <Button
                size='lg'
                className='w-full justify-center text-sm font-black uppercase tracking-[0.15em] py-5'
              >
                <Heart className='w-5 h-5 mr-2' />
                Give ₦{Number(displayAmount).toLocaleString() || '0'}
              </Button>

              {/* Security Note */}
              <div className='flex items-center justify-center gap-2 mt-6 text-gray-400'>
                <Shield className='w-4 h-4' />
                <p className='text-xs font-medium'>
                  Secure, encrypted transaction. Your information is safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhereItGoesSection = () => (
  <section className='py-20 md:py-28 bg-white'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center mb-16'>
        <p className='font-script text-3xl text-primary mb-2'>Transparency</p>
        <h2 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
          Where Your Giving Goes
        </h2>
        <p className='text-gray-500 mt-4 max-w-lg mx-auto text-lg'>
          We steward every gift with integrity and accountability.
        </p>
      </div>
      <div className='grid md:grid-cols-2 gap-8'>
        {GIVING_AREAS.map(area => (
          <div
            key={area.title}
            className='group relative bg-gray-50 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-300 overflow-hidden'
          >
            <div
              className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${area.color} rounded-l-3xl`}
            />
            <div className='flex items-start gap-5'>
              <div className='w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform'>
                <area.icon className='w-7 h-7 text-slate-700' />
              </div>
              <div className='flex-1'>
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='text-xl font-bold text-slate-900'>
                    {area.title}
                  </h3>
                  <span
                    className={`text-2xl font-black bg-gradient-to-r ${area.color} bg-clip-text text-transparent`}
                  >
                    {area.percentage}
                  </span>
                </div>
                <p className='text-gray-500 leading-relaxed text-sm'>
                  {area.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WaysToGiveSection = () => {
  const methods = [
    {
      icon: CreditCard,
      title: 'Online Giving',
      description:
        'Give securely with your debit or credit card through our online portal.',
      highlight: true,
    },
    {
      icon: Landmark,
      title: 'Bank Transfer',
      description: 'Transfer directly to our church account.',
      details: [
        "God-Life Assembly Int'l",
        'Zenith Bank — 1234567890', // TODO: Replace placeholder account number with real bank details
        'GTBank — 0987654321', // TODO: Replace placeholder account number with real bank details
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Transfer',
      description:
        'Send via any mobile banking app or USSD transfer to our account.',
    },
    {
      icon: Heart,
      title: 'In Person',
      description:
        'Give during any of our services at God-Life Assembly, Jos. Our ushers are available to assist.',
    },
  ];

  return (
    <section className='py-20 md:py-28 bg-[#F9F9F9]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <p className='font-script text-3xl text-primary mb-2'>
            Convenient Options
          </p>
          <h2 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
            Ways To Give
          </h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {methods.map(method => (
            <div
              key={method.title}
              className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                method.highlight
                  ? 'bg-slate-900 text-white shadow-xl'
                  : 'bg-white shadow-md hover:shadow-lg'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  method.highlight ? 'bg-primary' : 'bg-orange-50'
                }`}
              >
                <method.icon
                  className={`w-7 h-7 ${
                    method.highlight ? 'text-white' : 'text-primary'
                  }`}
                />
              </div>
              <h3
                className={`text-lg font-bold mb-3 ${
                  method.highlight ? 'text-white' : 'text-slate-900'
                }`}
              >
                {method.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-4 ${
                  method.highlight ? 'text-gray-300' : 'text-gray-500'
                }`}
              >
                {method.description}
              </p>
              {method.details && (
                <div className='space-y-1.5 mt-4 pt-4 border-t border-gray-100'>
                  {method.details.map(detail => (
                    <p
                      key={detail}
                      className='text-xs font-semibold text-gray-500'
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className='py-20 md:py-28 bg-white'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <p className='font-script text-3xl text-primary mb-2'>Questions?</p>
          <h2 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
            Frequently Asked
          </h2>
        </div>
        <div className='space-y-4'>
          {FAQ_DATA.map((faq, i) => (
            <div
              key={faq.question}
              className='bg-gray-50 rounded-2xl overflow-hidden transition-all'
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className='w-full flex items-center justify-between p-6 text-left group'
              >
                <span className='font-bold text-slate-900 text-base pr-4'>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 pb-6' : 'max-h-0'
                }`}
              >
                <p className='px-6 text-gray-500 leading-relaxed text-sm'>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTASection = () => (
  <section className='py-20 md:py-28 bg-[#F9F9F9]'>
    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center text-white shadow-2xl overflow-hidden relative'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] pointer-events-none' />
        <div className='relative z-10'>
          <Gift className='w-12 h-12 text-primary mx-auto mb-6' />
          <h2 className='text-3xl md:text-5xl font-black mb-6 leading-tight'>
            Your Generosity
            <br />
            Fuels the Mission
          </h2>
          <p className='text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed'>
            When you give, you&apos;re not just donating — you&apos;re
            partnering with God to transform lives, build communities, and
            spread hope across the nations.
          </p>
          <a href='#give-now'>
            <Button
              size='lg'
              className='text-sm font-bold uppercase tracking-wider shadow-xl shadow-orange-500/20'
            >
              Partner With Us Today
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ─── Wrap sub-sections with MotionWrap ───
const AnimatedImpact = MotionWrap(ImpactSection, '');
const AnimatedGiveForm = MotionWrap(GiveFormSection, '');
const AnimatedWhereItGoes = MotionWrap(WhereItGoesSection, '');
const AnimatedWaysToGive = MotionWrap(WaysToGiveSection, '');
const AnimatedFAQ = MotionWrap(FAQSection, '');
const AnimatedFinalCTA = MotionWrap(FinalCTASection, '');

// ─── Main Page ───
const GivePage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ x: -40 }}
        variants={slideVariants}
        animate={slideVariants.animate}
      >
        <HeroSection />
        <AnimatedImpact />
        <AnimatedGiveForm />
        <AnimatedWhereItGoes />
        <AnimatedWaysToGive />
        <AnimatedFAQ />
        <AnimatedFinalCTA />
      </motion.div>
    </Layout>
  );
};

export default GivePage;
