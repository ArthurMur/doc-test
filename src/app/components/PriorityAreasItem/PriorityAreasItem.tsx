import styles from './PriorityAreasItem.module.scss';

type Props = { mainText: React.ReactNode };

const PriorityAreasItem = ({ mainText }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.mainText}>{mainText}</p>
    </div>
  );
};

export default PriorityAreasItem;
