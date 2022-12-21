import { MenuItem } from '@/types/route'
import  { platformRouter } from './routes'

export const menu: MenuItem [] = [
  {
    title: '首页',
    icon: '',
    path: '/dashboard',
    key: 'dashboard',
  },
  {
    title: '平台管里',
    icon: '',
    key: 'management',
    children: [
      ...platformRouter
    ]
  }
]