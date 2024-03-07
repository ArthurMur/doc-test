import MythVsRealitySection from '../MythVsRealitySection/MythVsRealitySection';
import TherapySection from '../TherapySection/TherapySection';
import styles from './Content.module.scss';

type Props = {};

const Content: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.container}>
      <MythVsRealitySection />
      <TherapySection />
    </div>
  );
};

export default Content;
