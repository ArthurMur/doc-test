import Image from 'next/image';
import styles from './MythVsRealityItemDanger.module.scss';
import { mythVsRealityItemDanger } from '@/app/utils/constants';

const MythVsRealityItemDanger = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.text}>
          {mythVsRealityItemDanger.map((text) => (
            <p className={styles.desc}>{text.mainText}</p>
          ))}
        </div>
      </div>
      <p className={styles.subtitle}>Пятилетняя выживаемость пациентов</p>
      <Image
        src="/statistics.png"
        alt="Статистика"
        width={1209}
        height={468}
        layout="responsive"
      />
    </div>
  );
};

export default MythVsRealityItemDanger;
