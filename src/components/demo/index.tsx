import { useEffect } from 'react';
import useDemoHook from './useDemoHook';
import styles from './index.module.less';

interface IDemoProps {
  test?: number | string;
}

export default function Demo(props: IDemoProps) {
  const { test } = props;

  console.log('test', test);
  console.log('test', test);

             console.log('test', test);
              console.log('test', test);


              console.log('test', test);
              console.log('test', test);


              console.log('test', test);
              console.log('test', test);


              console.log('test', test);
              console.log('test', test);


  const { testDemoData } = useDemoHook({ initDemoData: 2 });


  useEffect(() => {


  });

  return (
    <div className={styles.wrap}>
      <div>Demo</div>
      <div>useDemoHook testDemoData: {testDemoData.current}</div>
    </div>
  );
}
