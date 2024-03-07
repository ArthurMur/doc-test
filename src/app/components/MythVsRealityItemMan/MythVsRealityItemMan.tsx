import Image from 'next/image';
import styles from './MythVsRealityItemMan.module.scss';
import { mythVsRealityItemMan } from '@/app/utils/constants';

type Props = {};

const MythVsRealityItemMan = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {mythVsRealityItemMan.map((text) => (
          <p className={styles.desc}>{text.mainText}</p>
        ))}
      </div>
      <Image
        src="/schedule.png"
        alt="График"
        width={1211}
        height={389}
        layout="responsive"
      />
    </div>
  );
};

export default MythVsRealityItemMan;
