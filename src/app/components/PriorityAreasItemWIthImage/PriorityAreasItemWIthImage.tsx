import Image from 'next/image';
import styles from './PriorityAreasItemWIthImage.module.scss';

type Props = {
  image: string;
  mainText: React.ReactNode;
  subText: React.ReactNode;
  index: number;
};

const PriorityAreasItemWIthImage = ({
  image,
  mainText,
  subText,
  index,
}: Props) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.imageIcon}
        src={image}
        alt="man-icon"
        width={178}
        height={145}
      />
      <p className={styles.number}>{index}</p>
      <p className={styles.subText}>{subText}</p>
      <p className={styles.mainText}>{mainText}</p>
    </div>
  );
};

export default PriorityAreasItemWIthImage;
