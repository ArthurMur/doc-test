import React from 'react';
import styles from './TherapySection.module.scss';
import PriorityAreasItemSection from '../PriorityAreasItemSection/PriorityAreasItemSection';

type Props = {};

const TherapySection = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentHeader}>
        <h1 className={styles.title}>Терапия ХОБЛ: что в фокусе?</h1>
      </div>
      <div className={styles.signal}>
        <h2 className={styles.signalText}>
          Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
        </h2>
      </div>
      <PriorityAreasItemSection />
    </div>
  );
};

export default TherapySection;
