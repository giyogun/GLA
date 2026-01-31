import Layout from '~/wrapper/Layout';
import Hero from './Hero';
import MissionFocus from './MissionFocus';
import FeedYingi from './FeedYingi';
import BePart from './BePart';
import FinalCTA from './FinalCTA';
import { motion } from 'framer-motion';

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
const MissionsPage = () => {
  return (
    <Layout>
      <motion.section
        initial={{ x: -40 }}
        variants={slideVariants}
        animate={slideVariants.animate}
      >
        <Hero />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
          <MissionFocus />
          <FeedYingi />
          <BePart />
          <FinalCTA />
        </div>
      </motion.section>
    </Layout>
  );
};

export default MissionsPage;
