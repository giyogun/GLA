import Layout from '~/wrapper/Layout';
import { motion } from 'framer-motion';
import MotionWrap from '~/wrapper/MotionWrap';
import Hero from './Hero';
import WhoWeAre from './WhoWeAre';
import OurVision from './OurVision';
import OurStory from './OurStory';
import OurLeadership from './OurLeadership';
import WelcomeCTA from './WelcomeCTA';

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

const AnimatedWhoWeAre = MotionWrap(WhoWeAre, '');
const AnimatedOurVision = MotionWrap(OurVision, '');
const AnimatedOurStory = MotionWrap(OurStory, '');
const AnimatedOurLeadership = MotionWrap(OurLeadership, '');
const AnimatedWelcomeCTA = MotionWrap(WelcomeCTA, '');

const AboutPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ x: -40 }}
        variants={slideVariants}
        animate={slideVariants.animate}
      >
        <Hero />
        <AnimatedWhoWeAre />
        <AnimatedOurVision />
        <AnimatedOurStory />
        <AnimatedOurLeadership />
        <AnimatedWelcomeCTA />
      </motion.div>
    </Layout>
  );
};

export default AboutPage;
