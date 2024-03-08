import MythVsRealitySection from '../MythVsRealitySection/MythVsRealitySection';
import TherapySection from '../TherapySection/TherapySection';
import styles from './Content.module.scss';

const Content = () => {
  return (
    <div className={styles.container}>
      <MythVsRealitySection />
      <TherapySection />
    </div>
  );
};

export default Content;
