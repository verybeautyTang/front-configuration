import { lazy } from 'react'
import { IRoute, IChildRoute } from '@/types'

// 本地开发负责人平台管理
export const platformRouter: IChildRoute[] = [
  {
    path: '/people-management',
    element: lazy(() => import('@/pages/people-management')),
    title: '人员管理',
    key: 'peopleManagement'
  },
  {
    path: '/translator-management',
    element: lazy(() => import('@/pages/people-management')),
    title: '译者管理',
    key: 'translatorManagement'
  },
  {
    path: '/process-management',
    element: lazy(() => import('@/pages/people-management')),
    title: '流程管理',
    key: 'processManagement'
  },
]

export const routes: IRoute[] = [
  {
    path: '/',
		element: lazy(() => import('@/Layout')),
		title: 'home',
		key: 'home',
		icon: '',
    children: [
      ...platformRouter
    ]
  }
]