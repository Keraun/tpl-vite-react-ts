import { useContext, useEffect } from 'react';
import { GLOBAL_CONTEXT } from '@/context';
import { useRequest } from 'ahooks';
import request from '@/lib/request';
import DemoComponent from '@/components/demo';
import useHomeHook from './useHomeHook';
import './index.less';
import styles from './index.module.less';

export default function Home() {
  const globalContext = useContext(GLOBAL_CONTEXT);
  const { testData } = useHomeHook({ initTestData: 1 });

  const { data, error, loading } = useRequest(async () => {
    const response = await request('/api/user', {
      params: { test: 1 },
      data: { test: 2 },
    });
    return response;
  });

  useEffect(() => {}, []);

  console.log('api mock data', data, error, loading);
  console.log('globalContext', globalContext);
  console.log('useHomeHook testData', testData.current);

  return (
    <div className={styles.wrap}>
      <div>Home</div>
      <div>globalContext: {JSON.stringify(globalContext)}</div>
      <div>useHomeHook testData: {testData.current}</div>
      <div>
        <DemoComponent />
      </div>
    </div>
  );
}
