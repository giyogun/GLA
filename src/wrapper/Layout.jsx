import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col w-full overflow-x-hidden'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
