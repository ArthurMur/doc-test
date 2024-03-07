import styles from './MythVsRealitySection.module.scss';
import { mythVsRealityItems } from '@/app/utils/constants';
import MythVsRealityItem from '../MythVsRealityItem/MythVsRealityItem';

export default function MythVsRealitySection() {
  return (
    <div className={styles.container}>
      <div className={styles.contentHeader}>
        <h1 className={styles.title}>ХОБЛ: мифы и реальность</h1>
      </div>
      <div className={styles.items}>
        {mythVsRealityItems.map((item, index) => (
          <MythVsRealityItem
            key={index}
            image={item.image}
            mainText={item.mainText}
            subText={item.subText}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
