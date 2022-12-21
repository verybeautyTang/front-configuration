import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import store from '@/store'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import './styles/base.less'

const container = document.getElementById('app');
const root = createRoot(container!);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // 窗口聚焦不重新获取数据
			retry: 1, // 失败只会重试一次
			retryDelay: 1000 // 重试等待时间
		}
	}
})

root.render(
	<ConfigProvider locale={zhCN}>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<App />
			</Provider>
		</QueryClientProvider>
	</ConfigProvider>
)
