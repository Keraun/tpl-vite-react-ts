import { GLOBAL_CONTEXT } from './context'

import Layout from "./layout"
import Home from '@/pages/home'

export default function App() {

    // 初始化的全局数据
    const initValue = { test: 'test' };

    return <GLOBAL_CONTEXT.Provider value={initValue}>
        <Layout>
            <Home />
        </Layout>
    </GLOBAL_CONTEXT.Provider>
}