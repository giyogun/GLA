import Events from '~/components/Events';
import { Hero } from '~/components/Hero';
import LocationFinder from '~/components/LocationFinder';
import Missions from '~/components/Missions';
import OnlineBanner from '~/components/OnlineBanner';
import PartnerCTA from '~/components/PartnerCTA';
import Pastors from '~/components/Pastors';
import Resources from '~/components/Resources';
import Teachings from '~/components/Teachings';
import Testimonials from '~/components/Testimonials';
import Vision from '~/components/Vision';
import Layout from '~/wrapper/Layout';

const Home = () => {
  return (
    <Layout>
      <main className='flex-grow'>
        <Hero />
        <Vision />
        <Pastors />
        <Teachings />
        <PartnerCTA />
        <Resources />
        <Missions />
        <OnlineBanner />
        <Events />
        <Testimonials />
        <LocationFinder />
      </main>
    </Layout>
  );
};

export default Home;
