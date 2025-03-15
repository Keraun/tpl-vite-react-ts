import { useEffect } from 'react';
import classNames from 'classnames';
import useDemoHook from './useDemoHook';
import { Button } from 'antd';
import styles from './index.module.less';
import request from '@/lib/request';
interface IDemoProps {
  test?: number | string;
}

export default function Demo(props: IDemoProps) {
  const { test } = props;

  const { testDemoData } = useDemoHook({ initDemoData: 2 });

  useEffect(() => {
    request('/api/user');
  });

  return (
    <div className={classNames(styles.wrap, styles.test)}>
      <div>Demo</div>
      <div>useDemoHook testDemoData: {testDemoData.current}</div>
      <div>{test}</div>
      <Button>131313</Button>
    </div>
  );
}
