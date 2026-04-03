import { MapPin, Phone, Mail } from 'lucide-react';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from '~/components/SocialIcons';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.png';

export const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white pt-20 pb-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          <div className='space-y-6'>
            <img
              src={logo}
              alt='Church Logo'
              className='w-[128px] h-[100px]'
              style={{
                objectFit: 'contain',
                marginLeft: '-18px',
                marginBottom: '-48px',
                marginTop: '-30px',
              }}
            />
            <div className='flex items-center gap-2 text-white font-bold text-2xl tracking-tight'></div>
            <p className='text-gray-400 leading-relaxed'>
              The God-Life Assembly has been called to raise a pure breed of
              believers
            </p>
            {/* TODO: Replace all '#' hrefs below with real social media URLs */}
            <div className='flex gap-4'>
              <a
                href='https://www.facebook.com/TheGLAJos/' // TODO: Add real Facebook URL
                className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors'
              >
                <Facebook className='w-5 h-5' />
              </a>
              <a
                href='#' // TODO: Add real Instagram URL
                className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors'
              >
                <Instagram className='w-5 h-5' />
              </a>
              <a
                href='#' // TODO: Add real YouTube URL
                className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors'
              >
                <Youtube className='w-5 h-5' />
              </a>
              <a
                href='#' // TODO: Add real Twitter/X URL
                className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors'
              >
                <Twitter className='w-5 h-5' />
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-lg font-bold mb-6 text-primary transition-colors'>
              QUICK LINKS
            </h4>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <Link
                  to='/about'
                  className='hover:text-primary transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/give'
                  className='hover:text-primary transition-colors'
                >
                  Give
                </Link>
              </li>
              <li>
                <Link
                  to='/events'
                  className='hover:text-primary transition-colors'
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to='/branches'
                  className='hover:text-primary transition-colors'
                >
                  Find a Branch
                </Link>
              </li>
              {/* TODO: No dedicated page yet */}
              <li>
                <a
                  href='#'
                  className='hover:text-primary transition-colors cursor-not-allowed opacity-50'
                >
                  Join a Ministry
                </a>
              </li>
              {/* TODO: No dedicated page yet */}
              <li>
                <a
                  href='#'
                  className='hover:text-primary transition-colors cursor-not-allowed opacity-50'
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-bold mb-6 text-primary transition-colors'>
              RESOURCES
            </h4>
            <ul className='space-y-3 text-gray-400'>
              {/* TODO: No dedicated page yet */}
              <li>
                <a
                  href='#'
                  className='hover:text-primary transition-colors cursor-not-allowed opacity-50'
                >
                  Music Ministry
                </a>
              </li>
              {/* TODO: No dedicated page yet */}
              <li>
                <a
                  href='#'
                  className='hover:text-primary transition-colors cursor-not-allowed opacity-50'
                >
                  Books
                </a>
              </li>
              <li>
                <Link
                  to='/resources'
                  className='hover:text-primary transition-colors'
                >
                  Sermons
                </Link>
              </li>
              {/* TODO: No dedicated page yet */}
              <li>
                <a
                  href='#'
                  className='text-primary transition-colors cursor-not-allowed opacity-50'
                >
                  LEGAL
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-bold mb-6 text-primary transition-colors'>
              GET IN TOUCH
            </h4>
            <ul className='space-y-4 text-gray-400'>
              <li>
                <Link
                  to='/contact'
                  className='hover:text-primary transition-colors'
                >
                  Prayer Request
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='hover:text-primary transition-colors'
                >
                  Support/Enquiry
                </Link>
              </li>
              <li className='flex gap-3 items-start'>
                <MapPin className='w-5 h-5 text-primary shrink-0' />
                {/* TODO: Verify this is the correct church address */}
                <span>
                  Tabernacle of David, Behind Moneco Plaza, Yingi, Rayfield, Jos
                </span>
              </li>
              <li className='flex gap-3 items-center'>
                <Phone className='w-5 h-5 text-primary shrink-0' />

                <span>+2348184402126</span>
              </li>
              <li className='flex gap-3 items-center'>
                <Mail className='w-5 h-5 text-primary shrink-0' />
                {/* TODO: Verify this is the correct email address */}
                <span>godlifeassemblyjos@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} God-Life Assembly. All rights
            reserved.
          </p>
          {/* TODO: Add real Privacy Policy and Terms of Service pages/links */}
          <div className='flex gap-6'>
            <a href='#' className='hover:text-white'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-white'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
