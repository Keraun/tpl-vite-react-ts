import { useContext, useEffect } from 'react';
import { GLOBAL_CONTEXT } from '@/context';
import DemoComponent from '@/components/demo';
import useHomeHook from './useHomeHook';
import './index.less';
import styles from './index.module.less';

export default function Home() {
  const globalContext = useContext(GLOBAL_CONTEXT);
  const { testData } = useHomeHook({ initTestData: 1 });
  // const { data, error, loading, run } = useRequest(async (data) => {
  //     const response = fetch({
  //         method: 'post',
  //         url: '/user/12345',
  //         data: {
  //             firstName: 'Fred',
  //             lastName: 'Flintstone'
  //         }
  //     })
  //     return response;
  // }, {
  //     manual: true
  // });

  useEffect(() => {}, []);

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
