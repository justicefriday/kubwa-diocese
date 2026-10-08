export const nav = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    children: [
      { label: 'History', to: '/about/history' },
      { label: 'Motto & Anthem', to: '/about/motto-anthem' },
      { label: 'Vision & Mission', to: '/about/vision-mission' },
    ],
  },
  { label: 'The Bishop', to: '/bishop' },
  { label: 'Ministries', to: '/ministries' },
  { label: 'Parishes', to: '/parishes' },
  { label: 'News & Events', to: '/news-events' },
  { label: 'Contact', to: '/contact' },
]