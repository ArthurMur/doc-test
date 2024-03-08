import {
  priorityAreasItems,
  priorityAreasItemsWIthImage,
} from '@/app/utils/constants';
import styles from './PriorityAreasItemSection.module.scss';
import PriorityAreasItemWIthImage from '../PriorityAreasItemWIthImage/PriorityAreasItemWIthImage';
import PriorityAreasItem from '../PriorityAreasItem/PriorityAreasItem';

const PriorityAreasItemSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>
        Приоритетные направления фармакотерапевтической стратегии при ХОБЛ
        <sup>1</sup>:
      </p>
      <div className={styles.items}>
        {priorityAreasItemsWIthImage.map((item, index) => (
          <PriorityAreasItemWIthImage
            key={index}
            image={item.image}
            mainText={item.mainText}
            subText={item.subText}
            index={index + 1}
          />
        ))}
      </div>
      <div className={styles.arrows}>
        <div className={styles.arrow} />
        <div className={styles.arrow} />
      </div>
      <div className={styles.items}>
        {priorityAreasItems.map((item, index) => (
          <PriorityAreasItem key={index} mainText={item.mainText} />
        ))}
      </div>
    </div>
  );
};

export default PriorityAreasItemSection;
