import resource1 from '~/assets/images/resource1.png';
import resource2 from '~/assets/images/resource2.jpg';
import resource3 from '~/assets/images/resource3.png';
import project1 from '~/assets/images/project1.jpg';
import event1 from '~/assets/images/event1.jpg';
import event2 from '~/assets/images/event2.jpg';
import event3 from '~/assets/images/event3.jpg';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Play,
  ChevronDown,
  Calendar,
  MapPin,
  Globe,
  Music,
  Heart,
  Mail,
  Phone,
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Home', href: '#', link: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Resources', href: '#resources' },
  { label: 'Outreach', href: '#outreach', link: '/outreach' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Give', href: '#give' },
  { label: 'Events', href: '#events', link: '/events' },
];

export const SERMONS = [
  {
    id: '1',
    title: 'The Northern Church; History & The Way Forward',
    date: 'December 11th 2025',
    thumbnail: 'https://img.youtube.com/vi/PnMJ9MCUiu0/maxresdefault.jpg',
    duration: '34:52',
    videoId: 'PnMJ9MCUiu0',
  },
  {
    id: '2',
    title: 'God Works The Night Shift',
    date: 'November 7th 2025',
    thumbnail: 'https://img.youtube.com/vi/4bf7becvVNQ/maxresdefault.jpg',
    duration: '52:29',
    videoId: '4bf7becvVNQ',
  },
  {
    id: '3',
    title: 'Hear, See, Yield! | Pastor Chingtok Ishaku | Qavah ; The Forge',
    date: 'October 31st 2025',
    thumbnail: 'https://img.youtube.com/vi/uMTdhEgLx6s/maxresdefault.jpg',
    duration: '1:18:40',
    videoId: 'uMTdhEgLx6s',
  },
  {
    id: '4',
    title:
      'The Law Of Spiritual Appetite | Pastor Chingtok Ishaku | RIG GLOBAL',
    date: 'October 30th 2025',
    thumbnail: 'https://img.youtube.com/vi/RbjA05vpP_I/maxresdefault.jpg',
    duration: '2:09:08',
    videoId: 'RbjA05vpP_I',
  },
  {
    id: '5',
    title: 'Your Greatest Enemy | Pastor Chingtok Ishaku | RIG GLOBAL',
    date: 'October 23rd 2025',
    thumbnail: 'https://img.youtube.com/vi/VazbrmfTkok/sddefault.jpg',
    duration: '1:16:08',
    videoId: 'VazbrmfTkok',
  },
];

export const RESOURCES = [
  {
    id: 1,
    // title: 'The Power of the Cross',
    subtitle: 'sermons',
    image: resource1,
    type: 'dark',
  },
  {
    id: 2,
    // title: 'Hymns & Spiritual Songs',
    subtitle: 'Music Catalogue',
    image: resource2,
    type: 'image',
  },
  {
    id: 3,
    // title: 'The GLA Podcast',
    subtitle: 'Podcast',
    image: resource3,
    type: 'image',
    link: 'https://open.spotify.com/show/3hMej9FPx7V8BcdZBC7gK7?si=4ccf4d216d384194',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: '',
    subtitle: 'A Pastor Chingtok Ishaku Initiative',
    description:
      'Grow and connect to a global community of believers walking in faith and purpose',
    image: project1,
  },
  {
    id: 2,
    title: '',
    subtitle: 'A Pastor Chingtok Ishaku Initiative',
    description:
      'Grow and connect to a global community of believers walking in faith and purpose',
    image: project1,
  },
];

export const UPCOMING_EVENTS = [
  {
    id: '1',
    title: 'Leadership Conference',
    location: 'God-Life Assembly, Jos',
    day: '09',
    description:
      'This conference is designed to equip believers, ministers, and leaders across with practical leadership strategies. Join us for an impactful session.',
    image: event1,
    category: 'Conference',
    month: 'DEC',
  },
  {
    id: '2',
    title: 'Faith & Favor Seminar',
    location: 'God-Life Assembly, Jos',
    day: '09',
    description:
      'A dedicated time of learning and growth in the word. This seminar focuses on spiritual disciplines that invite divine favor into our lives.',
    image: event2,
    category: 'Seminar',
    month: 'DEC',
  },
  {
    id: '3',
    title: 'Kingdom Advance Night',
    location: 'God-Life Assembly, Jos',
    day: '09',
    description:
      'Prophetic worship night aimed at spiritual advancement and territorial dominion. Featuring guest ministers and our resident choir.',
    image: event3,
    category: 'Worship',
    month: 'DEC',
  },
  {
    id: '4',
    title: 'Global Outreach 2026',
    location: 'God-Life Assembly, Jos',
    day: '09',
    description:
      'Expanding our reach to the ends of the earth. Be part of the team bringing hope and the gospel message to the underserved communities.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    category: 'Outreach',
    month: 'JAN',
  },
  {
    id: '5',
    title: 'Ministers Empowerment',
    location: 'God-Life Assembly, Jos',
    day: '09',
    description:
      'Refueling and re-arming the frontlines of ministry. An intensive workshop for those in active church leadership and pastoral roles.',
    image:
      'https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070&auto=format&fit=crop',
    category: 'Conference',
    month: 'JAN',
  },
  {
    id: '6',
    title: 'Night of Wonders',
    location: 'God-Life Assembly, Jos',
    day: '09',
    description:
      'Experience the supernatural. A night dedicated to healing, deliverance, and the miraculous power of God in a corporate gathering.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    category: 'Worship',
    month: 'FEB',
  },
];

export const MOCK_EVENTS = [
  {
    id: '1',
    title: 'Leadership Conference',
    subtitle: 'God-Life Assembly, Inc',
    date: 'DEC 09',
    fullDate: 'December 9th 2025',
    description:
      'This conference is designed to equip believers, ministers, and leaders across with practical leadership strategies. Join us for an impactful session.',
    image: 'https://picsum.photos/id/101/600/400',
    category: 'Conference',
    month: 'December',
  },
  {
    id: '2',
    title: 'Faith & Favor Seminar',
    subtitle: 'God-Life Assembly, Inc',
    date: 'DEC 12',
    fullDate: 'December 12th 2025',
    description:
      'A dedicated time of learning and growth in the word. This seminar focuses on spiritual disciplines that invite divine favor into our lives.',
    image: 'https://picsum.photos/id/102/600/400',
    category: 'Seminar',
    month: 'December',
  },
  {
    id: '3',
    title: 'Kingdom Advance Night',
    subtitle: 'God-Life Assembly, Inc',
    date: 'DEC 15',
    fullDate: 'December 15th 2025',
    description:
      'Prophetic worship night aimed at spiritual advancement and territorial dominion. Featuring guest ministers and our resident choir.',
    image: 'https://picsum.photos/id/103/600/400',
    category: 'Worship',
    month: 'December',
  },
  {
    id: '4',
    title: 'Global Outreach 2026',
    subtitle: 'God-Life Assembly, Inc',
    date: 'JAN 05',
    fullDate: 'January 5th 2026',
    description:
      'Expanding our reach to the ends of the earth. Be part of the team bringing hope and the gospel message to the underserved communities.',
    image: 'https://picsum.photos/id/104/600/400',
    category: 'Outreach',
    month: 'January',
  },
  {
    id: '5',
    title: 'Ministers Empowerment',
    subtitle: 'God-Life Assembly, Inc',
    date: 'JAN 18',
    fullDate: 'January 18th 2026',
    description:
      'Refueling and re-arming the frontlines of ministry. An intensive workshop for those in active church leadership and pastoral roles.',
    image: 'https://picsum.photos/id/106/600/400',
    category: 'Conference',
    month: 'January',
  },
  {
    id: '6',
    title: 'Night of Wonders',
    subtitle: 'God-Life Assembly, Inc',
    date: 'FEB 02',
    fullDate: 'February 2nd 2026',
    description:
      'Experience the supernatural. A night dedicated to healing, deliverance, and the miraculous power of God in a corporate gathering.',
    image: 'https://picsum.photos/id/107/600/400',
    category: 'Worship',
    month: 'February',
  },
];

export const COLORS = {
  primary: '#F97316', // Vibrant Orange
  secondary: '#111827', // Deep Dark
  accent: '#3B82F6', // Blue for some UI elements
};

export const ICONS = {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Play,
  ChevronDown,
  Calendar,
  MapPin,
  Globe,
  Music,
  Heart,
  Mail,
  Phone,
};

export const NAV_LINKS = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT US', href: '#' },
  { label: 'RESOURCES', href: '#' },
  { label: 'OUTREACH', href: '#' },
  { label: 'GIVE', href: '#' },
  { label: 'EVENTS', href: '#', active: true },
];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const EVENT_TYPES = [
  'Conference',
  'Worship Night',
  'Outreach',
  'Seminar',
];
