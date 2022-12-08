import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'

import Error from './components/ErrorBoundary'
// import RouteMap from '@/routes'
import { clearIndexedDb, initIndexedDb } from './utils/config'

const App = (): JSX.Element => {
	useEffect(() => {
		initIndexedDb()
		return () => {
			clearIndexedDb()
		}
	}, [])

	return (
			<div>hello</div>
	)
}

export default App
