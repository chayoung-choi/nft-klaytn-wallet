import {Mail, Home, Server, User} from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'page2',
    title: '2 페이지',
    icon: <Server size={20} />,
    navLink: '/2'
  },
  {
    id: 'page3',
    title: '3 페이지',
    icon: <Mail size={20} />,
    navLink: '/3'
  },
  {
    id: 'account',
    title: '계정 관리',
    icon: <User size={20} />,
    navLink: '/account'
  }
]
