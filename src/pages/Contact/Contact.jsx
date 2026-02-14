import { useState } from 'react';
import Layout from '~/wrapper/Layout';
import { motion } from 'framer-motion';
import { PrayerCTA } from './PrayerCTA';
import LocationFinder from '~/components/LocationFinder';
import CommonHero from '~/components/CommonHero';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? e.target.checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Replace with real form submission (e.g., email service, backend API)
    alert('Message sent! Our tam will get back to you shortly.');
    console.log('Form Submitted:', formData);
  };

  return (
    <Layout>
      <motion.div
        initial={{ x: -40 }}
        // animate={{ x: 0 }}
        variants={slideVariants}
        animate={slideVariants.animate}
      >
        <section
          className='relative bg-neutral-900 pt-20 mb-32 min-h-[100vh]
           '
        >
          <CommonHero
            title='Get in Touch Today'
            subtitle='We’re here to support you, pray with you, and answer any questions you may have.'
          />
          <div
            className='absolute left-1/2 -bottom-24 md:-bottom-40 -translate-x-1/2 w-full max-w-7xl px-4 '
            style={{ top: '31rem' }}
          >
            <div
              className='relative rounded-[40px] overflow-hidden  '
              // style={{ background: 'green' }}
            >
              {/* <div className='absolute inset-0 bg-black/40'></div> */}
              <div className='max-w-3xl mx-auto bg-[#EDEDED] rounded-[2.5rem] shadow-2xl p-8 md:p-14 mb-20'>
                <form onSubmit={handleSubmit} className='space-y-8'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* First Name */}
                    <div className='space-y-2'>
                      <label className='block text-sm font-bold text-gray-700'>
                        First Name
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        placeholder='John'
                        className='w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-800 placeholder-gray-400'
                        onChange={handleChange}
                        value={formData.firstName}
                      />
                    </div>

                    {/* Last Name */}
                    <div className='space-y-2'>
                      <label className='block text-sm font-bold text-gray-700'>
                        Last name<span className='text-red-500 ml-1'>*</span>
                      </label>
                      <input
                        type='text'
                        name='lastName'
                        placeholder='Carter'
                        required
                        className='w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-800 placeholder-gray-400'
                        onChange={handleChange}
                        value={formData.lastName}
                      />
                    </div>

                    {/* Email */}
                    <div className='space-y-2'>
                      <label className='block text-sm font-bold text-gray-700'>
                        Email<span className='text-red-500 ml-1'>*</span>
                      </label>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        required
                        className='w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-800 placeholder-gray-400'
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className='space-y-2'>
                      <label className='block text-sm font-bold text-gray-700'>
                        Phone number<span className='text-red-500 ml-1'>*</span>
                      </label>
                      <div className='relative flex'>
                        {/* <div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
                          <img
                            src='https://flagcdn.com/w20/us.png'
                            className='w-5'
                            alt='US Flag'
                          />
                          <span className='text-gray-500 text-xs ml-2'>
                            US ▼
                          </span>
                        </div> */}
                        <input
                          type='tel'
                          name='phone'
                          placeholder='555-123-4567'
                          required
                          className='w-full pl-6 pr-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-800 placeholder-gray-400'
                          onChange={handleChange}
                          value={formData.phone}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className='space-y-2'>
                    <label className='block text-sm font-bold text-gray-700'>
                      Subject
                    </label>
                    <div className='relative'>
                      <select
                        name='subject'
                        className='w-full appearance-none px-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-500'
                        onChange={handleChange}
                        value={formData.subject}
                      >
                        <option value=''>Select</option>
                        <option value='prayer'>Prayer Request</option>
                        <option value='membership'>Church Membership</option>
                        <option value='giving'>Giving & Donations</option>
                        <option value='events'>Upcoming Events</option>
                        <option value='general'>General Inquiry</option>
                      </select>
                      <div className='absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none text-gray-400'>
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className='space-y-2'>
                    <label className='block text-sm font-bold text-gray-700'>
                      Message<span className='text-red-500 ml-1'>*</span>
                    </label>
                    <textarea
                      name='message'
                      rows={5}
                      required
                      placeholder='Please share as much information as possible so our team can serve you better'
                      className='w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-800 placeholder-gray-400 resize-none'
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                  </div>

                  {/* Consent */}
                  <div className='flex items-start space-x-3'>
                    <div className='flex items-center h-5'>
                      <input
                        type='checkbox'
                        name='consent'
                        id='consent'
                        className='w-5 h-5 accent-orange-600 rounded cursor-pointer'
                        onChange={handleChange}
                        checked={formData.consent}
                      />
                    </div>
                    <label
                      htmlFor='consent'
                      className='text-sm font-medium text-gray-600 cursor-pointer'
                    >
                      Please share as much information as possible so our team
                      can serve you better
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    className='w-full py-5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 transition-all transform active:scale-[0.98]'
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <PrayerCTA />
        <LocationFinder />
      </motion.div>
    </Layout>
  );
};

export default Contact;
