import resource1 from '~/assets/images/resource1.png';
import resource2 from '~/assets/images/resource2.jpg';
import resource3 from '~/assets/images/resource3.png';
import project1 from '~/assets/images/project1.jpg';
import event1 from '~/assets/images/event1.jpg';
import event2 from '~/assets/images/event2.jpg';
import event3 from '~/assets/images/event3.jpg';
import daddo from '~/assets/images/daddo.jpg';
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
  { label: 'About Us', href: '#about', link: '/about' },
  { label: 'Resources', href: '#resources', link: '/resources' },
  { label: 'Outreach', href: '#outreach', link: '/outreach' },
  // { label: 'Ministries', href: '#ministries' },
  { label: 'Give', href: '#give', link: '/give' },
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

// TODO: Replace placeholder data with real featured sermon details
export const FEATURED_SERMON = {
  title: 'Faith in the faith of God',
  author: 'Pr. John Doe', // TODO: Replace generic author name with real pastor name
  date: 'July 23, 2023',
  description:
    "Experience God's power, heal, worship, and be transformed. This message explores the depths of what it means to trust God's own faithfulness when ours feels small.",
  image: 'https://picsum.photos/seed/sermon1/1200/600', // TODO: Replace placeholder image with real sermon image
};

// TODO: Replace with real related sermons — titles are all duplicates and images are placeholders
export const RELATED_SERMONS = [
  {
    id: 'rs1',
    title: 'Faith in the faith of God', // TODO: Replace duplicate title with real sermon title
    time: '45 Mins',
    image: 'https://picsum.photos/seed/rs1/100/100', // TODO: Replace placeholder image
  },
  {
    id: 'rs2',
    title: 'Faith in the faith of God', // TODO: Replace duplicate title with real sermon title
    time: '38 Mins',
    image: 'https://picsum.photos/seed/rs2/100/100', // TODO: Replace placeholder image
  },
  {
    id: 'rs3',
    title: 'Faith in the faith of God', // TODO: Replace duplicate title with real sermon title
    time: '52 Mins',
    image: 'https://picsum.photos/seed/rs3/100/100', // TODO: Replace placeholder image
  },
  {
    id: 'rs4',
    title: 'Faith in the faith of God', // TODO: Replace duplicate title with real sermon title
    time: '41 Mins',
    image: 'https://picsum.photos/seed/rs4/100/100', // TODO: Replace placeholder image
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

// TODO: Add real project titles, unique descriptions, and distinct images for each project
export const PROJECTS = [
  {
    id: 1,
    title: '', // TODO: Add real project title
    subtitle: 'A Pastor Chingtok Ishaku Initiative',
    description:
      'Grow and connect to a global community of believers walking in faith and purpose',
    image: project1,
  },
  {
    id: 2,
    title: '', // TODO: Add real project title
    subtitle: 'A Pastor Chingtok Ishaku Initiative',
    description:
      'Grow and connect to a global community of believers walking in faith and purpose', // TODO: Replace duplicate description
    image: project1, // TODO: Replace with a distinct image for this project
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
    startDate: 'Wednesday, December 9, 2026',
    endDate: 'Friday, December 11, 2026',
    speakers: [
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
    ],
  },
  {
    id: '2',
    title: 'Faith & Favor Seminar',
    location: 'God-Life Assembly, Jos',
    day: '12',
    description:
      'A dedicated time of learning and growth in the word. This seminar focuses on spiritual disciplines that invite divine favor into our lives.',
    image: event2,
    category: 'Seminar',
    month: 'DEC',
    startDate: 'Wednesday, December 12, 2026',
    endDate: 'Friday, December 14, 2026',
    speakers: [
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
    ],
  },
  {
    id: '3',
    title: 'Kingdom Advance Night',
    location: 'God-Life Assembly, Jos',
    day: '15',
    description:
      'Prophetic worship night aimed at spiritual advancement and territorial dominion. Featuring guest ministers and our resident choir.',
    image: event3,
    category: 'Worship',
    month: 'DEC',
    startDate: 'Wednesday, December 15, 2026',
    endDate: 'Friday, December 17, 2026',
    speakers: [
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
    ],
  },
  {
    id: '4',
    title: 'Global Outreach 2026',
    location: 'God-Life Assembly, Jos',
    day: '05',
    description:
      'Expanding our reach to the ends of the earth. Be part of the team bringing hope and the gospel message to the underserved communities.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop', // TODO: Replace stock photo with real event image
    category: 'Outreach',
    month: 'JAN',
    startDate: 'Monday, January 5, 2026',
    endDate: 'Wednesday, January 7, 2026',
    speakers: [
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
    ],
  },
  {
    id: '5',
    title: 'Ministers Empowerment',
    location: 'God-Life Assembly, Jos',
    day: '18',
    description:
      'Refueling and re-arming the frontlines of ministry. An intensive workshop for those in active church leadership and pastoral roles.',
    image:
      'https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070&auto=format&fit=crop', // TODO: Replace stock photo with real event image
    category: 'Conference',
    month: 'JAN',
    startDate: 'Monday, January 18, 2026',
    endDate: 'Wednesday, January 20, 2026',
    speakers: [
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
    ],
  },
  {
    id: '6',
    title: 'Night of Wonders',
    location: 'God-Life Assembly, Jos',
    day: '02',
    description:
      'Experience the supernatural. A night dedicated to healing, deliverance, and the miraculous power of God in a corporate gathering.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop', // TODO: Replace stock photo with real event image
    category: 'Worship',
    month: 'FEB',
    startDate: 'Monday, February 2, 2026',
    endDate: 'Wednesday, February 4, 2026',
    speakers: [
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
    ],
  },
  {
    id: 'camp-meeting-2026',
    title: 'Camp Meeting 2026',
    location: '', // TODO: Add real event location
    day: '18',
    description:
      'Discover upcoming conferences, worship nights, and community outreach events',
    image: event1,
    category: 'Conference',
    month: 'AUG',
    startDate: 'Wednesday, August 18, 2026',
    endDate: 'Sunday, August 24, 2026',
    speakers: [
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
      {
        name: 'Pst Chingtok Ishaku',
        role: 'Lead Global Pastor, God-Life Assembly',
        image: daddo,
      },
    ],
  },
];

// TODO: Replace all picsum.photos placeholder images in MOCK_EVENTS with real event images
export const MOCK_EVENTS = [
  {
    id: '1',
    title: 'Leadership Conference',
    subtitle: 'God-Life Assembly, Inc',
    date: 'DEC 09',
    fullDate: 'December 9th 2025',
    description:
      'This conference is designed to equip believers, ministers, and leaders across with practical leadership strategies. Join us for an impactful session.',
    image: 'https://picsum.photos/id/101/600/400', // TODO: Replace placeholder image
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

export const Icons = {
  SmallPlay: () => (
    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
      <path
        fillRule='evenodd'
        d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
        clipRule='evenodd'
      />
    </svg>
  ),
};

// TODO: Replace with real resource entries — titles, speaker, category, and dates are all duplicated/generic
export const RESOURCE_PAGE = [
  {
    id: '1',
    title: 'By Faith Series', // TODO: Replace with real resource title
    category: 'The Wisdom Series', // TODO: Replace with real category
    speaker: 'Pr. Chris Moore', // TODO: Replace generic speaker name with real speaker
    date: 'July 21, 2023', // TODO: Replace with real date
    image: event2,
    description: "Experience God's power through faith-led insights.",
    type: 'Video',
  },
  {
    id: '2',
    title: 'By Faith Series', // TODO: Replace duplicate title
    category: 'The Wisdom Series', // TODO: Replace duplicate category
    speaker: 'Pr. Chris Moore', // TODO: Replace generic speaker name
    date: 'July 21, 2023', // TODO: Replace duplicate date
    image: event2, // TODO: Use a distinct image
    description: 'Walking in the miraculous through the Word.',
    type: 'Video',
  },
  {
    id: '3',
    title: 'By Faith Series', // TODO: Replace duplicate title
    category: 'The Wisdom Series', // TODO: Replace duplicate category
    speaker: 'Pr. Chris Moore', // TODO: Replace generic speaker name
    date: 'July 21, 2023', // TODO: Replace duplicate date
    image: event3,
    description: 'Strength in the secret place of the Most High.',
    type: 'Video',
  },
];

export const LEADERSHIP = [
  {
    id: 1,
    name: 'Pst Chingtok Ishaku',
    role: "Global Lead Pastor, God-Life Assembly Int'l",
    image: daddo,
  },
  {
    id: 2,
    name: 'Pst Sarah Chingtok',
    role: 'Senior Pastor, God-Life Assembly, Jos',
    image: 'https://picsum.photos/id/1027/600/600', // TODO: Replace placeholder image with real photo of Pst Sarah Chingtok
  },
];
