import useDemoHook from './useDemoHook';
import styles from './index.module.less'

interface IDemoProps { }

export default function Demo(props: IDemoProps) {

    const { testDemoData } = useDemoHook({ initDemoData: 2 });
    return (
        <div className={styles.wrap}>
            <div>Demo</div>
            <div>useDemoHook testDemoData: {testDemoData.current}</div>
        </div>
    );
}

