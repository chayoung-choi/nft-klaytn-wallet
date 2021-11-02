import {Mail, Home, Server, User} from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'account',
    title: '계정 관리',
    icon: <User size={20} />,
    navLink: '/account'
  }
]
